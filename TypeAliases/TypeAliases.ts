type bool = boolean

// creating a type User
type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// accepting and returning User
function createUser(user: User): User {
  return { name: "arnab", email: "ara", isActive: true };
}
function verifyUser(user: User) {}
function deleteUser(user: User) {}
