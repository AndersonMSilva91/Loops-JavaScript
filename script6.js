let sum = 0,number,count = 0
do { 
  number = Number(prompt('Digite um número qualquer: ')) 
if (number % 3 == 0) { 
  sum += number 
  count++
if (number == 0) { 
  break; 
  
 }
  
 }
}
while (number != 0) 
console.log(`A média dos números digitados é : ${sum / count}`)