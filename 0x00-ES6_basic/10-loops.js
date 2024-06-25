export default function appendToEachArrayValue(array, appendString) {
    const newarr = [];
    for (let item of array) {
      item = appendString + item;
      newarr.push(item);
    }
  
    return newarr;
  }