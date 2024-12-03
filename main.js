// ## Task 1 - Declaring Objects

const myHouse = {
  stories: 2,
  parking: false,
  bedrooms: 2,
  garden: true,
  "energy efficiency rating": "D",
};

const myCar = {
  colour: "red",
  wheels: 4,
  "power steering": true,
  seats: 2,
  milesPerGallon: 20,
};

const myFavouriteFilm = {
  title: "The Dark Knight",
  released: 2008,
  leadActor: "Christian Bale",
};

// ## Task 2 - Reading values

let person = {
  name: "Ben",
  likesChocolate: false,
};

console.log(person.likesChocolate);

if (person.likesChocolate === true) {
  console.log(`${person.name} loves chocolate`);
} else {
  console.log(`${person.name} hates chocolate`);
}

// ## Task 3 - Bracket Notation

let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases["smallTalk"]);
console.log(bensPhrases[desiredPleasantry]);

// ## Task 4 - Reassigning Properties

let me = {
  firstName: "Holly",
  lastName: "Berry",
  isBootcamper: false,
};

me.isBootcamper = true;
console.log(me.isBootcamper);

// ## Task 5 - Nested Objects

let communication = {
  success: true,
  payload: {
    message: {
      text: "Please send biscuits!",
      priority: "urgent",
    },
  },
};

const comText = communication.payload.message.text;
console.log(comText);

// We wouldn't want to let something urgent slip by, fix caps lock panic!
let priorityStatus =
  communication["payload"]["message"]["priority"].toUpperCase();
if (priorityStatus === "URGENT") {
  console.log(priorityStatus);
}

// ## Task 6 - Get Experimental

// 👉 Explore objects more. For example, you could...

// - Create multi-layered nested objects, and access properties at different layers.

const layered = {
  layer1: {
    layer2: {
      layer3a: "Jiminy Cricket",
      layer3b: "Pinocchio",
      layer3c: ["blue fairy", "donkey", "child Snatcher"],
    },
  },
};

console.log(layered.layer1.layer2.layer3c[1]);
console.log(layered["layer1"]["layer2"]["layer3b"]);
console.log(layered.layer1["layer2"].layer3a);
console.log(layered.layer1.layer2.layer3c);
console.log(layered.layer1.layer2);

// - Create functions that take in information and use that information to create or change objects. For example, you could make a function that took in someone's name and age and return an object for that person with those details as properties.

const createObject = () => {
  const person = {};
  person.name = prompt(`What's your name? `);
  person.age = prompt(`How old are you? `);
  alert(`Heya ${person.name}, ${person.age} is a good year.`);
  return person;
};
console.log(createObject());

const testObject = {
  name: "Rolf",
  level: "BEST EVER",
  status: "Horribly missed, majorly loved.",
  likes: [
    "prawns",
    "scampery things",
    "fluffy-type things",
    "stinks",
    "leather",
  ],
};

for (const qualities in testObject) {
  console.log(testObject[qualities]);
}

for (let item in testObject) {
  testObject[item] = "QQ";
}
console.table(testObject);

function Tree(name, height, leafColour) {
  this.name = name;
  this.height = height;
  this.leafColour = leafColour;
}

const birch = new Tree("birch", "8 feet", "light green");

console.log(birch);

birch.barkColour = "white and brown";
console.log(birch);

function Height(height, unit) {
  this.height = height;
  this.unit = unit;
}

let birchHeight = new Height(8, "feet");
const newBirch = new Tree("birch", birchHeight, "light green");

console.log(birchHeight);
console.table(newBirch);

// - Look online in documentation (for example, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) or [W3Schools](https://www.w3schools.com/js/js_objects.asp)) about objects in JavaScript. Can you find anything new or surprising?
