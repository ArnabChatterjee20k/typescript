interface MyInterface {
  attribute: number;
}

class MyClass implements MyInterface {
  constructor(public attribute: number) {}
}

// same thing

class MyClass2 implements MyInterface{
    attribute: number;
    constructor(){
        this.attribute = 12;
    }

    getAtrribute():number{
        return this.attribute;
    }
}

// what if the class implement a class? Same thing as interface the shape will only be copied
// although this is not a good practice
// we need to define alll the things persent in the Class we are implementing
class MyClass3 implements MyClass2{
    attribute: number;
    constructor(){
        this.attribute = 121;
    }

    getAtrribute(): number {
        return 12;
    }
}