/*
console.log(new Date());

Date is an object. 
Date gives you the exact date and time at time of page load.
We're storing it in the console.
 */

/*********** THE CLOCK TOOLS *************/

/****************
const fullDate = new Date();
//ES6 - we are storing the Object in a variable called FullDate
//const is a constant variable which can't be changed. So var is better sometimes

const hours = fullDate.getHours();
const minutes = fullDate.getMinutes();
const seconds = fullDate.getSeconds();
//use the method get only the hours/minutes/ only, from the object and store in a variable

document.getElementById('hrs').innerHTML = hours;
document.getElementById('min').innerHTML = minutes;
document.getElementById('sec').innerHTML = seconds;
//use the get element id method to specify the html you want to replace with the variables you've created above

****************/


/****************
The above stuff will show the time, but you will need to refresh all the time
in order for time to progress. Because it only shows the at time of page load.

All of the above after 'the clock tools' need to be inside a function in
order for the setInterval function to be used; use the function in JS called 
setInterval to display your output in invervals. eg. - 1000 is every milisecond

****************/

/*********** THE CLOCK TOOLS END *************/





/*********** THE CLOCK *************/

function clock() {
  var fullDate = new Date();
  //ES6 - we are storing the Object in a variable called FullDate

  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  var seconds = fullDate.getSeconds();
  //use the method get only the hours/minutes/ only, from the object and store in a variable

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  //this is to add the 0 to the numbers under 10

  document.getElementById('hrs').innerHTML = hours;
  document.getElementById('min').innerHTML = ":" + minutes;
  document.getElementById('sec').innerHTML = ":" + seconds;
  //this is to print the variables into the html elements with the : added before minutes and seconds

}

setInterval(clock,100);
//this JS function prints the function inside the curly brackets every 100th of a second.