// the error basically breaks the code
// for this type of function, we have a special type "never"
// never is different from void

function handleError(msg: string): never {
  throw new Error(msg);
}