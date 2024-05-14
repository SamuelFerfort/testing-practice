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

export function caesar(str, shift) {
  let output = "";
  let a = "a".charCodeAt(0) - 1;
  let A = "A".charCodeAt(0) - 1;
  for (const char of str) {
    let code = char.charCodeAt(0) + shift;
    if (char === "z") code = a + shift;
    if (char === "Z") code = A + shift;
    if (!/[a-zA-Z]/.test(char)) {
      output += char;
      continue;
    }
    output += String.fromCharCode(code);
  }

  return output;
}

export function analyzeArray(arr) {
  if (arr.some((n) => typeof n !== "number")) return null;

  return {
    average: arr.reduce((total, value) => total + value, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
