// function narcissistic(value) {
//   string = value + "";
//   suma = 0;
//   duzina = string.length;
//   for (i = 0; i < duzina; i++) {
//     suma += Math.pow(string[i], duzina);
//   }
//   if (value == suma) {
//     return true;
//   } else {
//     return false;
//   }
// }

// narcissistic(1);

function nextBigger(n) {
  nizBrojeva = ("" + n).split("");
  nizBrojeva = nizBrojeva.reverse();
  nizBrojeva.forEach((el, i) => {
    nizBrojeva[i] = parseInt(el);
  });
  let duzina = nizBrojeva.length;

  for (let i = 0; i < duzina - 1; i++) {
    if (nizBrojeva[i] > nizBrojeva[i + 1]) {
      let part = nizBrojeva.slice(0, i);
      let min = Math.min(...part);

      let index = nizBrojeva.indexOf(min);
      console.log(index);
      let temp = nizBrojeva[i + 1];
      console.log(temp);
      nizBrojeva[i + 1] = nizBrojeva[index];
      console.log(nizBrojeva[index]);
      nizBrojeva[index] = temp;

      part = nizBrojeva.slice(0, i + 1);
      part.sort();

      console.log(part);
      nizBrojeva.splice(i, i + 1, ...part);

      break;
    }
  }
  nizBrojeva.reverse();
  let result = nizBrojeva.join("");
  console.log("result", result);
}
//0 1 2 3
//2 4 4 1
//1 4 4 2
//part = 1 4
//2144
nextBigger(1442);
