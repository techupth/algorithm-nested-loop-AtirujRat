function printPattern(n) {
  let finalresult = "";

  for (let i = 1; i <= n; i++) {
    let rowResult = "";
    for (let j = 1; j <= n; j++) {
      rowResult += j * i + "\t";
    }

    finalresult += rowResult + "\n";
  }

  return finalresult;
}

const result = printPattern(5);

console.log(result);
