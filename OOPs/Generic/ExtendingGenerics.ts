interface DB {
  conn: string;
  userName: string;
}

// also we could have declared U as of type Db
// this is another way of doing using generics
function anotherFunc<T, U extends DB>(valueOne: T, valueTwo: U): object {
  return { valueOne, valueTwo };
}

anotherFunc(3,{conn:'sdf',userName:""}) // valueTwo must be type DB

export {}