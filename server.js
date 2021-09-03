import fastify from "fastify";
import itemRoutes from "./routes/users";
const server = fastify({ logger: true })

console.info(itemRoutes)
server.register(itemRoutes)

const PORT = 5000

const start = async () => {
  await server.listen(PORT).catch((error) => {
    server.log.error(error)
    process.exit(1)
  })
  console.info('server start')
}

start()