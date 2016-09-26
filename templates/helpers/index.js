/* eslint-disable global-require */
const Swag = require('swag');
const requireDirAll = require('require-dir-all');
const helpers = requireDirAll('./');

// Register library helpers
const helperRegisterer = {
  registerHelper(helperName, helperFunc) {
    helpers[helperName] = helperFunc;
  }
};

Swag.registerHelpers(helperRegisterer);

module.exports = helpers;
