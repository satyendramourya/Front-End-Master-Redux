// console.log("Hello from arrays.js");
const dayoftheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

[dayoftheWeek[0], dayoftheWeek[6]] = [dayoftheWeek[6], dayoftheWeek[0]];

dayoftheWeek.forEach(function (day) {
  console.log(day);
});
// console.log(dayoftheWeek);
// for (let i = 0; i < dayoftheWeek.length; i++) {
//   console.log(dayoftheWeek[i]);
// }
// const arrayOfPrimeNumbers = [1];

// const prime = () => {
//   for (let i = 2; i < 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       arrayOfPrimeNumbers.push(i);
//     }
//   }
//   console.log(arrayOfPrimeNumbers);
// };
// console.log(prime());

// console.log(arrayOfPrimeNumbers.join(" ||  "));
// console.log(arrayOfPrimeNumbers.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
