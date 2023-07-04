function log(id: number | string) {
  console.log(id);
}

function getId(id: number | string): string {
  // we cant directly use methods of string in id cause id can be number of string
  // we need to do a check and basis on that we will get editor suggestions and errors
  if (typeof id === "number") {
    return id.toString();
  }
  return id.toLowerCase();
}
