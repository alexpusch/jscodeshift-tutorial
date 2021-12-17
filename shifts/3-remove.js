module.exports = function(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = api.jscodeshift(fileInfo.source);
  
  ast.find(j.CallExpression, {
     callee: {
       object: {
         name: 'console'
       },
       property: {
         name: 'log'
       }
    }})
    .remove()
  

  return ast.toSource();
};