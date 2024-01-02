export default function createReportObject(employeesList) {
    const createReportObject = {
        "allEmployees": employeesList,
        getNumberOfDepartments() {
            return Object.keys(employeesList).length;
        }
    };

    return createReportObject;
}
