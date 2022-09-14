let sum = 0
let number = 0
do {
  number = Number(prompt('Insert any number: '))
  sum += number

} while (number != 0)

console.log(`The sum of the entered numbers is: ${sum}`)
