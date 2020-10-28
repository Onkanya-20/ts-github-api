import { UserService } from '../user.service'

describe("User Service", () => {
  let service: UserService

  beforeAll(() => {
    service = new UserService
  })

  it("function must return Promise", async () => {
    const result = await service.getUsers()
    expect(result).toBeInstanceOf(Object)
  });

  
})