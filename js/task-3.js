class StringBuilder {
  #value;
  constructor(params) {
    this.#value = String(params)
  }

  getValue() {
    return this.#value
  }
  padStart(str) {
    this.#value = this.#value + str
  }
  padEnd(str) {
    this.#value = str + this.#value
  }
  padBoth(str) {
    this.#value = str + this.#value + str
  }
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
