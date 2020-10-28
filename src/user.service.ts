import axios from 'axios'
import { UserDto, IUser } from './user.contract'

class UserService {
  public printshit(): string {
    return "shit your head"
  }

  async getUsers(): Promise<UserDto[]> {
    const response = await axios.get<UserDto[]>('https://api.github.com/users')
    return response.data
  }
}

function CreateServiceInstance(): IUser {
  return new UserService()
}

export default CreateServiceInstance