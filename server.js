import fastify from "fastify";
import itemRoutes from "./routes/users";
import fastifySwagger from "fastify-swagger";

const server = fastify({ logger: true })
server.register(fastifySwagger,{
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api'}
  }
})
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