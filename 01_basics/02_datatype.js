"use strict"; //treat all JS code as newer version 

// Primittive datatype - 7 types of datatypes: trick => N N B B S S U
// N - null
// N - Number
// B - Boolean
// B - BigInt
// S - String
// S - Symbol
// U - undefined

// alert( 3 + 3 )  // we are using Node.js not browser

console.log(3+3); console.log("Jayz") // if we use ";" between them, then valid but not readable

let status = null;
let age = 18;
let isLoggedIn = false;
let sum = BigInt("56") + BigInt("4");
let name = "Rahul";
let sign = Symbol("I am nice symbol");
let error = undefined;
let a

console.log(status,age,isLoggedIn,sum,name,sign,error,a);
console.log(typeof status)

// if number => 2 to power 53 , then use bigint
// string => "Jay"
// boolean => true/false
// null => standalone value (empty)
// undefined
// symbol => unique


// Non primittive datatype - object
const item = {
    "Harsh": true,
    "Rahul": false,
    "Lovish": 67,
    "Jay": undefined
}

console.log(item["Harsh"]) // true

console.log(typeof null); // object
console.log(typeof undefined); // undefined
