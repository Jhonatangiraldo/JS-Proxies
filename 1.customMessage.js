const handler = {
 get: function(target, prop) {
   if (prop === 'age') {
     return `${target.name} is ${target[prop]} years old`;
   } else if(prop === 'company') {
    return `${target.name} works at ${target[prop]}`;
   } else if(prop === 'name') {
     return `His name is ${target[prop]}`;
   }
   return 'What do you mean?';
 }
};

const person = {
  age: 25,
  company: 'Globant',
  name: 'Juan',
};

const developer = new Proxy(person, handler);
print(developer.age);
print(developer.company);
print(developer.name);
print(developer.city);


function print(param) {
  console.log(param);
}
