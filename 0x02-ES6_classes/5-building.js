export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  set sqft(value) {
    if (typeof (value) === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft should be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
