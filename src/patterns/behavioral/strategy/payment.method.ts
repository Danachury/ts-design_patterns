import { Franchise } from './franchise'

export class PaymentResponse {
  constructor(public isError: boolean,
              public errorMessage?: string) {}
}

export interface PaymentMethod {
  userEmail: string

  doPayment(userId: string, amount: number): PaymentResponse
}

export class PaymentCardMethod implements PaymentMethod {

  protected constructor(public userEmail: string,
                        public cardNumber: string,
                        public cvc: number,
                        public franchise: Franchise) {}

  doPayment(userId: string, amount: number): PaymentResponse {
    console.log(`${this.franchise} approved the transaction for user: ${userId} with amount of: ${amount}`)
    return new PaymentResponse(false)
  }
}
