import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const LogoTyping = ({ width = '100%', height = '200px', text = 'SalesEngineAI™' }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const lettersRef = useRef([]);
  const frameIdRef = useRef(null);
  const isAnimatingRef = useRef(true);

  useEffect(() => {
    isAnimatingRef.current = true;
    if (!containerRef.current) return;

    // Initialize Three.js scene, camera, renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 1);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(1, 1, 1);
    scene.add(dirLight);

    // Shared material for all letter‐particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: window.devicePixelRatio }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        uniform float pixelRatio;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * pixelRatio * (300.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = 1.0 - smoothstep(0.4, 0.5, d);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    // Prepare measurement context
    const measureCtx = document.createElement('canvas').getContext('2d');
    const font = 'bold 90px Arial';
    measureCtx.font = font;

    // Compute widths and total
    const chars = Array.from(text);
    const charWidths = chars.map(c => measureCtx.measureText(c).width);
    const totalWidth = charWidths.reduce((a, b) => a + b, 0);
    const scale = 0.02;
    let cursorX = - (totalWidth * scale) / 2;

    // Generate one Points object per character
    chars.forEach((char, idx) => {
      const cw = charWidths[idx];
      // draw single-char canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = cw;
      canvas.height = 256;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, cw, canvas.height);
      ctx.font = font;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'black';
      ctx.fillText(char, cw / 2, canvas.height / 2);

      const img = ctx.getImageData(0, 0, cw, canvas.height).data;
      const positions = [];
      const colors = [];
      const sizes = [];
      const targets = [];

      const mainColor = new THREE.Color('#1976D2');
      const lightColor = new THREE.Color('#BBDEFB');

      for (let y = 0; y < canvas.height; y += 4) {
        for (let x = 0; x < cw; x += 4) {
          const i = (y * cw + x) * 4;
          if (img[i] < 128) {
            // target in world space
            const tx = (x - cw / 2) * scale + cursorX;
            const ty = (canvas.height / 2 - y) * scale;
            targets.push(tx, ty, 0);
            // initial random
            positions.push(
              (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 40,
              (Math.random() - 0.5) * 40
            );
            const mix = Math.random();
            const color = new THREE.Color().lerpColors(mainColor, lightColor, mix);
            colors.push(color.r, color.g, color.b);
            sizes.push((Math.random() * 0.05 + 0.05));
          }
        }
      }

      cursorX += cw * scale; // advance cursor

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

      const points = new THREE.Points(geo, material);
      lettersRef.current.push({ points, geo, targets });
    });

    // Typing animation: reveal letters one by one
    const animateLetter = (i) => {
      if (i >= lettersRef.current.length) {
        // after all letters, start pulsing time
        gsap.to(material.uniforms.time, { value: 1, duration: 1.5, ease: 'power2.inOut' });
        return;
      }
      const { points, geo, targets } = lettersRef.current[i];
      scene.add(points);

      const arr = geo.attributes.position.array;
      for (let j = 0; j < arr.length; j += 3) {
        gsap.to(arr, {
          [j]:     targets[j],
          [j + 1]: targets[j + 1],
          [j + 2]: targets[j + 2],
          duration: 1 + Math.random() * 0.5,
          ease: 'power2.inOut',
          onUpdate: () => geo.attributes.position.needsUpdate = true
        });
      }

      // next letter after a short delay
      gsap.delayedCall(0.3, () => animateLetter(i + 1));
    };

    // render loop
    const renderLoop = () => {
      if (!isAnimatingRef.current) return;
      material.uniforms.time.value += 0.01;
      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(renderLoop);
    };

    // resize handler
    const onResize = () => {
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // kick off
    animateLetter(0);
    renderLoop();

    return () => {
      window.removeEventListener('resize', onResize);
      isAnimatingRef.current = false;
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      if (renderer.domElement) containerRef.current.removeChild(renderer.domElement);
      lettersRef.current.forEach(({ points }) => scene.remove(points));
      lettersRef.current = [];
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
      className="w-full bg-white"
    />
  );
};

export default LogoTyping;