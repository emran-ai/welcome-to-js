import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let user = readString('to-mirror');

  // --- mirror the text ---

  let text = readString('output');

  // --- display the result ---

  displayString('output', text);
});
