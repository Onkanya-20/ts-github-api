import { MainController } from './main.controller'
class Main  {
  private controller: MainController;

  constructor() {
    this.controller = new MainController()
    this.controller.printUsersList()
  }
}

new Main()
