const account_Id = 18890
let accountEmail = "dewto@haren.uk"
var accountPassword = "7890"
accountCity = "Jaipur"
let accountState;
// account_Id = 3 //not allowed

/*
Prefer not to use var
because of issues in block scope and functional scope

*/

accountEmail = "gc@gc.com"
accountPassword="1234"
accountCity="Dharamshala"
console.log(account_Id);
console.table([accountEmail,accountPassword,accountCity,accountState])
