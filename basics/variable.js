const accountId = 192419 
let accountEmail = "neel@gmail.com"
var accountPassword = "12345"
accountCity = "Gujarat"
let accountState; // if there is no value declared then in output it's come undefined

//accountId = 1 //not allowed. we can't change value if declared before

accountEmail = "n@gmail.com"
accountPassword = "1111"
accountCity = "Mumbai"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])