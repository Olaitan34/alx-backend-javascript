export default function createReportObject(employeesList) {
    const report = {
      allEmployees: employeesList,
      getNumberOfDepartments(employeesList) {
        const total = Object.keys(employeesList).length;
        return total;
      },
    };
    return report;
  }