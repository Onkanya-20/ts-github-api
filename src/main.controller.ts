import { UserService } from "./user.service";
import { IUser } from './user.contract'
import { MainView } from './main.contract'
export class MainController {
  private service: IUser
  private mainView: MainView

  constructor(mainView: MainView) {
    this.service = new UserService()
    this.mainView = mainView
  }

  async printUsersList() {
    try {
      const res = await this.service.getUsers()
      this.mainView.setResultGetUsers(res)
    } catch(err) {
      this.mainView.setErrorMessage(err)
    }
  }
}