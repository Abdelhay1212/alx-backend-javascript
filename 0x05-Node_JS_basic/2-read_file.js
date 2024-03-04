const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const lines = data.split('\n');
    const listOfStudents = {};

    console.log(`Number of students: ${lines.length - 1}`);

    let firstNameIndex;
    let fieldIndex;

    const fieldNames = lines[0].split(',');
    fieldNames.forEach((key, index) => {
      if (key === 'firstname') {
        firstNameIndex = index;
      }
      if (key === 'field') {
        fieldIndex = index;
      }
    });

    for (const line of lines.slice(1, lines.length)) {
      const cols = line.split(',');
      const key = cols[fieldIndex];

      if (key in listOfStudents) {
        listOfStudents[key].push(cols[firstNameIndex]);
      } else {
        listOfStudents[key] = [cols[firstNameIndex]];
      }
    }

    for (const key in listOfStudents) {
      if (key in listOfStudents) {
        const len = listOfStudents[key].length;
        const list = listOfStudents[key].join(', ');
        console.log(`Number of students in ${key}: ${len}. List: ${list}`);
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
