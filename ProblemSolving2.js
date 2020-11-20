"use strict";

function isHappy(n) {
    if (n === 4) return false;
    const u = n.toString().split('').reduce(((ac,cv) => ac + Math.pow(cv,2)), 0);
    if (u === 1) return true;
    else return isHappy(u);
}

let result = isHappy(16);
console.log(result);

result = isHappy(4);
console.log(result);

function primeCheck(integer) {
    let isPrime = true;
    if (integer === 1) {
        console.log("1 is not prime")
    }
    else if (integer > 1){
        for (let index = 2; index < integer; index++) {
            if (integer % index == 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${integer} is prime`);
        } else {
            //console.log(`${integer} is not prime`);
        }
    }
    
}

function primeSearcher(repeatInt) {
    for (let index = 0; index < repeatInt; index++) {
        primeCheck(index);
        
    }
}

primeSearcher(100);
