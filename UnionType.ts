let score: number | string;

// score can be number or string
score = 12;
score = "arnab";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let arnab: User | Admin = { name: "arnab", id: 12 };
// we change arnab from User type to Admin
arnab = { username: "arnab", id: 12 };