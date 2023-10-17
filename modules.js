import { strictEquals } from './sample.js';

const tests = [
  [1, 1, true],
  [NaN, NaN, false],
  [0, -0, true],
  [-0, 0, true],
  [1, '1', false],
  [true, false, false],
  [false, false, true],
  ['water', 'oil', false],
];

for (const [a, b, expectedResult] of tests) {
  const result = strictEquals(a, b);
  console.log(`Cuando se comparan ${a} y ${b}, el resultado es ${result}`);
  console.log(`Resultado esperado: ${expectedResult}`);
}
