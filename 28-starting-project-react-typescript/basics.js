// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 25;
var userName;
userName = "Matic";
var isStudent = false;
isStudent = true;
// More complex types
var hobbies;
hobbies = ["Sports", "Cooking", "Chess", "Programming"];
var person;
person = {
    name: "Matic",
    age: 25,
};
var people;
people = [
    {
        name: "Matic",
        age: 25,
    },
];
// Type inference
var course = "React - The Complete Guide";
course = 15215;
// Functions & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    return __spreadArray([value], array, true);
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(["a", "b", "c"], "d");
stringArray[0].split("");
