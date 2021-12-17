module.exports = function(fileInfo, api, options) {
  // inside a module transform
  const j = api.jscodeshift;
  const ast = api.jscodeshift(fileInfo.source);
  
  // update function calls
  ast.find(j.CallExpression, {
     callee: {
       name: 'logPerson'
    }})
    .forEach(path => {
      const call = path.value;

      const firstName = call.arguments[0];
      const lastName = call.arguments[1];
      const age = call.arguments[2];

      const newProperties = [
        j.property('init', j.identifier('firstName'), firstName),
        j.property('init', j.identifier('lastName'), lastName)
      ]

      if(age) {
        newProperties.push(j.property('init', j.identifier('age'), age))
      }

      call.arguments = [j.objectExpression(newProperties)]
    })

  return ast.toSource();
};