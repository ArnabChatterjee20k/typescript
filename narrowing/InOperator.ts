type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

function move2(animal: Fish | Bird | Human){
    if ("swim" in animal) {
        animal; // Fish | Human
        // return animal.swim(); // error
      }
      animal; // Bird | Human
    //   return animal.fly(); // error
}