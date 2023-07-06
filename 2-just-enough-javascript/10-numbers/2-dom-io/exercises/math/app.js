// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
  readString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let number = readNumber('left-num');

  let number1 = readNumber('right-num');

  // --- do the math ---

  let sumNum = sumNumber(number, number1);

  // --- create a message

  const sentence = `The sum of the numbers is: ${sumNum}`;

  // --- display the message ---
displayString("secret-solution",sentence)
});

function sumNumber(num, num1) {
  return parseInt(num + num1);
}
