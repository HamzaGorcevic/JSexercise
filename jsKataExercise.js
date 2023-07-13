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

// function nextBigger(n) {
//   nizBrojeva = ("" + n).split("");
//   nizBrojeva.forEach((el, i) => {
//     nizBrojeva[i] = parseInt(el);
//   });
//   nizBrojeva.reverse();
//   let duzina = nizBrojeva.length;
//   let times = 0;
//   for (let i = 0; i < duzina - 1; i++) {
//     if (nizBrojeva[i] > nizBrojeva[i + 1]) {
//       if (i - 1 > -1 && nizBrojeva[i - 1] > nizBrojeva[i + 1]) {
//         elm = nizBrojeva[i + 1];
//         nizBrojeva.reverse();
//         times++;
//         let part = nizBrojeva.slice(duzina - i - 1);
//         part = part.filter((el) => {
//           if (el > elm) {
//             return el;
//           }
//         });
//         let min = Math.min(...part);
//         nizBrojeva.reverse();
//         let index = nizBrojeva.indexOf(min);
//         nizBrojeva.reverse();
//         let temp = nizBrojeva[duzina - i - 2];
//         nizBrojeva[duzina - i - 2] = nizBrojeva[duzina - index - 1];
//         nizBrojeva[duzina - index - 1] = temp;
//         part = nizBrojeva.slice(duzina - i - 1);
//         part.sort();
//         nizBrojeva.splice(duzina - part.length, part.length, ...part);
//         break;
//       }
//       let temp = nizBrojeva[i];
//       nizBrojeva[i] = nizBrojeva[i + 1];
//       nizBrojeva[i + 1] = temp;
//       nizBrojeva.reverse();
//       let part = nizBrojeva.slice(duzina - i - 1);
//       part.sort();
//       nizBrojeva.splice(duzina - part.length, part.length, ...part);
//       times++;
//       break;
//     }
//   }

//   if (times == 0) {
//     return -1;
//   }
//   let result = nizBrojeva.join("");
//   return parseInt(result);
// }
// //0 1 2 3
// //2 4 4 1
// //1 4 4 2
// //part = 1 4
// //2144
// console.log(nextBigger(21174984));

// //1234567980
// //1234567908

// // diffrent solution

function maxWithDigits(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort(function (a, b) {
        return b - a;
      })
      .join("")
  );
}

function nextBigger(n) {
  let mx = maxWithDigits(n);
  console.log(mx);
  for (i = n + 1; i <= mx; i++)
    if ((console.log(i), maxWithDigits(i) === mx)) return i;
  return -1;
}

console.log(nextBigger(414));
