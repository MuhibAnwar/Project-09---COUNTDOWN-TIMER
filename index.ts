import { differenceInSeconds } from 'date-fns';

function* countdowntimer(seconds: number) {
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
        const remainingSECONDS = differenceInSeconds(countTime, newDate);

        console.log(`REMAINING SECONDS: ${remainingSECONDS}`);
        
        setTimeout(displayCOUNTDOWN, 1000);
    } else {
        console.log('DONE');
    }
}

displayCOUNTDOWN();
