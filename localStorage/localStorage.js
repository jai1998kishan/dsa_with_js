// let key = prompt("enter key you want to set");
// let value = prompt("enter value you want to set");
let key = "god";
let value = "ram";

localStorage.setItem(key, value);

console.log(`this is the ${key} and the value is ${localStorage.getItem(key)}`);

if (key == "name") {
  localStorage.removeItem(key);
}

console.log(localStorage.name);
