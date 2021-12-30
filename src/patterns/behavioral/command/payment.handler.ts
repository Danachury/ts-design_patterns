import Payment from './payment'

export default class PaymentHandler {

  process(payments: Payment | Payment[]): void {
    console.log('Payment method has been started.')
    if (Array.isArray(payments)) {
      PaymentHandler._forceProcess(payments)
      return
    }
    payments.handle()
  }

  private static _forceProcess(payments: Payment[]): void {
    for (const payment of payments) {
      try {
        payment.handle()
        break
      } catch (err: any | Error) {
        console.error(`${payment.provider} has rejected payment:`,  err.message)
      }
    }
  }
}
