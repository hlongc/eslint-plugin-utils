/**
 * @fileoverview typeof不能用于对象和数组
 * @author ronnie
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/instanceof-limit"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("instanceof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: "a === 1" },
    { code: ' b === "number"' },
  ],

  invalid: [
    {
      code: "a instanceof Array",
      // 在哪个节点校验报错，报错信息id是什么
      errors: [{ messageId: "tip1", type: "BinaryExpression" }],
    },
  ],
});
