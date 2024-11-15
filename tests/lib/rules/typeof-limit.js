/**
 * @fileoverview typeof不能用于对象和数组
 * @author ronnie
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/typeof-limit"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("typeof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: 'typeof a === "number"' },
    { code: ' b === "number"' },
  ],

  invalid: [
    {
      code: 'typeof a === "object"',
      // 在哪个节点校验报错，报错信息id是什么
      errors: [{ messageId: "tip", type: "BinaryExpression" }],
    },
  ],
});
