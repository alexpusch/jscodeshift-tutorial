# jscodeshift

https://github.com/facebook/jscodeshift

## AST
[Abstract Syntax Tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
ast tree visualizer - https://astexplorer.net/

## Examples
1. Rename function `foo()` to `logPerson()`
  `jscodeshift -t shifts/1-rename.js 1-input.js`

2. Refactor `logPerson()` to receive an object instead of parameters
  `jscodeshift -t shifts/2-refactor.js 2-input.js`

3. Remove use of `console.log`
  `jscodeshift -t shifts/3-remove.js 3-input.js`

## builders definitions
https://github.com/benjamn/ast-types/blob/master/def/core.ts