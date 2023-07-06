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

  let Noun = readString('noun');
  console.log(Noun);

  let Verb = readString('verb');
  console.log(Verb)

  let Adjective = readString('adjective')

  // --- create a funny sentence ---
  
  const sentence = `The ${Adjective} ${Noun} ${Verb} happily.`;

  // --- display the sentence ---

  displayString("funny-sentence",sentence)
});
