//?-------------- ÖRNEK -------------------
//? arr dizisindeki negatif ve positif sayilari
//? 2 ayri diziye kaydediniz.
const arr = [-5, 15, 22, -4, 45, 78];

let negatives = [];
let positives = [];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}

console.log(negatives);
console.log(positives);
console.log(arr);
