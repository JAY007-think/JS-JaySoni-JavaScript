// prompt and alert are the browser function , so below code is not run here ,run in browser console
let a = prompt("Hey Whats your age?")
a = Number.parseInt(a) // Converting the string to a number
if(a<0){
    alert("this is an invalid age");
}else if(a<9){
    alert("Valid! but you are kid and you can't even think of driving");
}else if(a<18 && a>=9){
    alert("Valid! you can think of driving after 18");
}else{
    alert("you can drive as you are above 18")
}
console.log("Done")