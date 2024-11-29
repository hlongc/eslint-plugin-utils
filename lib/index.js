/**
 * @fileoverview check typeof
 * @author ronnie
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["eslint-plugin-utils"],
      rules: {
        "@ronnie/typeof-limit": "error",
        "@ronnie/instanceof-limit": "error",
      },
    },
  },
};
