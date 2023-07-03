const arr = ["arnab", "bitt", "dat"]; // the type is infered

/**
 * type of the parameters of the callback is automatically infered based on the element present in the array
 * the return is also infered but we should provide it explicitly
 */
arr.map((n): string => {
  return n.toUpperCase();
});