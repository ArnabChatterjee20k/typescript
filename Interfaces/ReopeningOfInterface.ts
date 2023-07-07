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

// added more properties to User interface
interface User {
  githubId: number;
}

const arnab: User = {
  email: "sdjf",
  userId: 1,
  dbId: 12,
  startTrail: () => arnab.email,
  endTrail: () => false,
  getCoupon(name: string, value: number) {
    return value;
  },

  githubId: 12,
};
