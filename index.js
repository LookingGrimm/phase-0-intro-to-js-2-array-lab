// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log("After append:", cats);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log("After prepend:", cats);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log("After removing last:", cats);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log("After removing first:", cats);
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

// Export cats and functions for use in tests
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
