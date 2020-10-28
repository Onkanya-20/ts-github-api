import { Users } from "./main.controller";

class Main {
  private controller: Users
  
  constructor () {
    this.controller = new Users()
    this.printUsersList()
  }

  async printUsersList() {
    console.log(await this.controller.getUsers())
  }
}

new Main()
