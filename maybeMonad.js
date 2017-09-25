class Maybe {
  constructor(value) {
    super();
    this._value = value;
  }
  of(value) {
    return new Maybe(value);
  }
  isNothing() {
    return (this._value === null || this._value === undefined);
  }
  map(f) {
    if (this.isNothing()) {
      return Maybe.of(null);
    }
    return Maybe.of(f(this._value));
  }
  join() {
    return this._value;
  }
  chain(f) {
    return this.map(f).join();
  }
  orElse(d) {
    if (this.isNothing()) {
      return Maybe.of(d);
    }
    return this;
  }
}