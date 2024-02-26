//Importance of break statement

//If the break statement is not present in the switch-case code block, whichever case matches the user's choice, starting from that statement, the rest of the code block gets executed except the default part.

//the key in the switch statement can be of any type

const month = 2

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("No option matched");
        break;
}
