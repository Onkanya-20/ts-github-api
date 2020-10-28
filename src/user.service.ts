import axios from 'axios'
import { UserDto, IUser } from './user.contract'

export class UserService implements IUser {
  async getUsers(): Promise<UserDto[]> {
    const response = await axios.get<UserDto[]>('https://api.github.com/users')
    return response.data
  }
}