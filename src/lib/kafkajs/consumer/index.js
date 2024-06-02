const consumer = (kafka) => {
  return kafka.consumer({ groupId: 'fullcycle-kafka' })
}

module.exports = consumer