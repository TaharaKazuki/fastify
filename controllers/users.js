// import { v4 as uuidv4 } from 'uuid'
import users from '../users.js'

export const getItem = (_req, reply) => {
  reply.send(users)
}