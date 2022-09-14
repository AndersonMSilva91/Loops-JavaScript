let age21 = 0 ,age50 = 0 ,age

while(age != -99){
age = prompt('Insert your age: ');
if(age < 21 && age > 0){
    age21++
  }else if(age > 50){
    age50++
  }
}
  console.log(`This is the number of people below 21 years: ${age21}`);
  console.log(`This is the number of people above 50 years: ${age50}`);
  