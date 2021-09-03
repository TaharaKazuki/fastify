import { getUsers, getUser, addUser } from "../controllers/users";

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

const postItemOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    },
    response: {
      201: UserSchema,
    },
  },
  handler: addUser,
}

const itemRoutes = (fastify, _options, done) => {
  fastify.get('/users', getUsersOpts)

  fastify.get('/users/:id', getUserOpts)

  fastify.post('/users', postItemOpts)

  done()
}

export default itemRoutes