/** @format */

const urlParams = new URLSearchParams(window.location.search);
const number = urlParams.get("isPrime");

if (number) {
  if (isPrime(number)) {
    $(".content").append(`<h2>True. ${number} is prime.</h2>`);
  } else {
    $(".content").append(`<h2>False. ${number} is not prime.</h2>`);
  }
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
