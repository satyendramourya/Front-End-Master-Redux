// console.log("hey there!");

// let me = "";
// for (let i = 0; i < 10; i++) {
//   me = me + "lol ";
// }
// console.log(me);

// const timesToRepeat = 100;
// const character = "🐩";

// let word = ""; // start with an empty string
// for (let i = 0; i < timesToRepeat; i++) {
//   word = word + character;
// }

// function greetings(name) {
//   console.log(`Hello ${name}!`);
// }

// const greetings = (name) => {
//   console.log(`Hello ${name}!`);
// };

// greetings("Sara arrow function");

// const greetings = function (name) {
//   console.log(`Hello ${name}!`);
// };

// greetings("Sara function expression");

const me = {
  name: {
    first: "Niraj",
    last: "Mourya",
  },
  location: {
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
  },
  details() {
    return `I am ${this.name.first} ${this.name.last} from ${this.location.city}, ${this.location.state}, ${this.location.country}. \nNice to meet you! `;
  },
};

console.log(me.details());
const pulleddata = me.details();
console.log(pulleddata);
