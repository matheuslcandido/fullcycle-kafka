const producer = require('./producer')
const consumer = require('./consumer')

const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'fullcycle-kafka',
  brokers: ['fullcycle-kafka_kafka_1:9092']
})

module.exports = {
  producer: producer(kafka),
  consumer: consumer(kafka),
}