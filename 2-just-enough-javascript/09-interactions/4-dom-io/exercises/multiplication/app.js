import {
  whenFormDataChanges,
  readNumber,
  displayString,
  readString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('__', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---

  let leftNumber = readNumber('left');

  let rightNumber = readNumber('right');


  // --- multiply the numbers ---
  let multiplyNum = multiplyNumber(rightNumber, leftNumber);

  // --- create a message ---

  const sentence = readString("secret-solution")

  // --- display the message ---

  displayString("secret-solutions", sentence)
});

function multiplyNumber(num1, num2) {
  return num1 * num2
}
