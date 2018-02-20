"use strict";

class SuperDigit {
  constructor(n, k) {
    this.n = n;
    this.k = Number(k);
  }

  getOutput() {
    if(
      (Number(this.n) >= 1) &&
      (this.k >= 1 && this.k <= Math.pow(10, 5))
    ) {
      let output = this._getSumNumbers(this.n, true);
      while(output.length > 1) {
        output = this._getSumNumbers(output);
      }
      return output;
    }else return 0;
  }

  _getSumNumbers(n, isMultiple=false) {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
      sum += Number(n[i]);
    }
    return isMultiple? String(sum * this.k): String(sum);
  }
}
