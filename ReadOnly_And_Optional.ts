// some properties like ids we dont want to manipulate
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number; // optional
};

let user: User = {
  _id: "12",
  name: "lsdfj",
  email: "sldfj",
  isActive: false,
};

user.email = "new";
// user._id = "dlfj"; // not allowed to change
console.log(user);

