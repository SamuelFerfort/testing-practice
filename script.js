export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  let output = "";

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}

export function calc() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
}
