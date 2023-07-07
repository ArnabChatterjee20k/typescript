interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  gId?: string;
  //providing methods(different ways)
  startTrail: () => string;
  endTrail(): boolean;
  getCoupon(cName: string, value: number): number;
}

// we can add more by ,
interface Admin extends User {
  role: "admin" | "learner";
}

// although we are reopening the interface after extending
// till the we have to add the new property in the Admin object
interface User {
  githubId: number;
}

const arnab: Admin = {
  email: "sdjf",
  userId: 1,
  dbId: 12,
  startTrail: () => arnab.email,
  endTrail: () => false,
  getCoupon(name: string, value: number) {
    return value;
  },
  role: "admin",
  githubId:12
};


export {}