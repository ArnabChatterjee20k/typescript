// passing a argument
// we can separate the properties by ; or ,
// if not given any type it will be optional
function createUser(pt: { name: string; isPaid: boolean; data }): void {
  // pass
}
createUser({ name: "arnab", isPaid: true, data: 12 });


// returning object
// functionName():{...returing object properties} {}
function getUser(): { name: string; price: number } {
  return { name: "arnab", price: 12 };
}
