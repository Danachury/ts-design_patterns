import Handler from './handler'
import MonkeyHandler from './monkey.handler'
import SquirrelHandler from './squirrel.handler'
import DogHandler from './dog.handler'

function main(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee']

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`)

    const current = handler.handle(food)
    if (current) {
      console.log(`  ${current}`)
    } else {
      console.log(`  ${food} was left untouched.`)
    }
  }
}

const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

console.log('Chain: Monkey > Squirrel > Dog\n')
main(monkey)
console.log('')

console.log('Subchain: Squirrel > Dog\n')
main(squirrel)
