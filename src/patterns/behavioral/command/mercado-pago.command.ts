import Payment from './payment'
import { Provider } from './provider'

export default class MercadoPagoCommand implements Payment {

  provider: Provider = Provider.MERCADO_PAGO

  handle(): void {
    console.log(`${this.provider} has started payment process...`)
    throw Error('Cannot complete payment, please try again later.')
  }

}
