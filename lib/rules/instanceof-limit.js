/**
 * @fileoverview typeof不能用于对象和数组
 * @author ronnie
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "慎用instanceof来检测类型",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      tip1: "慎用instanceof来检测类型",
    }, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      BinaryExpression: (node) => {
        const left = node.left;
        const operator = node.operator;

        if (left.type === "Identifier" && operator === "instanceof") {
          context.report({
            node,
            messageId: "tip1",
          });
        }
      },
    };
  },
};
