// step 1 is to link the java file to the html document.//
// step 2 is to create the call to action alert to trigger once the page is opened.
// step 3 is to create the script that gives the code. using 3 different arithmetic operators.
// step 4 is to create a dialog correctly displaying the code.



const first = "You have received this message because you have been chosen to open an important vault.";
// This is the first alert variable that will be used as call to action.

alert(first);
// This alert is displaying the first variable message.

const num = 20 - 10;
// simple subtraction with a const variable. Should equal 10.
const code = 5 * 8;
// second constant is defined by a different name. Should equal 40.
const comb = 29 + 10;
// Third number in the code is one more constant variable renamed. Should equal 39.
const secondmsg = `Here is the secret combination`;
// this is the text to be displayed with the code in lines 14 through 18.
const full = `${secondmsg} : ${num} - ${code} - ${comb}`;
// this is the variable that completes the logic of the second alert.
alert (full);
// this displays the second alert to the end user.