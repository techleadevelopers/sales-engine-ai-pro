
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Zap, Rocket, Check, Users, Star, Award, CircleCheck, Database, ShieldCheck, Headphones } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-primary">SalesEngineAI-Pro</h2>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/login" className="text-gray-600 hover:text-primary">Login</Link>
            <Button asChild variant="outline">
              <Link to="/login">Começar</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
              Maximize suas vendas com a IA mais poderosa do mercado
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Automatize campanhas, converta mais leads e alcance o sucesso com SalesEngineAI-Pro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Comece de Graça
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Falar com Vendas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios Imediatos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impulsione conversões</h3>
              <p className="text-gray-600">Aumente suas vendas com inteligência de dados avançada</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campanhas otimizadas com IA</h3>
              <p className="text-gray-600">Performance em tempo real impulsionada por inteligência artificial</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automação sem complicações</h3>
              <p className="text-gray-600">Configure uma vez e deixe o sistema trabalhar para você</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Planos</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Escolha o plano ideal para o seu negócio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Plano Gratuito</CardTitle>
                <CardDescription>Comece Agora</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Gestão de até 50 leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>1 campanha ativa por vez</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Dashboard básico de vendas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Relatórios básicos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Suporte via e-mail</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Assinar Agora</Button>
              </CardFooter>
            </Card>

            {/* Essential Plan */}
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Plano Essencial</CardTitle>
                <CardDescription>Resultados consistentes</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Gestão de até 2.000 leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Até 5 campanhas simultâneas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Análise de dados em tempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Automação de follow-up</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Relatórios personalizados</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Assinar Agora</Button>
              </CardFooter>
            </Card>

            {/* Impulse Plan (Most Popular) */}
            <Card className="shadow-md hover:shadow-lg transition-shadow relative border-primary">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary px-3 py-1 text-white">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Plano Impulso</CardTitle>
                <CardDescription>Escale seu negócio</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Gestão de até 10.000 leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Até 20 campanhas simultâneas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Segmentação avançada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Integrações com CRM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Suporte via chatbot + e-mail</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary-dark">Assinar Agora</Button>
              </CardFooter>
            </Card>

            {/* Maximum Performance Plan */}
            <Card className="shadow-md hover:shadow-lg transition-shadow relative border-primary-dark">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary-dark px-3 py-1 text-white">Para Líderes de Mercado</Badge>
              </div>
              <CardHeader>
                <CardTitle>Máxima Performance</CardTitle>
                <CardDescription>Solução completa enterprise</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Leads e campanhas ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Automação de campanhas com IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Benchmarking de concorrentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Consultoria estratégica mensal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Suporte prioritário dedicado</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary-dark hover:bg-primary-dark/90">Assinar Agora</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">Empresas com mais de 10.000 leads?</p>
            <Button variant="link" className="text-primary">Solicite uma proposta personalizada</Button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Sucesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "Com SalesEngineAI-Pro, nossas vendas aumentaram 30% em apenas três meses! A automação de campanhas transformou nossa abordagem de marketing."
                  </p>
                  <p className="font-semibold">Ana Silva</p>
                  <p className="text-sm text-gray-600">CMO, TechInova</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow">
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "A segmentação avançada e análise de dados nos permitiu entender melhor nossa audiência. Nossa taxa de conversão dobrou em 6 semanas!"
                  </p>
                  <p className="font-semibold">Carlos Mendes</p>
                  <p className="text-sm text-gray-600">CEO, GrowthMasters</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-6">
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">+45%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aumento médio de leads captados</h3>
              <p className="text-gray-600">Nossos clientes conseguem captar significativamente mais leads qualificados</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">+65%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aumento na taxa de conversão</h3>
              <p className="text-gray-600">As empresas que utilizam nossa plataforma convertem mais leads em clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Funcionalidades Premium Enterprise</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Recursos exclusivos para impulsionar seu negócio</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrações com CRMs</h3>
              <p className="text-gray-600">Conecte facilmente com Salesforce, Hubspot, Pipedrive e todos os principais CRMs do mercado.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <CircleCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">APIs abertas</h3>
              <p className="text-gray-600">Desenvolva integrações customizadas e estenda a funcionalidade da plataforma conforme sua necessidade.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultoria personalizada</h3>
              <p className="text-gray-600">Acesso a especialistas que ajudam a maximizar seu ROI com estratégias específicas para seu negócio.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte prioritário 24h</h3>
              <p className="text-gray-600">Assistência especializada a qualquer momento para garantir que suas operações nunca parem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar suas vendas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Teste gratuitamente por 14 dias ou agende uma demonstração personalizada para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-gray-100 text-lg px-8">
              Começar Grátis
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">SalesEngineAI-Pro</h3>
              <p className="mb-4">A plataforma de otimização de vendas e marketing mais avançada do mercado.</p>
            </div>
            
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clientes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vendas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parcerias</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-600" />
          
          <div className="text-center">
            <p>&copy; 2025 SalesEngineAI-Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
