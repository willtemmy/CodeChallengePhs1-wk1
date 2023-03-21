# WK1: Code Challenge

## Challenge 1: Student Grade Generator (Toy Problem)

In this program, we prompt the user to input the student marks and store the input in the marks variable.
We then use a while loop to validate the user input between 0 and 100. The while loop condition checks if the input is less than 0, greater than 100, or not a number using the isNaN().

We then use an if-else if statement to determine the grade based on the input. 
If the marks are greater than 79, we output "Grade: A". If the marks are between 60 and 79 (inclusive), we output "Grade: B". 
If the marks are between 50 and 59 (inclusive), we output "Grade: C". If the marks are between 40 
and 49 (inclusive), we output "Grade: D". Otherwise, we output "Grade: E".

## Challenge 2: Speed Detector (Toy Problem)

In this program, we prompt the user to enter the speed of the car and store the input in the speed variable.
We then use a while loop to validate the user input ensuring its a valid number. We then convert the valid input into a number
using parseInt().

We then use an if-else statement to determine if the speed is less than 70. If it is, we output "Ok".
If the speed is greater than or equal to 70, we calculate the number of demerit points using the 
formula (speed - 70) / 5 and take the floor of the result using the Math.floor()(rounds down). 
We then check if the number of demerit points is greater than 12. If it is, we output "License suspended". 
Otherwise, we output "Points: " followed by the number of demerit points.