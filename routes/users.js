import { getUsers, getUser } from "../controllers/users";

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
  handler: getUsers
}

const getUserOpts = {
  schema: {
    response: {
      200: UserSchema
    }
  },
  handler: getUser
}

const itemRoutes = (fastify, _options, done) => {
  fastify.get('/users', getUsersOpts)

  fastify.get('/users/:id', getUserOpts)

  done()
}

export default itemRoutes