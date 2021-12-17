module.exports = function(fileInfo, api, options) {
  // inside a module transform
  const j = api.jscodeshift;
  const ast = api.jscodeshift(fileInfo.source);
  
  // rename function
  ast.find(j.FunctionDeclaration, { id: { name: 'foo' }})
    .forEach(path => path.value.id.name = 'logPerson' )

  // update function calls
  ast.find(j.CallExpression, call => call.callee.name === 'foo')
    .forEach(path => {
      path.value.callee.name = 'logPerson'
    })

  return ast.toSource();
};