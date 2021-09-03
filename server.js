import Fastify from "fastify";
const fastify = Fastify({ logger: true })

const PORT = 5000

const start = async () => {
  await fastify.listen(PORT).catch((error) => {
    fastify.log.error(error)
    process.exit(1)
  })
  console.info('server start')
}

start()