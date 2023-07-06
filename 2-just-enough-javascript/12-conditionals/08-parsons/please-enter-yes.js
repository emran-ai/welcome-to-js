'use strict';


/* parsons-collapse: hint
  1. gather user input
  2. check if the input is exactly "yes"
  3. alert your message to the user
*/



let input = prompt('please enter "yes"');

let output = '';
if (input.toLowerCase() === 'yes') {
  output = 'you entered "yes"';
} else {
  output = '"' + input + '" is not "yes"';
}

alert(output);

// begin distractors

if (input.toUpperCase() === 'yes') { // distractor
  output = 'you entered yes';
} else if (output === '"' + input + '" is not "yes"') {
  alert('you didnt entered yes' );
} 

 // distractor

 // distractor


// #todo
