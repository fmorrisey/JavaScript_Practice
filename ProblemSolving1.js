"use strict";
// Problem 1: Hello WORLD REVERSED STRING
function reverseString(str){
    let newString = "";

    for (let i = str.length -1; i >=0 ; i--){
        newString += str[i];
    }

    return newString;
}

let str = "lowercase?"
str = str.toUpperCase();

// Problem 2: Compressed String
function compressedString(uncompressedString){
       
    let compressedString = "";
    let letterCounter = 1;

    for (let i = 0; i <= uncompressedString.length; i++)
    {
        if (i === uncompressedString.length - 1)
        {
            compressedString += uncompressedString[i];
            compressedString += letterCounter;
        }
            else if (uncompressedString[i] === uncompressedString[i + 1])
        {
            letterCounter++;
        }
        else
        {
            compressedString += uncompressedString[i];
            compressedString += letterCounter;
            letterCounter = 1;
        }
    }
    
    //return
    return compressedString;
}

let compsStr = compressedString("aaabbbbbccccaacccbbbaaabbbaaa");
alert(compsStr);

// Problem 3: Palindrome 
function palindrome(input) {
    let rvrStr = reverseString(input);

    if (rvrStr == input)
    {return true;}
    else {return false;}
}

let tacoCat = "tacocat";

alert(palindrome(tacoCat));


