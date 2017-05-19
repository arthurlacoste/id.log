# id.log
id.log is a Node.JS module, alternative to console.log, with some cools parameters.

## Install

```
npm install id.log --save
```
## Usage

``` js
var idLog = require('id.log');
var id = new idLog(socket.id);
```

And after that, you can use id.log instead of console.log :

``` js
console.log('test'); // old way
// -> Output : test

id.log('test'); // id.log way
// -> Output : HH941xxzXGynVjpNAAAA - test
```

## Licence
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) - Arthur Lacoste
