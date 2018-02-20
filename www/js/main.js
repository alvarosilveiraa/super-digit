"use strict";

var form = document.querySelector("form");
var input = form.querySelector("input");
input.focus();
var btnClear = form.querySelector(".btn-clear");
var btnUpload = form.querySelector(".btn-upload");
var content = document.querySelector(".content");
var contentIn = content.querySelector(".in");
var contentOut = content.querySelector(".out");

function showContent() {
  form.style.top = "120px";
  content.style.opacity = '1';
}

function setValue(text, name) {
  let p = document.createElement('p');
  p.textContent = text;
  if(name === "in")
    contentIn.appendChild(p);
  else if(name === "out")
    contentOut.appendChild(p);
}

function submit(e) {
  e.preventDefault();
  showContent();
  var value = input.value;
  btnClear.removeAttribute("disabled");
  btnUpload.setAttribute("disabled", '');
  var output = superDigit(...value.split(' '));
  if(output) {
    setValue(value, "in");
    setValue(output, "out");
  }
  input.value = '';
}

function clear() {
  form.removeAttribute("style");
  content.removeAttribute("style");
  contentIn.innerHTML = "<h4>Input</h4>";
  contentOut.innerHTML = "<h4>Output</h4>";
  input.removeAttribute("disabled");
  btnClear.setAttribute("disabled", '');
  btnUpload.removeAttribute("disabled");
  input.focus();
}

function upload(e) {
  var inputFile = document.createElement("input");
  inputFile.setAttribute("type", "file");
  inputFile.addEventListener("change", e => {
    var reader = new FileReader();
    reader.onload = function() {
      showContent();
      var result = reader.result.split('\n');
      for(var i = 0; i < result.length; i++) {
        if(result[i]) {
          input.value = result[i];
          submit(e);
        }
      }
    }
    reader.readAsText(inputFile.files[0]);
  })
  inputFile.click();
}

form.addEventListener("submit", submit);
btnClear.addEventListener("click", clear);
btnUpload.addEventListener("click", upload);
