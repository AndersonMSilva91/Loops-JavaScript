let sum = 0,number,count = 0
do { 
  number = Number(prompt('Insert any number: ')) 
if (number % 3 == 0) { 
  sum += number 
  count++
if (number == 0) { 
  break; 
  
 }
  
 }
}
while (number != 0) 
console.log(`the avarege of the entered numbers is : ${sum / count}`)
