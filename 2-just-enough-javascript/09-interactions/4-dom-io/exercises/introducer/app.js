// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let Name = readString('fn');

  let lastName = readString('ln')

  // --- create a message ---

  let introduce = 'hello my ' + Name + lastName


  // --- display the message ---

  displayString('greet-field', introduce)
});
