// var counter = function(arr) {
//   return "There are " + arr.length + " elements in the array";
// };

// arr1 = ["ruby", "nodejs", "react"];
// console.log(counter(arr1));

// var addr = function(a, b) {
//   return `the sum of the 2 number is ${a + b}`;
// };
// var pi = 3.14;

// module.exports.counter = counter;

// module.exports.addr = addr;

// module.exports.pi = pi;

// 简写方式一
/* module.exports = {
  counter: counter,
  addr: addr,
  pi: pi
}; */

// 简写方式二
module.exports = {
    counter: function (arr) {
        return "There are " + arr.length + " elements in the array";
    },
    addr: function (a, b) {
        return `the sum of the 2 number is ${a + b}`;
    },
    pi: 3.14
};
