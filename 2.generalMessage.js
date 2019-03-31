const handler = {
 get: function(target, name) {
   // return target.age
   return `Property: ${name}, Value: ${target[name]}`;
 }
};

const person = {
  age: 25,
  company: 'Globant',
  name: 'Juan',
};

const developer = new Proxy(person, handler);
console.log(developer.age);
