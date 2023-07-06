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

  let Number = readNumber('left-num');
  let Number1 = readNumber('right-num');

  // --- compare the numbers ---

  let compareNum = compareNumber(Number, Number1);

  // --- create a message

  const sentence = readString('secret-solution')

  // --- display the message ---

  displayString(sentence);
});

function compareNumber(num1, num1) {
  if (num1 < num2) {
    return 'The first is smaller than the second one'
  } else if (num1 > num2 ) {
    return 'The first is greater then the second one'
  } else {
    return "Both number's are equal"
  }
}
