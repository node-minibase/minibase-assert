/*!
 * minibase-assert <https://github.com/node-minibase/minibase-assert>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function minibaseAssert (opts) {
  return function minibaseAssert (self) {
    self.define('assert', utils.assertKindof)
    // @TODO: add other assert methods
  }
}
