"use strict";

class Main {
  constructor() {
    this.superDigit = null;
    this.form = document.querySelector("form");
    this.input = this.form.querySelector("input");
    this.input.focus();
    this.btnClear = this.form.querySelector(".btn-clear");
    this.btnUpload = this.form.querySelector(".btn-upload");
    this.content = document.querySelector(".content");
    this.contentIn = this.content.querySelector(".in");
    this.contentOut = this.content.querySelector(".out");
  }

  submit(e) {
    e.preventDefault();
    this._showContent();
    const value = this.input.value;
    this.superDigit = new SuperDigit(...value.split(' '));
    this.btnClear.removeAttribute("disabled");
    this.btnUpload.setAttribute("disabled", '');
    const output = this.superDigit.getOutput();
    if(output) {
      this._setIn(value);
      this._setOut(output);
    }
    this.input.value = '';
  }

  clear() {
    this.form.removeAttribute("style");
    this.content.removeAttribute("style");
    this.contentIn.innerHTML = "<h4>Input</h4>";
    this.contentOut.innerHTML = "<h4>Output</h4>";
    this.input.removeAttribute("disabled");
    this.btnClear.setAttribute("disabled", '');
    this.btnUpload.removeAttribute("disabled");
    this.input.focus();
    this.step = 0;
  }

  upload() {
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.addEventListener("change", e => {
      let reader = new FileReader();
      reader.onload = function() {
        this._showContent();
        let result = reader.result.split('\n');
        for(let i = 0; i < result.length; i++) {
          if(result[i]) {
            this.input.value = result[i];
            this.submit(e);
          }
        }
      }.bind(this)
      reader.readAsText(input.files[0]);
    })
    input.click();
    return false;
  }

  _showContent() {
    this.form.style.top = "120px";
    this.content.style.opacity = '1';
  }

  _setIn(text) {
    let p = document.createElement('p');
    p.textContent = text;
    this.contentIn.appendChild(p);
  }

  _setOut(text) {
    let p = document.createElement('p');
    p.textContent = text;
    this.contentOut.appendChild(p);
  }
}
let main = new Main();
