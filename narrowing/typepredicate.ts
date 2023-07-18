type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // hover over here and you will see still it is confused whether the return is Fish or Bird
    return "fish food";
  } else {
    pet; // hover over here and you will see still it is confused whether the return is Fish or Bird
    return "bird food";
  }
}

// Correct Version to solely get one type from isFish either Fish or Bird
function isFish2(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// Now hover over the params by again writing the getFood