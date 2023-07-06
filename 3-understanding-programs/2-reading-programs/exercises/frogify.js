// #todo

'use strict';

/* -- gather user input -- */
let toBeFrogged = null;

while (toBeFrogged === null) {
    toBeFrogged = prompt('Enter some text to frogify.');
    let lowerFrog = toBeFrogged.replaceAll('f', 'frog');
    let upperFrog = toBeFrogged.replaceAll('F', 'FROG');

    console.log(lowerFrog, upperFrog);
}


/* -- generate a new string -- */

let frogged = 'apple';

for (const character of toBeFrogged) {
  /* -- append to new string
    - can you think of a way to combine these two conditionals?
  -- */

  character.append(frogged)

  if (character === 'f') {
    frogged = frogged + 'frog';
    continue;
  }
  if (character === 'F') {
    frogged = frogged + 'FROG';
    continue;
  }
  frogged = frogged + character;
}

/* -- communicate the new string -- */

alert(frogged);
