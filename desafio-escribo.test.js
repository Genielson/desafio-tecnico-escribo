const divisibleSum = require('./desafio-escribo.js');
function testSumDivisibles() {
  const resultFirstTest = divisibleSum(10);
  const resultSecondTest = divisibleSum(11);

  // Test with example 10
  if (resultFirstTest === 23) {
    console.log('Teste 1 passou!');
  } else {
    console.error('Teste 1 falhou. Resultado obtido:', resultFirstTest);
  }

  // Test with example  11
  if (resultSecondTest === 33) {
    console.log('Teste 2 passou!');
  } else {
    console.error('Teste 2 falhou. Resultado obtido:', resultSecondTest);
  }
}

testSumDivisibles();