function foo(firstName, lastName, age) {
  let string = `${firstName}, ${lastName}`
  if(age) string += `: ${age}`
  
  console.log(string)
}

function foo1() {
  foo("first1", "last1", 10);
}

function foo2() {
  foo("first2", "last2", 30);
}

function foo3() {
  foo("first3", "last3");
}