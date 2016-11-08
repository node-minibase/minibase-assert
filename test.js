/*!
 * minibase-assert <https://github.com/node-minibase/minibase-assert>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('mukla')
var MiniBase = require('minibase').MiniBase
var plugin = require('./index')

test('should have `assert-kindof` methods at `app.assert` object', function (done) {
  var app = new MiniBase()
  app.use(plugin())
  test.strictEqual(typeof app.assert, 'object')
  test.strictEqual(typeof app.assert.is, 'object')
  test.strictEqual(typeof app.assert.array, 'function')
  test.strictEqual(typeof app.assert.object, 'function')
  test.strictEqual(typeof app.assert.string, 'function')
  test.strictEqual(typeof app.assert.is.array, 'function')
  test.strictEqual(typeof app.assert.is.object, 'function')
  test.strictEqual(typeof app.assert.is.string, 'function')
  done()
})

test('should have builtins `assert` methods at `app.assert` object', function (done) {
  var base = new MiniBase()
  base.use(plugin())
  test.strictEqual(typeof base.assert.strictEqual, 'function')
  test.strictEqual(typeof base.assert.deepEqual, 'function')
  done()
})

test('should be able to add more method to `app.assert` through `config`', function (done) {
  var minibase = new MiniBase()
  minibase.use(plugin({
    aaa: function aaa () {},
    bbb: function bbb () {},
    strictEqual: function strictEqual (a, b) {
      return a + b
    }
  }))
  test.strictEqual(typeof minibase.assert.aaa, 'function')
  test.strictEqual(typeof minibase.assert.bbb, 'function')
  test.strictEqual(typeof minibase.assert.strictEqual, 'function')
  test.strictEqual(minibase.assert.strictEqual(11, 22), 33)
  done()
})
