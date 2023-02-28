// ------------------------
// COMP 690 - Assignment 3
// Ralph Godkin
// Part 6 - Countdown
// ------------------------

// Create the variable & do/while loop

startNumber = parseInt(prompt("Enter a number to start the countdown "));
do {
    console.log(startNumber);
    --startNumber               // Reduce the counter by 1
}
while (startNumber >= 0);