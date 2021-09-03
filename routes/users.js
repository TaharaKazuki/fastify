import { getItem } from "../controllers/users";

const UserSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' }
  }
}

const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        users: UserSchema
      }
    }
  },
  handler: getItem
}

const itemRoutes = (fastify, _options, done) => {
  fastify.get('/users', getUsersOpts)
  done()
}

export default itemRoutes