// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstname = readString('first')
  console.log(firstname)
  let lastName = readString('last')
  console.log(lastName)

  // --- create a greeting ---

  let greeting = 'hello' + firstname + ' ' + lastName

  // --- display the greeting ---
displayString('greeting', greeting)
});
