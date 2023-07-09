function sample<T>(params: T[]): T[] {
  return params;
}

function sample2<T>(params: Array<T>): Array<T> {
  return params;
}

function getProducts<T>(products:T[]):T {
    return products[3] // one of the value from array , so return type T
}