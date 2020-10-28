import axios from 'axios'
import { SchemaUser } from './user.contract'

export class Users {
  async getUsers(): Promise<SchemaUser[]>  {
    const response = await axios.get<SchemaUser[]>('https://api.github.com/users').then(response => response)
    return response.data
  }
}