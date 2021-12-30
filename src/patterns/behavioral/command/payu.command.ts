import Payment from './payment'
import { Provider } from './provider'

export default class PayuCommand implements Payment {

  provider: Provider = Provider.PAYU

  handle(): void {
    console.log(`${this.provider} has started payment process...`)
  }

}
