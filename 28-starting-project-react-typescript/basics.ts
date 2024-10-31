// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 25;

let userName: string;
userName = "Matic";

let isStudent: boolean = false;
isStudent = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking", "Chess", "Programming"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Matic",
  age: 25,
};

let people: Person[];

people = [
  {
    name: "Matic",
    age: 25,
  },
];

// Type inference

let course: string | number = "React - The Complete Guide";
course = 15215;

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
stringArray[0].split("");
