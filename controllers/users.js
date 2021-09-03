// import { v4 as uuidv4 } from 'uuid'
import users from '../users.js'

export const getUsers = (_req, reply) => {
  reply.send(users)
}

export const getUser = (req, reply) => {
  const { id } = req.params

  const user = users.find((user) => user.id === id)
  reply.send(user)
}