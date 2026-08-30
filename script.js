let user = "Thiago";
let age = 23;
let message = "hello world";
let cash = 2000;

function sum (...nums) {
  return nums.reduce((counter,num)=>counter + num,0);
}

console.log(sum(1,2,3));

function saludar (user,age) {
  return `im ${user} have ${age} years`
}

console.log(saludar(user,age));
