import { Checkout } from './checkout'
import { Franchise } from './franchise'
import { PaymentMethod } from './payment.method'
import MastercardPaymentMethod from './mastercard-payment.method'
import VisaPaymentMethod from './visa-payment.method'
import AmexPaymentMethod from './amex-payment.method'
import PaypalPaymentMethod from './paypal-payment.method'

const userId = 'usr1',
  userEmail = 'user1@email.com',
  cardNumber = '0000-0000-0000-0000',
  cvc = 786,
  amount = 30000

const getPaymentMethod = (franchise: Franchise): PaymentMethod => {
  switch (franchise) {
    case Franchise.MASTERCARD:
      return new MastercardPaymentMethod(userEmail, cardNumber, cvc)
    case Franchise.VISA:
      return new VisaPaymentMethod(userEmail, cardNumber, cvc)
    case Franchise.AMEX:
      return new AmexPaymentMethod(userEmail, cardNumber, cvc)
    default:
      return new PaypalPaymentMethod(userEmail)
  }
}

const checkout = new Checkout(getPaymentMethod(Franchise.AMEX))
const paymentResponse = checkout.executePayment(userId, amount)

if (paymentResponse.isError)
  console.log(`Cannot complete payment. ${paymentResponse.errorMessage}`)
else
  console.log('Payment completed successfully')
