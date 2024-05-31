## Instruções para utilização

### Iniciando o serviço e entrando no container

docker-compose up -d (Subir os serviços)

docker-compose exec -it fullcycle-kafka_kafka_1 bash (Entrar no container do kafka)

### Criando e manipulando tópicos

Quando queremos listar/criar um tópico sempre temos que passar a flag --bootstrap-server no coman do, ela indica qual servidor que queremos executar a ação referente ao tópico, essa flag é obrigatória nos comandos do kafka-topics.

kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3 (Criar um tópico chamado teste com 3 partições)

kafka-topics --list --bootstrap-server=localhost:9092 (Listar todos os tópicos do kafka)

kafka-topics --bootstrap-server=localhost:9092 --topic=teste --describe (Mostra detalhes sobre o tópico, quantias partições ele tem, qual o replication factor e etc)