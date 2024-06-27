export default function createIteratorObject(report) {
    const values = Object.keys(report.allEmployees);
    const list = [];
    for (const key of values) {
      list.push(...report.allEmployees[key]);
    }
    return list;
  }