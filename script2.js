    let timesp = 0
    let timesi = 0

for (let i = 1; i <= 10; i++) {
  let n1Text = prompt('Insert a number: ');
  let n1 = Number(n1Text);
  if (n1 % 2 == 1) {
    document.write(`The number ${n1}, it is odd <br>`);
    timesi += 1
    
  }
 else if (n1 % 2 == 0) {
    document.write(`The number ${n1}, it is even <br>`);
    timesp += 1


 }
}
   document.write(`${timesp} are even <br>`);
   document.write(`${timesi} are odd <br>`);


