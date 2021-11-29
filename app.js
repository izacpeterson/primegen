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

document.querySelector("#calculate").addEventListener("click", () => {
  primeList = [];
  let maxValue = document.querySelector("#max").value;
  console.log(maxValue);

  for (let i = 0; i < maxValue; i++) {
    if (isPrime(i)) {
      primeList.push(i);
      document.querySelector("#output").innerHTML += `<li>${i}</li>`;
    }
  }
  //   document.querySelector("#output").value = primeList;
});
