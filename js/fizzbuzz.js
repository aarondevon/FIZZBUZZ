const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const results = document.querySelector('#results');

document.querySelector('#fizzbuzzBtn').addEventListener('click', () => {
  runTheNumbers(num1.value, num2.value);
})

function runTheNumbers(num1, num2) {
for (let loop = 1; loop <= 100; loop++) {
  if (fizzBuzz(loop, num1, num2)) {
    // fizzBuzz
    results.append('fizzBuzz');
  } else if (buzz(loop, num2)) {
    // buzz
    results.append('buzz');
  } else if (fizz(loop, num1)) {
    // fizz
    results.append('fizz');
  } else {
    // loop
    results.append(loop);
  }
}
}

const buzz = (loop, numInput2) => {
  return loop % numInput2 === 0;
}

const fizz = (loop, numInput1) => {
  return loop % numInput1 === 0;
}

const fizzBuzz = (loop, num1, num2) => {
  console.log(fizz(loop, num1) && buzz(loop, num2));
  return fizz(loop, num1) && buzz(loop, num2);
}