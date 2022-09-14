let calmPeople = 0
let nervousWomen = 0
let agressiveMen = 0
let calmOthers = 0
let nervousPeopleOver40 = 0
let calmPeopleUnder18 = 0
let Np = 1

let age
let humor
let sex

while (Np <= 3) {
  age = Number(prompt(`What is the age of ${Np}° person? `))

  console.log(`1 - Female`)
  console.log(`2 - Male`)
  console.log(`3 - Others`)
  sex = parseInt(prompt(`What is the sex of ${Np}° person? `))

  console.log(`1 - Calm`)
  console.log(`2 - Nervous`)
  console.log(`3 - Agressive`)
  humor = Number(prompt(`Qual é o humor da ${Np}° pessoa? `))

  if (humor == 1) {
    calmPeople++
  }

  if (humor == 2 && sex == 1) {
    nervousWomen++
  }
  if (humor == 3 && sex == 2) {
    agressiveMen++
  }
  if (humor == 1 && sex == 3) {
    calmOthers++
  }
  if (humor == 2 && age > 40) {
    nervousPeopleOver40++
  }
  if (humor == 1 && age < 18) {
    calmPeopleUnder18++
  }

  Np++
}

console.log(`The number of calm people is: ${calmPeople}`)
console.log(`The number of nervous Women is: ${nervousWomen}`)
console.log(`The number of agressive Men is: ${agressiveMen}`)
console.log(`The number of calm others is: ${calmOthers}`)
console.log(`The number of nervous persons with more then 40 years is: ${nervousPeopleOver40}`)
console.log(`The number of calm people with less then 18 years is: ${calmPeopleUnder18}`)
