export default class HolbertonClass {
  constructor(size, location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    } else if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }

    this._location = location;
    this._size = size;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
