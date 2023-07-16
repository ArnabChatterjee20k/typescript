interface Quiz {
  name: string;
  tupe: string;
}

interface Course4 {
  name: string;
  author: string;
  subject: string;
}

// Generic Class
// Now the class is flexible to most of the classes with common usecases
class Sellable<T> {
  public cart: T[] = [];

  addToCart(pdts: T) {
    this.cart.push(pdts);
  }
}
