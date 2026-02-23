const AccountId = 535238
let AccountEmail = "jay@gmail.com"
var AccountPassword = "12345"
AccountCity = "Jaipur"
let AccountState;

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(AccountId);
console.log(AccountEmail);
console.log(AccountPassword);
console.log(AccountCity);


AccountEmail = "fdkdj@jgdff.com"
AccountPassword = "12342414"
AccountCity = "mumbai"

console.table([AccountId,AccountEmail,AccountPassword,AccountCity,AccountState])
