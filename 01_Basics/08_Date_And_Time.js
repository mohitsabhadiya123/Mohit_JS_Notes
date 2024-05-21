let date = new Date();
// console.log(date.toString()); // Tue May 21 2024 12:35:15 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); // Tue May 21 2024
// console.log(date.toLocaleString()); // 5/21/2024, 12:35:15 PM
// console.log(typeof date); // object

// console.log(date.getDate()); // 12
// console.log(date.getDay()); // 2 (Tuesday)
// console.log(date.getFullYear()); // 2024
// console.log(date.getHours()); // 0

// let createDate1 = new Date(2024,0,22);
// let createDate2 = new Date(2024,0,22,5,3);
// let createDate3 = new Date("2024-01-14");
// console.log(createDate1); // 2024-01-22T00:00:00.000Z
// console.log(createDate2); // 2024-01-22T05:03:00.000Z
// console.log(createDate3); // 2024-01-14T00:00:00.000Z

// let createDate4 = new Date("01-14-2024");
// // let myTimeStamp = Date.now();

// console.log(createDate4.getTime()); // 1705190400000 Miliseconds
// console.log(Math.round(Date.now()/1000)); // 1705190400000 Miliseconds

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default',{
    weekday: "long"
})