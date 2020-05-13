module.exports = {
  rules: {
    'use-optional-annotation': {
      create(context) {
        return {
          Property: node => {
            if (node.value.name == 'undefined') {
              context.report({ node, message: "Use optional annotation `?` instead of assign `undefined`." });
            }
          }
        };
      }
    }
  }
};
