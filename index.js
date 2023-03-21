//Prompt that allows user to input student marks.
let marks = prompt("Enter student marks (between 0 and 100):");

//The input should be between 0 and 100.
while (marks < 0 || marks > 100 || isNaN(marks)) {
  marks = prompt("Invalid input. Enter student marks (between 0 and 100):");
}

//Outputs the correct grade: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
if (marks > 79) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
} else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}

//Prompt that takes as input the speed of a car e.g 80.
let speed = prompt("Enter car speed:");

// If the speed is less than 70, it should print “Ok”.
if (speed < 70) {
  console.log("Ok");
} else {
//For every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the points.   
  let demeritPoints = Math.floor((speed - 70) / 5);
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + demeritPoints);
  }
}