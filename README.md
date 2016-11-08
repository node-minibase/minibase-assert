# [minibase-assert][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> Plugin for [minibase][] and [base][], that adds assertion methods - most of [assert-kindof][] methods and built-ins assert module.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
> Install with [npm](https://www.npmjs.com/)

```sh
$ npm i minibase-assert --save
```

## Usage
> For more use-cases see the [tests](./test.js). Includes all of the [assert-kindof][] methods and all of the core `assert`'s methods.

```js
const minibaseAssert = require('minibase-assert')
const MiniBase = require('minibase').MiniBase
const app = new MiniBase()

app.use(minibaseAssert())

app.assert.object(null) // => throws AsserionError: null !== object
app.assert.object(123) // => throws AsserionError: number !== object
app.assert.object([1, 2, 3]) // => throws AsserionError: array !== object
app.assert.array(123) // => throws AsserionError: number !== array

app.assert.array([1, 2, 3]) // => does not throws
app.assert.number(123) // => does not throws
app.assert.object({ a: 'b' }) // => does not throws
```

**Hint:** Use `app.assert.is` if you want type checking and need to return true/false values without throwing AssertionError, because it is based on [is-kindof][] which in turn uses [kind-of][] behind the scenes!

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [minibase-better-define](https://www.npmjs.com/package/minibase-better-define): Plugin for [base][] and [minibase][] that overrides the core `.define` method to be more better. | [homepage](https://github.com/node-minibase/minibase-better-define#readme "Plugin for [base][] and [minibase][] that overrides the core `.define` method to be more better.")
- [minibase-create-plugin](https://www.npmjs.com/package/minibase-create-plugin): Utility for [minibase][] and [base][] that helps you create plugins | [homepage](https://github.com/node-minibase/minibase-create-plugin#readme "Utility for [minibase][] and [base][] that helps you create plugins")
- [minibase-is-registered](https://www.npmjs.com/package/minibase-is-registered): Plugin for [minibase][] and [base][], that adds `isRegistered` method to your application to detect if plugin is already registered and returns true or false if… [more](https://github.com/node-minibase/minibase-is-registered#readme) | [homepage](https://github.com/node-minibase/minibase-is-registered#readme "Plugin for [minibase][] and [base][], that adds `isRegistered` method to your application to detect if plugin is already registered and returns true or false if named plugin is already registered on the instance.")
- [minibase-results](https://www.npmjs.com/package/minibase-results): Plugin for [minibase][] that adds useful initial properties for test results | [homepage](https://github.com/node-minibase/minibase-results#readme "Plugin for [minibase][] that adds useful initial properties for test results")
- [minibase-visit](https://www.npmjs.com/package/minibase-visit): Plugin for [minibase][] and [base][], that adds `.visit` method to your application to visit a method over the items in an object, or map visit… [more](https://github.com/node-minibase/minibase-visit#readme) | [homepage](https://github.com/node-minibase/minibase-visit#readme "Plugin for [minibase][] and [base][], that adds `.visit` method to your application to visit a method over the items in an object, or map visit over the objects in an array. Using using [collection-visit][] package.")
- [minibase](https://www.npmjs.com/package/minibase): MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "MiniBase is minimalist approach to Base - @node-base, the awesome framework. Foundation for building complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/node-minibase/minibase-assert/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[assert-kindof]: https://github.com/tunnckocore/assert-kindof
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[collection-visit]: https://github.com/jonschlinkert/collection-visit
[is-kindof]: https://github.com/tunnckocore/is-kindof
[kind-of]: https://github.com/jonschlinkert/kind-of
[minibase]: https://github.com/node-minibase/minibase

[npmjs-url]: https://www.npmjs.com/package/minibase-assert
[npmjs-img]: https://img.shields.io/npm/v/minibase-assert.svg?label=minibase-assert

[license-url]: https://github.com/node-minibase/minibase-assert/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/minibase-assert.svg

[downloads-url]: https://www.npmjs.com/package/minibase-assert
[downloads-img]: https://img.shields.io/npm/dm/minibase-assert.svg

[codeclimate-url]: https://codeclimate.com/github/node-minibase/minibase-assert
[codeclimate-img]: https://img.shields.io/codeclimate/github/node-minibase/minibase-assert.svg

[travis-url]: https://travis-ci.org/node-minibase/minibase-assert
[travis-img]: https://img.shields.io/travis/node-minibase/minibase-assert/master.svg

[coveralls-url]: https://coveralls.io/r/node-minibase/minibase-assert
[coveralls-img]: https://img.shields.io/coveralls/node-minibase/minibase-assert.svg

[david-url]: https://david-dm.org/node-minibase/minibase-assert
[david-img]: https://img.shields.io/david/node-minibase/minibase-assert.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

