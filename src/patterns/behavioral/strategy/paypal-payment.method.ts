import { PaymentMethod, PaymentResponse } from './payment.method'

export default class PaypalPaymentMethod implements PaymentMethod {

  constructor(public userEmail: string) {}

  doPayment(userId: string, amount: number): PaymentResponse {
    console.log(`Paypal approved the transaction for user: ${userId} with amount of: ${amount}`)
    return new PaymentResponse(false)
  }
}
