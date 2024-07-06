"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function* countdowntimer(seconds) {
    while (seconds > 0) {
        yield seconds;
        seconds--;
    }
}
let timeIteration = countdowntimer(10);
function displayCOUNTDOWN() {
    let result = timeIteration.next();
    if (!result.done) {
        const newDate = new Date();
        const countTime = new Date(newDate.getTime() + result.value * 1000);
        const remainingSECONDS = (0, date_fns_1.differenceInSeconds)(countTime, newDate);
        console.log(`REMAINING SECONDS: ${remainingSECONDS}`);
        setTimeout(displayCOUNTDOWN, 1000);
    }
    else {
        console.log('DONE');
    }
}
displayCOUNTDOWN();
