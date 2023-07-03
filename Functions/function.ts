function signUp(name: string, email: string, isPaid: boolean) {
  return;
}
signUp("arnab", "dat", false);

// default values
let logUser = (name: string, email: string, isPaid: boolean = false) => {};
logUser("arnab", "are"); // now no need to isPaid and no error will come if isPaid not passed

// using function as a value so to assign return value
function getHero(): string {
  return "thor";
}

function getUser(id: number) {
  if (id < 10) return false;
  return "arnab";
}