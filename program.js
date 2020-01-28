//Exercise 1
require('es6-promise');
setTimeout(function () {
    console.log('TIMED OUT!');
}, 300); 
//Exercise 2
const promise = new Promise(function(fulfill, reject) { 
  setTimeout(function () {
   fulfill("FULFILLED!");
}, 300);
});
promise.then(console.log); 
//Exercise 3
const promise = new Promise(function(resolve, reject) { 
  setTimeout(function () {
    reject(new Error);
 }, 300);
}) 

promise .then(null,function onReject() {
  console.log("REJECTED!")
});  
//Exercise 4
const promise = new Promise((fulfill, reject) => { 
   fulfill('I FIRED');
   reject(new Error('I DID NOT FIRE'));
}); 

promise.then(console.log,function onReject(Error) {
  console.log(Error.message)
});
//Exercise 5
const promise = new Promise((fulfill, reject) => { 
  fulfill('PROMISE VALUE');
}); 

promise.then(console.log);
console.log("MAIN PROGRAM"); 
//Exercise 6
const promise = Promise.resolve('Secret Value');

promise.then(console.log).catch(err => console.log(err));  
//Exercise 7
const promiseOne = first();

const promiseTwo = promiseOne.then(function(success) {
  return second(success);
})

promiseTwo.then(console.log) 
//Exercise 8
function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log); 
//Exercise 9
function parsePromised(file) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(file));
    } catch (err) {
      reject(err);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject); 
//Exercise 10
function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows() {
  throw new Error('OH NOES');
}

function onReject(error) {
  console.log(error.message);
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject); 
//Exercise 11
function all(a, b) {
  return new Promise(function (fulfill, reject) {
    var counter = 0;
    var out = [];

    a.then(function (val) {
      out[0] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });

    b.then(function (val) {
      out[1] = val;
      counter++;

      if (counter >= 2) {
        fulfill(out);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log); 
//Exercise 12
const http = require('q-io/http');

http.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()
//Exercise 13
http.read("http://localhost:7000/")
.then(function (id) {
  return http.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();