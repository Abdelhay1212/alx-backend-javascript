import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        let response = 'This is the list of our students\n';
        Object.keys(data).forEach((field) => {
          response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        });
        res.status(200).send(response);
      }).catch((err) => {
        res.status(500).send(`Cannot load the database - ${err.message}`);
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (!['CS', 'SWE'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        res.status(200).send(`List: ${data[req.params.major].join(', ')}`);
      }).catch((err) => {
        res.status(500).send(`Cannot load the database - ${err.message}`);
      });
  }
}

export default StudentsController;
