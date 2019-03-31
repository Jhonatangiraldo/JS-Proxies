const handler = {
  get: (target, name) => {
    if (name in target) {
      return target[name];
    }
    return '404 not found';
  },
  set: (target, name, value) => {
    target[name] = value;
  }
}
const person = {
  age: 25,
  company: 'Globant',
  name: 'Juan',
};

const proxy = new Proxy(person, handler);
print(proxy.name);
print(proxy.age);
proxy.age = 30
print(proxy.age);
print(proxy.position);

function print(param) {
  console.log(param);
}
