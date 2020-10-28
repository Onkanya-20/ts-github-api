import { MainController } from './main.controller'
import { MainView } from './main.contract'
import { UserDto } from './user.contract'
class Main implements MainView  {
  private controller: MainController;

  constructor() {
    this.controller = new MainController(this)
    this.controller.printUsersList()
  }

  setResultGetUsers(value: UserDto[]) {
    console.log('The Response is => ', value)
  }

  setErrorMessage(err: string) {
    console.log('Something went wrong err => ', err)
  }
}

new Main()
