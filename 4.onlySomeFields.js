const handler = {
  get: (target, name) => {
    if (name in target) {
      return target[name];
    }
    return '404 not found';
  },
  set: (target, name, value) => {
    const allowedFields = ['name', 'age'];
    if (allowedFields.includes(name)) {
      target[name] = value;
    }
  }
}
const person = {
  age: 25,
  company: 'Globant',
  name: 'Juan',
};

const proxy = new Proxy(person, handler);

proxy.age = 26;
print(proxy.age);
proxy.company = 'Any';
print(proxy.company);

function print(param) {
  console.log(param);

}
