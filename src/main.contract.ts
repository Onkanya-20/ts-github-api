import { UserDto } from './user.contract'
export interface MainView {
  setResultGetUsers(value: UserDto[]): void
  setErrorMessage(err: string): void
}