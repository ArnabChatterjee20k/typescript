class User {
  readonly city: string = "sldfj";
  private _courseCount = 1; // cant be accessed by subclass in inheritence
  protected admin: boolean = true; // can be accessed by subclass in inheritence
  //no need to use this.prop = prop
  // this will be done automatically when converted to js
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {
    console.log(email);
  }

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return "apple" + this.email;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // we cant use type annotation for return type in setters
  set courseCount(num: number) {
    this._courseCount = num;
  }
}

class SubUser extends User {
  // cant access private , we can use protected properties
  isFamily: boolean = true;
  changeIsFamily() {
    this.isFamily = false;
  }
}

const arnab = new User("sdlf", "dsf", "dfs");
