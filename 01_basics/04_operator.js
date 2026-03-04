console.log("Operator in Js")
let a = 10, b = 3;

// 1. Arithmatic Operator

console.log("a + b = ",a+b)
console.log("a - b = ",a-b)
console.log("a * b = ",a*b)
console.log("a / b = ",a/b)
console.log("a % b = ",a%b)
console.log("a ^ b = ",a**b)

// increment and decrement operator
console.log("a++ = ",a++)
console.log("a = ",a)
console.log("a-- = ",a--)
console.log("a = ",a)

console.log("++b = ",++b)
console.log("b = ",b)
console.log("--b = ",--b)
console.log("b = ",b)


// 2. Assignment operator

let c = 1, d=2;
c = d
console.log(c)
c += 5
console.log(c)
c -= 6
console.log(c)
c *= 4
console.log(c)
c /= d
console.log(c)
c %= 8
console.log(c)
c **= d
console.log(c)

// 3. Comparison Operator

let comp1 = 6
let comp2 = "6"
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2) // also check datatype
console.log("comp1 === comp2 is ", comp1 === comp2) // also check datatype

// 4. Logical Operator
let x = 5, y = 6
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(x>y || x!=6)
console.log(!false)
console.log(!true)

// 5. ternary operator
marks = 12
console.log("you are",marks>33?"pass":"Fail")