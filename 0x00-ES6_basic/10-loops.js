export default function appendToEachArrayValue(array, appendString) {
  const new_array = new Array();
  for (const value of array) {
    new_array.push(appendString + value);
  }

  return new_array;
}
