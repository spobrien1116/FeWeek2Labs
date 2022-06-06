// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100

var speedLimit = 65;
var mySpeed = 70;

// using a conditional, determine if mySpeed is greater than the speedLimit

// if true, print "Slow Down! Mom is mad!" to the console
if (mySpeed > speedLimit) {
    console.log("Slow Down! Mom is mad!");
// if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
} else if (mySpeed < speedLimit) {
    console.log("Speed up! Dad is mad!");
// if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
} else {
    console.log("Everyone is happy!");
}


// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value

var alarmSet = true;
var openDoor = false;

// using a conditional, determine if alarm is set.
// if alarm is set and door is set to open, print "Sound Alarm!" to the console
if (alarmSet == true && openDoor == true) {
    console.log("Sound Alarm!");
// otherwise, print "Everything is fine." to the console.
} else {
    console.log("Everything is fine.");
}


// create two variables, username and password
var username = "Timmy456";
var password = "6789";
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
if ((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password === "6789")) {
    console.log("Admin Login Successful");
// otherwise, print "Admin Access Denied"
} else {
    console.log("Admin Access Denied");
}


// write code that will set the value of a studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
var studentGrade = 13;
var studentClass;

if ((studentGrade == "K") || (studentGrade >= 1 && studentGrade < 7)) {
    studentClass = "Elementary";
} else if (studentGrade >=7 && studentGrade < 9) {
    studentClass = "Middle";
} else if (studentGrade == 9) {
    studentClass = "Freshman";
} else if (studentGrade == 10) {
    studentClass = "Sophomore";
} else if (studentGrade == 11) {
    studentClass = "Junior";
} else if (studentGrade == 12) {
    studentClass = "Senior";
} else {
    studentClass = "Error";
}

if (studentClass === "Error") {
    console.log("Error");
} else {
    console.log(studentClass);
}

// Here is a version using a switch (I like my previous version better)
var studentGrade = 8;
var studentClass;

switch(studentGrade) {
    case "K":
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");
}
console.log(studentClass);

// write a for loop that will iterate backwards from 10 to -10
for (i = 10; i >= -10; i--) {
    console.log(i);
}

// write a do/while loop that prints 1 through 50
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 50);

// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4
i = 1;
do {
    console.log(i % 4);
    i++;
} while (i <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/*
    for (let i = 11; i > 10; i++) {
        console.log(i);
    }
*/
for (i = 11; i > 10; i--) {
    console.log(i);
}