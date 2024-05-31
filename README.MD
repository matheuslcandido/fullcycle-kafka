## Instruções para utilização

### Iniciando o serviço e entrando no container

docker-compose up -d (Subir os serviços)

docker-compose exec -it fullcycle-kafka_kafka_1 bash (Entrar no container do kafka)

### Criando e manipulando tópicos

Quando queremos listar/criar um tópico sempre temos que passar a flag --bootstrap-server no coman do, ela indica qual servidor que queremos executar a ação referente ao tópico, essa flag é obrigatória nos comandos do kafka-topics.

kafka-topics --create --topic=teste --bootstrap-server=localhost:9092 --partitions=3 (Criar um tópico chamado teste com 3 partições)

kafka-topics --list --bootstrap-server=localhost:9092 (Listar todos os tópicos do kafka)

kafka-topics --bootstrap-server=localhost:9092 --topic=teste --describe (Mostra detalhes sobre o tópico, quantias partições ele tem, qual o replication factor e etc)

### Produzindo e consumindo mensagens

kafka-console-producer --bootstrap-server=localhost:9092 --topic=teste (Iniciando um producer)

kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste --from-beginning (Iniciando um consumer)

### Consumer groups

Na hora de subir um consumer conseguimos passar a flag --group=x para falar que aquele consumer pertence ao group x

kafka-console-consumer --bootstrap-server=localhost:9092 --topic=teste --group=x (Iniciando consumer no group x)

kafka-consumer-groups --bootstrap-server=localhost:9092 --group=x --describe (Comando para ver detalhes do consumer group, com ele conseguimos ver o offset do consumer no group, o lag e outras informações)

### Control center

O control center é uma interface gráfica que permite vermos todos os detalhes do nosso kafka, para entrar nele utilizar a seguinte url.

http://localhost:9021/