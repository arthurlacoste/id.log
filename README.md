# id.log
id.log is a Node.JS module, alternative to console.log, with some cools parameters.

[![NPM Version][npm-version]][npm-url]
[![travis][travis-badge]][travis-url]

## Install

```
npm install id.log --save
```
## Usage

``` js
var idLog = require('id.log');
var id = new idLog('mySocketVar',true);
```

or more faster :

``` js
var idLog = require('id.log');
var id = new idLog();
```
 First parameter allow you to insert a var, like a socketid.
 The second parameter is a simple date timer, usefull to know when your log have been displayed !
 Third parameter, you can change your separator !!! Useless, but you can put a smiley. Isn't cool ?

And after that, you can use id.log instead of console.log :

``` js
console.log('test'); // old way
// -> Output : test

id.log('test'); // id.log way
// -> Output : mySocketVar - 2017-09-30 13:50:05 - test
```

## Licence
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) - Arthur Lacoste


[npm-version]:https://img.shields.io/npm/v/id.log.svg
[npm-url]: https://npmjs.org/package/id.log
[travis-badge]: http://img.shields.io/travis/arthurlacoste/id.log.svg
[travis-url]: https://travis-ci.org/arthurlacoste/id.log
