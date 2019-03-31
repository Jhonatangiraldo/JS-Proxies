const handler = {
  get: (target, name) => target[name],
  set: (target, name, value) => target[name] = value,
}

const person = {
  company: 'Globant',
  name: 'Juan',
};
const { proxy, revoke } = Proxy.revocable(person, handler);

print(proxy.age);
print(proxy.name);
print(proxy.company);
proxy.age = 30
print(proxy.age);

revoke()
print(proxy.age);
proxy.age = 30

function print(param) {
  console.log(param);
}
