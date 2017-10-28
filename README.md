# id.log
id.log is a Node.JS module, alternative to console.log, with some powerful features !

[![NPM Version][npm-version]][npm-url]
[![travis][travis-badge]][travis-url]
[![xo][xo-badge]][xo-url]

## Install

```
npm install id.log --save
```
## Usage

``` js
const id = require('id.log');
id.log('Hello dudes !');
// =>  2017-10-28 10:48:37 - Hello dudes !
```

### isDev()

You can play with isDev, like [electron-is-dev](https://github.com/sindresorhus/electron-is-dev) :

``` js
id.isDev(false);
id.log('No dev env');
// No output in prod env

id.isDev(true);
id.log('Dev env Hell YEAH');
// =>  2017-10-28 10:48:37 - Dev env Hell YEAH
```

You can edit all the arguments by passing an object to `id()` :

### Setup all options

The better way to do it :

``` js
const args = {
	id: 'goodid',
	date: true,
	separator: '🦄',
	quietMode: false,
	priority: 9  // By default, all messages > 5 are displayed
};

id(args);

id.log('Dev env Hell YEAH');
// Goodid 🦄 2017-10-28 10:48:37 🦄 Dev env Hell YEAH
```

You can change everything :

* id: not used by default, but useful for socket instances
* date: true, by default, but you can set it to false
* separator: default to `'-'`, but you can use a beautiful unicorn emoji `'🦄'`
* quietMode: false by default, you can handle it with `isDev()`, or set it with the main way. As **YOU** want !
* priority: set a minimum indicator for the quiet mode. By default, you set the priority on 5. This mean, if you send this log `id.log('message', 4)`, we don't display it.

## Licence
[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) - Arthur Lacoste


[npm-version]:https://img.shields.io/npm/v/id.log.svg
[npm-url]: https://npmjs.org/package/id.log
[travis-badge]: http://img.shields.io/travis/arthurlacoste/id.log.svg
[travis-url]: https://travis-ci.org/arthurlacoste/id.log
[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo-url]: https://github.com/sindresorhus/xo
