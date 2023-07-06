import {
  whenFormDataChanges,
  readBoolean,
  displayString,
  readString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('___', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let  likeCat = readBoolean('likes-cats');
  let  allergicCat = readBoolean('is-allergic');
  let  ownCat = readBoolean('owns-one');

  // --- generate good advice ---

  const sentence = readString('custom-advice');

  // --- display advice for the user ---

  displayString('custom-advice', sentence)
});
