import { PaymentMethod, PaymentResponse } from './payment.method'

export class Checkout {

  constructor(private _payment: PaymentMethod) {}

  executePayment(userId: string, amount: number): PaymentResponse {
    return this._payment.doPayment(userId, amount)
  }
}
