import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let input1 = readString('text');
  let input2 = readString('character');
  let input3 = readString('i');

  // --- check the index ---

  let index = input1.indexof(input2, input3)



  // --- display the search results ---

  displayString(index.toString(), 'search-result');
});
