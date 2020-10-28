import { MainView } from '../main.contract'
import { MainController } from '../main.controller'
import { mock } from "jest-mock-extended";

describe("MainController integration test", () => {
  let mainController: MainController
  let mockMainView: MainView

  beforeAll(() => {
    mockMainView = mock<MainView>();
    mainController = new MainController(mockMainView)

  });

  it("test function calculate should be successful", () => {
    mainController.printUsersList();
  })

});