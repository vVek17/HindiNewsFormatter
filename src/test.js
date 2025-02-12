const str = "Hello World How Are ruU";

const res = str.split(" ");

const filtered = res.filter((word) => {
  return !/^[A-Z]+$/.test(word.charAt(0));
  // return !(word.charAt(0) === "/^[A-Z]$");
  // return !word.endsWith("/^[A-Z]$/");
});

console.log(str);
console.log(res);
console.log(filtered);
