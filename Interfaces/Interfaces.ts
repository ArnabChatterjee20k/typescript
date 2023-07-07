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
const arnab: User = {
  email: "sdjf",
  userId: 1,
  dbId: 12,
  startTrail: () => arnab.email,
  endTrail: () => false,
  getCoupon(name:string, value:number) {
      return value
  },
};

console.log(arnab.getCoupon("lsdjf",12));
