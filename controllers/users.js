import { v4 as uuidv4 } from 'uuid'
import users from '../users.js'

export const getUsers = (_req, reply) => {
  reply.send(users)
}

export const getUser = (req, reply) => {
  const { id } = req.params

  const user = users.find((user) => user.id === id)
  reply.send(user)
}

export const addUser = (req, reply) => {
  const { name } = req.body
  const newUser = {
    id: uuidv4(),
    name
  }

  console.info('newUser', newUser)
  console.info('users', users)
  // users = [...users, newUser]
  reply.code(201).send([...users, newUser])
}