// predefined
const score:Array<number> = []

// bad practice
function identity1(val:any):any{
    return val
}

// a bit useful
function identity2(val:boolean|number):boolean|number{
    return val
}

// best way with generics
// T means Type
function identity3<T>(val:T):T{
    return val
}

// automatically locking the Type
identity3(3)
identity3("sldjf")
identity3(true)
identity3([12,12])


// Using with interfaces
interface DB{
    name:string;
}
identity3<DB>({name:"dlfj"})