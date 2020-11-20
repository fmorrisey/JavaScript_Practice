"use strict";

function isHappy(n) {
    if (n === 4) return false;
    const u = n.toString().split('').reduce(((ac,cv) => ac + Math.pow(cv,2)), 0);
    if (u === 1) return true;
    else return isHappy(u);
}

let result = isHappy(4);
console.log(result);

