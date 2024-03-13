import fs from 'fs/promises';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split(/\r?\n/).slice(1);
        const studentsPerField = {};

        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (!studentsPerField[field]) {
            studentsPerField[field] = [firstName];
          } else {
            studentsPerField[field].push(firstName);
          }
        });
        resolve(studentsPerField);
      }).catch(() => {
        reject(Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
