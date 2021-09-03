import { v4 as uuidv4 } from 'uuid'
import users from '../users'
let USERS = users

export const getUsers = (_req, reply) => {
  reply.send(USERS)
}

export const getUser = (req, reply) => {
  const { id } = req.params

  const user = USERS.find((user) => user.id === id)
  reply.send(user)
}

export const addUser = (req, reply) => {
  const { name } = req.body
  const newUser = {
    id: uuidv4(),
    name
  }
  USERS = [...USERS, newUser]
  reply.code(201).send(newUser)
}