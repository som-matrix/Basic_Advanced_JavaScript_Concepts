// Optional chaning
const users = [
  {
    name: "Satya",
    occupation: "Frontend Developer",
    sayName() {
      console.log(`My name is ${this.name}`);
    },
    address: {
      Odisha: "Home",
    },
  },
  {
    name: "Mark Zuckerberg",
  },
  {
    name: "Gobienan",
  },
];
const secondUser = users[1];
// The old way
const theAdress = secondUser?.address?.Odisha;

console.log(theAdress);
