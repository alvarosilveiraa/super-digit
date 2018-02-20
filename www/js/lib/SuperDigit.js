"use strict";

function getSum(n, k) {
  var sum = 0;
  for(var i = 0; i < n.length; i++) {
    sum += Number(n[i]);
  }
  return k? String(sum * k): String(sum);
}

function superDigit(n, k) {
  if(
    (Number(n) >= 1) &&
    (k >= 1 && k <= Math.pow(10, 5))
  ) {
    var output = getSum(n, k);
    while(output.length > 1) {
      output = getSum(output);
    }
    return output;
  }else return 0;
}
