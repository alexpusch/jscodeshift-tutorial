function logPerson({firstName, lastName, age}) {
  let string = `${firstName}, ${lastName}`
  if(age) string += `: ${age}`
  
  console.log(string)
}

function foo1() {
  console.log('simple log')
  logPerson("first1", "last1", 10);
}

function foo2() {
  const x = 30
  logPerson("first2", "last2", x + 20);

  console.log({
    multi: 'line',
    value: 3
  })
}

function foo3() {
  console.warn('warning')
  logPerson("first3", "last3");
}
