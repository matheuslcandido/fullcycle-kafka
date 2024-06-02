const express = require('express')
const { producer, consumer } = require('./lib/kafkajs')

const app = express()

const TOPIC = 'fullcycle-kafka-topic'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/produce', async (req, res) => {
  const { body } = req
  const { message } = body
  
  try {
    await producer.connect()
    await producer.send({
      topic: TOPIC,
      messages: [
        {
          value: message,
        },
      ],
    })
  } catch (error) {
    console.log(error)

    return res.send('Error on produce message')
  }
  
  return res.send(`Message ${message} sent to kafka`)
})

app.get('/consume', async (req, res) => {
  await consumer.connect()
  await consumer.subscribe({ topic: TOPIC, fromBeginning: false })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value.toString())
    }
  })

  res.send(`Kafka topic ${TOPIC} is empty`)
})

app.listen(3000)