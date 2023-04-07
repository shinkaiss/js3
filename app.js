// dop dz
var drinks = ['milk', 'beer', 'beer', 'milk', 'milk']
var i = 0
while (i < drinks.length) {
   if (drinks[i] === 'milk') {
    console.log('good', i);
   } else if(drinks[i] === 'beer') {
    console.log('bad', i );
   }
   i++
}

// dz
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}