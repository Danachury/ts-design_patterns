import { Franchise } from './franchise'
import { PaymentCardMethod } from './payment.method'

export default class MastercardPaymentMethod extends PaymentCardMethod {

  constructor(public userEmail: string,
              public cardNumber: string,
              public cvc: number) {
    super(userEmail, cardNumber, cvc, Franchise.MASTERCARD)
  }
}
