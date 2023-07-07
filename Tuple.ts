let tupleUser: [string, number, boolean]; // order and type of the elements
tupleUser = ["arnab", 12, true];

type RGB = [number, number, number];
let rgb: RGB;
rgb = [12, 33, 112];

// we can overwrite the values means mutuable
rgb[1] = 12;

// tuple restricts adding extra values
// but still it dont disallow usage of push,pop , unshift leading to adding of extra elements
rgb.push(12);
console.log(rgb);

// stopping mutation using read only
let test:readonly [number,string] = [10,"dlfj"];
// test[0] = 12; // error
// test.push(12) // error