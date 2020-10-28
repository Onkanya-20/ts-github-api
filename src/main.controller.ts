import service from "./user.service";
import { IUser } from './user.contract'

export class MainController {
  private service: IUser

  constructor() {
    this.service = service()
  }
  async printUsersList() {
    try {
      const res = await this.service.getUsers()
      console.log(res)
    } catch(err) {
      console.error(err)
    }
  }
}