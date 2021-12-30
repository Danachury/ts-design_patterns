import PaymentHandler from './payment.handler'
import MercadoPagoCommand from './mercado-pago.command'
import PayuCommand from './payu.command'

const handler = new PaymentHandler()

// // Example with MercadoPago command
// handler.process(new MercadoPagoCommand())
//
// // Example with PayU command
// handler.process(new PayuCommand())

// Example with both payment commands
handler.process([new MercadoPagoCommand(), new PayuCommand()])
