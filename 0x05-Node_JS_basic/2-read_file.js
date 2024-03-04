const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split('\n');
    const listOfStudents = {};

    console.log(`Number of students: ${lines.length - 1}`);

    lines.forEach((line) => {
      const cols = line.split(',');
      const key = cols[cols.length - 1].trim();

      if (key !== 'field') {
        if (key in listOfStudents) {
          listOfStudents[key].push(cols[0]);
        } else {
          listOfStudents[key] = [cols[0]];
        }
      }
    });

    for (const key in listOfStudents) {
      if (key in listOfStudents) {
        const len = listOfStudents[key].length;
        const list = listOfStudents[key].join(', ');
        console.log(`Number of students in ${key}: ${len}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
