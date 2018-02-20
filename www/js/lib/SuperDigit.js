"use strict";

class SuperDigit {
  constructor(n, k) {
    this.n = n;
    this.k = k;
    this.p = this._getP();
  }

  getOutput() {
    if(
      (this.n >= 1 && this.n < Math.pow(10, 100000))
      && (this.k >= 1 && this.k <= Math.pow(10, 5))
    ) {
      let output = this.p;
      while(output.length > 1) {
        output = this._getSumNumbers(output);
      }
      return Number(output);
    }else return 0;
  }

  _getP() {
    try {
      let p = '';
      for(let i = 0; i < this.k; i++) {
        p += this.n;
      }
      return p;
    }catch(e) {
      console.log(e);
      return 0;
    }
  }

  _getSumNumbers(p) {
    let sum = 0;
    for(let i = 0; i < p.length; i++) {
      sum += Number(p[i]);
    }
    return String(sum);
  }
}
