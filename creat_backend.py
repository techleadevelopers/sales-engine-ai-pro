import os

def create_backend_structure_inside_frontend(frontend_base_dir):
    """Cria a estrutura de pastas e arquivos do backend dentro do diretório do frontend."""

    backend_dir = os.path.join(frontend_base_dir, "backend")
    os.makedirs(backend_dir, exist_ok=True)

    services = [
        "api-gateway",
        "auth-service",
        "data-connection-service",
        "data-processing-service",
        "data-storage-service",
        "insights-api-service",
        "ai-ml-service",
        "alerts-service",
        "reporting-service",
        "caching-service",
        "common",
        "message-queue-service",
        "monitoring-logging-service",
    ]

    for service in services:
        service_dir = os.path.join(backend_dir, service)
        os.makedirs(service_dir, exist_ok=True)
        open(os.path.join(service_dir, "__init__.py"), "w").close()

        if service == "api-gateway":
            os.makedirs(os.path.join(service_dir, "routers"), exist_ok=True)
            open(os.path.join(service_dir, "routers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "routers", "auth.py"), "w").close()
            open(os.path.join(service_dir, "routers", "users.py"), "w").close()
            open(os.path.join(service_dir, "routers", "data_connections.py"), "w").close()
            open(os.path.join(service_dir, "routers", "insights.py"), "w").close()
            open(os.path.join(service_dir, "routers", "reports.py"), "w").close()
            open(os.path.join(service_dir, "routers", "alerts.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "middleware"), exist_ok=True)
            open(os.path.join(service_dir, "middleware", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "middleware", "auth_middleware.py"), "w").close()
            open(os.path.join(service_dir, "middleware", "logging_middleware.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "auth-service":
            os.makedirs(os.path.join(service_dir, "models"), exist_ok=True)
            open(os.path.join(service_dir, "models", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "models", "user.py"), "w").close()
            open(os.path.join(service_dir, "models", "subscription.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "schemas"), exist_ok=True)
            open(os.path.join(service_dir, "schemas", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "schemas", "user_schema.py"), "w").close()
            open(os.path.join(service_dir, "schemas", "auth_schema.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "controllers"), exist_ok=True)
            open(os.path.join(service_dir, "controllers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "controllers", "auth_controller.py"), "w").close()
            open(os.path.join(service_dir, "controllers", "user_controller.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "database.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "data-connection-service":
            os.makedirs(os.path.join(service_dir, "connectors"), exist_ok=True)
            open(os.path.join(service_dir, "connectors", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "connectors", "google_analytics_connector.py"), "w").close()
            open(os.path.join(service_dir, "connectors", "facebook_ads_connector.py"), "w").close()
            open(os.path.join(service_dir, "connectors", "google_ads_connector.py"), "w").close()
            open(os.path.join(service_dir, "connectors", "search_console_connector.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "models"), exist_ok=True)
            open(os.path.join(service_dir, "models", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "models", "connection.py"), "w").close()
            open(os.path.join(service_dir, "models", "data_source.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "schemas"), exist_ok=True)
            open(os.path.join(service_dir, "schemas", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "schemas", "connection_schema.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "controllers"), exist_ok=True)
            open(os.path.join(service_dir, "controllers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "controllers", "connection_controller.py"), "w").close()
            open(os.path.join(service_dir, "controllers", "data_collection_controller.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "database.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "data-processing-service":
            os.makedirs(os.path.join(service_dir, "pipelines"), exist_ok=True)
            open(os.path.join(service_dir, "pipelines", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "pipelines", "process_raw_data.py"), "w").close()
            open(os.path.join(service_dir, "pipelines", "calculate_kpis.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "data-storage-service":
            os.makedirs(os.path.join(service_dir, "data_lake"), exist_ok=True)
            open(os.path.join(service_dir, "data_lake", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "data_lake", "s3_config.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "nosql_db"), exist_ok=True)
            open(os.path.join(service_dir, "nosql_db", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "nosql_db", "cassandra_config.py"), "w").close()
            open(os.path.join(service_dir, "nosql_db", "mongo_config.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "data_warehouse"), exist_ok=True)
            open(os.path.join(service_dir, "data_warehouse", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "data_warehouse", "redshift_config.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "insights-api-service":
            os.makedirs(os.path.join(service_dir, "routers"), exist_ok=True)
            open(os.path.join(service_dir, "routers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "routers", "performance_insights.py"), "w").close()
            open(os.path.join(service_dir, "routers", "optimization_insights.py"), "w").close()
            open(os.path.join(service_dir, "routers", "prediction_insights.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "schemas"), exist_ok=True)
            open(os.path.join(service_dir, "schemas", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "schemas", "insight_schema.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "controllers"), exist_ok=True)
            open(os.path.join(service_dir, "controllers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "controllers", "insight_controller.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "ai-ml-service":
            os.makedirs(os.path.join(service_dir, "models"), exist_ok=True)
            open(os.path.join(service_dir, "models", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "models", "prediction_model.pkl"), "w").close()
            open(os.path.join(service_dir, "models", "segmentation_model.pkl"), "w").close()
            os.makedirs(os.path.join(service_dir, "algorithms"), exist_ok=True)
            open(os.path.join(service_dir, "algorithms", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "algorithms", "prediction_algorithms.py"), "w").close()
            open(os.path.join(service_dir, "algorithms", "segmentation_algorithms.py"), "w").close()
            open(os.path.join(service_dir, "algorithms", "nlp_algorithms.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "data_access"), exist_ok=True)
            open(os.path.join(service_dir, "data_access", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "data_access", "data_lake_access.py"), "w").close()
            open(os.path.join(service_dir, "data_access", "data_warehouse_access.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "model_management"), exist_ok=True)
            open(os.path.join(service_dir, "model_management", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "model_management", "model_trainer.py"), "w").close()
            open(os.path.join(service_dir, "model_management", "model_registry.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "alerts-service":
            os.makedirs(os.path.join(service_dir, "rules"), exist_ok=True)
            open(os.path.join(service_dir, "rules", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "rules", "performance_rules.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "dispatchers"), exist_ok=True)
            open(os.path.join(service_dir, "dispatchers", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "dispatchers", "email_dispatcher.py"), "w").close()
            open(os.path.join(service_dir, "dispatchers", "slack_dispatcher.py"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "reporting-service":
            os.makedirs(os.path.join(service_dir, "generators"), exist_ok=True)
            open(os.path.join(service_dir, "generators", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "generators", "performance_report_generator.py"), "w").close()
            open(os.path.join(service_dir, "generators", "custom_report_generator.py"), "w").close()
            os.makedirs(os.path.join(service_dir, "templates"), exist_ok=True)
            open(os.path.join(service_dir, "templates", "__init__.py"), "w").close()
            open(os.path.join(service_dir, "templates", "performance_report_template.html"), "w").close()
            open(os.path.join(service_dir, "main.py"), "w").close()
            open(os.path.join(service_dir, "config.py"), "w").close()
            open(os.path.join(service_dir, "requirements.txt"), "w").close()
            open(os.path.join(service_dir, "Dockerfile"), "w").close()

        elif service == "caching-service":
            open(os.path.join(service_dir, "redis_config.py"), "w").close()
            open(os.path.join(service_dir, "memcached_config.py"), "w").close()

        elif service == "common":
            open(os.path.join(service_dir, "models.py"), "w").close()
            open(os.path.join(service_dir, "utils.py"), "w").close()

        elif service == "message-queue-service":
            open(os.path.join(service_dir, "rabbitmq_config.py"), "w").close()
            open(os.path.join(service_dir, "kafka_config.py"), "w").close()

        elif service == "monitoring-logging-service":
            open(os.path.join(service_dir, "logging_config.py"), "w").close()
            open(os.path.join(service_dir, "metrics_config.py"), "w").close()
            open(os.path.join(service_dir, "prometheus_config.py"), "w").close()

    # Criação dos arquivos docker-compose.yml e README.md na raiz do backend
    open(os.path.join(backend_dir, "docker-compose.yml"), "w").close()
    open(os.path.join(backend_dir, "README.md"), "w").close()

if __name__ == "__main__":
    frontend_base_dir = os.getcwd()  # Obtém o diretório atual (onde o script está sendo executado)
    create_backend_structure_inside_frontend(frontend_base_dir)
    print(f"Estrutura do backend criada dentro da pasta: {os.path.join(frontend_base_dir, 'backend')}")