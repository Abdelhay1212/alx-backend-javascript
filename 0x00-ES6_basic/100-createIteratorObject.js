export default function createIteratorObject(report) {
  const reportWithIterator = [];
  const departements = Object.keys(report.allEmployees);

  for (const item of departements) {
    reportWithIterator.push(...report.allEmployees[item]);
  }

  return reportWithIterator;
}
