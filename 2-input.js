function logPerson(firstName, lastName, age) {
  let string = `${firstName}, ${lastName}`
  if(age) string += `: ${age}`
  
  console.log(string)
}

function foo1() {
  logPerson("first1", "last1", 10);
}

function foo2() {
  const x = 30
  logPerson("first2", "last2", x + 20);
}

function foo3() {
  logPerson("first3", "last3");
}
