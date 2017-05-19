# id.log
id.log is a Node.JS module, alternative to console.log, with some cools parameters.

## Install

```
npm install id.log --save
```
## Usage

``` js
var idLog = require('./id.log');
var id = new idLog(socket.id);
```

And after that, you can use id.log instead of console.log :

``` js
console.log('test'); // old way
// -> Output : test

console.log('test'); // id.log way
// -> Output : HH941xxzXGynVjpNAAAA - test
```
