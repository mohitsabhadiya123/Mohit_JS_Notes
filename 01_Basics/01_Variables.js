const accountId = 14453; // You can't change the value of this variable.
let accountEmail = "mohit@gmail.com"; // let keyword is used as use in scope
var accountPsd = "54321"; // It can not use because of issue in Block scope and Function scope
accountCity = "Surat";
let accountState;

// accountId = 14543; It is not allowed.
accountEmail = "ms@gmail.com";
accountPsd = "98765";
accountCity = "Bhavnagar";
console.log(accountId);
console.table([accountId,accountEmail,accountPsd,accountCity,accountState]);