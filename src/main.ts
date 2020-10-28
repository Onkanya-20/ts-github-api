import { Users } from "./main.controller";

class Main extends Users {
  constructor () {
    super()
    this.printUsersList()
  }

  async printUsersList() {
    console.log(await this.getUsers())
  }
}

new Main()
