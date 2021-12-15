import { Account } from './account'

const original = new Account(1, 'Jon Doe')
const clone = original.clone()
original.id = 2

console.log(original) // Account { _id: 2, _name: 'Jon Doe' }
console.log(clone) // Account { _id: 1, _name: 'Jon Doe' }
console.log(clone.id) // 1
