export default function iterateThroughObject(reportWithIterator) {
    let rval = '';
    for (let v = 0; v < reportWithIterator.length; v += 1) {
      if (v + 1 === reportWithIterator.length) {
        rval += `${reportWithIterator[v]}`;
      } else {
        rval += `${reportWithIterator[v]} | `;
      }
    }
    return rval;
  }