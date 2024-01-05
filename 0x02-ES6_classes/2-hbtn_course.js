export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof (value) === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof (value) === 'number') {
      this._name = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(values) {
    if (Array.isArray(values)) {
      for (const value of values) {
        if (typeof (value) === 'string') {
          this.students.push(value);
        } else {
          throw new TypeError('Values of array must be string');
        }
      }
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
