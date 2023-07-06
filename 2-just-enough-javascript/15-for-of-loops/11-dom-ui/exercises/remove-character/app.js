import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let user = readString('character');

  let user1 = readString('phrase');

  // --- remove the character if there is only one ---

  let result = user1.split('').filter((char) => char !== user).join('');

  // --- display the result ---

  displayString('filtered', result)
});
