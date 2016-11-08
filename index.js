/*!
 * minibase-assert <https://github.com/node-minibase/minibase-assert>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function minibaseAssert (config) {
  return utils.createPlugin('minibase-assert', function minibaseAssert (self) {
    var assert = utils.extend(utils.assertKindof, utils.coreAssert, config)
    self.define('assert', assert)
  })
}
