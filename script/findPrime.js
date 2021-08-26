/** @format */

const urlParams = new URLSearchParams(window.location.search);
const minNum = urlParams.get("min");
const maxNum = urlParams.get("max");

let array = [];
let count = 1;
let total = 0;

if (minNum || maxNum) {
  for (var q = minNum; q < maxNum; q++) {
    count += 2;

    if (isPrime(q)) {
      array.push(q);
      total++;
    }
  }
  $(".content").prepend(
    `<h2>Highest Prime Calculated: ${array[array.length - 1]}</h2>
    <h2>Total Primes Calculated: ${total}</h2>`
  );
  $("#outPrime").val(array);
}

function isPrime(num) {
  if (num <= 3) return num > 1;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let counter = 5;
  while (Math.pow(counter, 2) <= num) {
    if (num % counter === 0 || num % (counter + 2) === 0) return false;
    counter += 6;
  }
  return true;
}

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};

document.querySelector("#btnSave").addEventListener("click", () => {
  const textArea = document.querySelector("textarea");
  $("#outPrime").val(array);
  downloadToFile(array, "my-new-file.txt", "text/plain");
});
