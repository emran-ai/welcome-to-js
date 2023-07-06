import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('left');
  let right = readNumber('right');

  let operator = readString('operator');

  // --- calculate the result ---

  let result = readString('result');

  // --- display the result ---

  displayString(result);
});
