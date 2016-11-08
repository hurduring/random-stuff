let curry = (fn, ...args) => (arg) => {
  let allArgs = args.concat(arg);
  if (allArgs.length >= fn.length) {
    return fn(...allArgs);
  }
  return curry(fn, ...allArgs)
}

const multiply = (x, y, z) => x * y * z;

console.log(curry(multiply)(2)(3)(3))