const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

document.querySelector('#fizzbuzzBtn').addEventListener('click', () => {
  template();
})

function runTheNumbers(num1, num2) {
  const output = [];
  for (let loop = 1; loop <= 100; loop++) {

    if (fizzBuzz(loop, num1, num2)) {
      // FizzBuzz
      output.push('FizzBuzz');
    } else if (buzz(loop, num2)) {
      // Buzz
      output.push('Buzz');
    } else if (fizz(loop, num1)) {
      // Fizz
      output.push('Fizz')
    } else {
      // loop
      output.push(`${loop}`);
    }
  }
  return output;
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

const template = () => {
  let output = [];
  const outputTable = document.querySelector('#outputTable');
  console.log(outputTable);
  const templateThead = document.querySelector('#templateThead')
  const templateTrow = document.querySelector('#templateTrow');


  let resultsHTML = templateThead.innerHTML;
  const rowHTML = templateTrow.innerHTML;

  output = runTheNumbers(num1.value, num2.value);
  
for (let loop = 0; loop < output.length; loop+=5) {
  resultsHTML += rowHTML.replace('{{num1}}', output[loop])
                        .replace('{{num2}}', output[loop+1])
                        .replace('{{num3}}', output[loop+2])
                        .replace('{{num4}}', output[loop+3])
                        .replace('{{num5}}', output[loop+4])     
}
outputTable.innerHTML = resultsHTML;
}