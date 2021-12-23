import { Provider } from './provider'

export default interface Payment {
  provider: Provider

  handle(): void
}
