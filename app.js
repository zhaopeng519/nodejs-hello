// import { Stream } from "stream";

/* -------------------------- 了解node.js ---------------------------*/

// console.log("hello world");

/* -------------------------- node.js 全局变量 --------------------------*/

/* setTimeout(() => {
  console.log("3 seconds have passed");
}, 3000);

var time = 0;
var timer = setInterval(() => {
  time += 2;
  console.log(time + " seconds have passed");
  if(time > 5){
      clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
输出当前目录

输出当前文件
console.log(__filename); */

/* -------------------------- node.js 回调函数 --------------------------*/

// function sayHi() {
//   console.log("Hi");
// }

// // sayHi();

// function callFunc(fun) {
//   fun();
// }

// // 匿名函数
// var sayBye = function() {
//   console.log("Bye");
// };

// callFunc(sayHi);

// 带参数回调函数

// var sayBye = function(name) {
//   console.log(name + " Bye");
// };

// function callFunc(fun, name) {
//   fun(name);
// }

// callFunc(sayBye, "rails365");

// // 经常书写方式
// callFunc(function(name) {
//   console.log(name + " Bye");
// }, "rails365");

/* -------------------------- node.js 模块 --------------------------*/

/* var stuff = require("./count");

console.log(stuff.counter(["React", "Anguls", "Vue"]));

console.log(stuff.addr(3, 2));

console.log(stuff.pi); */

/* -------------------------- node.js 事件 --------------------------*/

// var events = require("events");
// var util = require("util");

/* var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',function(message){
    console.log(message);
})

myEmitter.emit('someEvent', 'the event was emitted'); */

/* var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var xming = new Person("xming");
var lili = new Person("lili");
var lucy = new Person("lucy");

var person = [xming, lili, lucy];

person.forEach(function(person) {
  person.on("speak", function(message) {
    console.log(person.name + " said: " + message);
  });
});

xming.emit("speak", "hi");
lili.emit("speak", "I'm " + lili.name);
 */

/* -------------------------- node.js 读写文件（同步，异步） --------------------------*/
/* var fs = require("fs");

var readMe = fs.readFile("readMe.md", "utf8", function(err, data) {
  //   console.log(data);
  fs.writeFile("writeMe.md", data, function() {
    console.log("writeMe has finished");
  });
});

// console.log(readMe);

// fs.writeFileSync("wirteMe.md", readMe);

console.log("finished"); */

/* -------------------------- node.js 目录操作 --------------------------*/

/* var fs = require("fs");

fs.unlink("wirteMe.md", function() {
  console.log("delete writeMe.md file");
});

fs.mkdir("stuff", function() {
  fs.readFile("readMe.md", "utf8", function(err, data) {
    fs.writeFile("./stuff/writeMe.md", data, function() {
      console.log("copy successfully");
    });
  });
}); */

/* -------------------------- node.js 流和管道 --------------------------*/

// Stream

// 流和管道
/* var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.md');

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);

var writeData = "hello world";
myWriteStream.write(writeData);
myWriteStream.end();
myWriteStream.on('finish', function () {
    console.log('finished');
})

myReadStream.setEncoding('utf8');

var data = ""

myReadStream.on('data', function (chunk) {
    // data += chunk;
    myWriteStream.write(chunk);
})

myReadStream.on('end', function () {
    console.log(data);
}) */

/* -------------------------- node.js web服务器 响应纯文本--------------------------*/

/* var http = require("http");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "text/plain" });
  // response.write("Hello from out application");
  response.end("Hello from out application");
};
var server = http.createServer(onRequest);

server.listen(3000, "127.0.0.1");
console.log("Server started on localhost port 3000");
 */

/* -------------------------- node.js web服务器 响应JSON--------------------------*/

/* var http = require("http");

var onRequest = function(request, response) {
  console.log("Request received");
  response.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "pengGe",
    job: "programmer",
    age: "27"
  };
  response.end(JSON.stringify(myObj));
};
var server = http.createServer(onRequest);

server.listen(3000, "127.0.0.1");
console.log("Server started on localhost port 3000"); */


/* -------------------------- node.js web服务器 响应HTML--------------------------*/

/* var http = require('http');
var fs = require('fs');

var onRequest = function (request, response) {
  console.log('Request received');
  response.writeHead(200, { 'Content-Type': 'text/html' });
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  // response.write('Hello from out application');
  myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000'); */

/* -------------------------- node.js web服务器 模块化思想--------------------------*/

// var server = require('./server');

// server.startServer();

/* -------------------------- node.js web服务器 路由重构--------------------------*/

// var server = require("./server");
// var router = require("./router");
// var handler = require("./handler");

// var handle = {};
// handle["/"] = handler.home;
// handle["/home"] = handler.home;
// handle["/review"] = handler.review;
// handle["/api/v1/records"] = handler.api_records;

// server.startServer(router.route, handle);


/* -------------------------- node.js web服务器 POST或者GET--------------------------*/

/* var server = require("./server");
var router = require("./router");
var handler = require("./handler");

var handle = {};
handle["/"] = handler.home;
handle["/home"] = handler.home;
handle["/review"] = handler.review;
handle["/api/v1/records"] = handler.api_records;

server.startServer(router.route, handle); */

/* -------------------------- node.js web服务器 Express--------------------------*/

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
