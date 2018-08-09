// import { Teacher } from "./teacher";
import Teacher, { teach } from "./teacher";
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// console.log(i);

const person = {
  name: "sathish",
  walk: function() {
    console.log(this.name + " can walk!!");
  },
  talk: function() {
    console.log(this.name + " can talk!!");
  },
  thisObj() {
    console.log(this);
  }
};

person.talk();
person.name = "Suchithra";
person.walk();

const family = {
  wife: "Seethu",
  husband: "Sathish",
  careTaker() {
    console.log(this.wife + " can take care of " + this.husband);
  }
};

family.careTaker();

const thisObj = person.thisObj.bind(person);
person.thisObj();
thisObj();

// const square = function(number) {
//   return number * number;
// };

/* ARROW FUNCTION */
const square = number => number * number;
console.log(square(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

console.log(
  jobs.filter(function(job) {
    return job.isActive ? job.id : null;
  })
);

console.log(
  jobs.filter(function(job) {
    return job.isActive;
  })
);

console.log(jobs.filter(job => job.isActive));

console.log(jobs.filter(job => job.id));

/* ARROW FUNCTION AND this */
var person1 = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};
person1.talk();

//here, 'this' gives the window object whereas in the abvoe code this get its running scope
//() => function inherits the scope's this object but the function() { } - doesn't
person1 = {
  talk() {
    setTimeout(function() {
      console.log("this", this);
    }, 1000);
  }
};
person1.talk();

/*Array.map()*/

const colors = ["red", "blue", "green"];
var items = colors.map(function(color) {
  return "<li>" + color + "</li>";
});
console.log(items);
items = colors.map(color => {
  return "<li>" + color + "</li>";
});
console.log(items);

items = colors.map(color => `<li>${color}</li>`);
console.log(items);

/* object destructuring */

const address = {
  street: "3rd a main",
  city: "blore",
  country: "india"
};

// var street = address.street;
// var city = address.city;
// var country = address.country;

// console.log("STREET: " + street + ", CITY: " + city + ", COUNTRY: " + country);

var { street, city, country } = address;
console.log("STREET: " + street + ", CITY: " + city + ", COUNTRY: " + country);

//destructuring with alias
var { street: st, city: ct, country: ctry } = address;
console.log("STREET: " + st + ", CITY: " + ct + ", COUNTRY: " + ctry);

//spread operator

const honda = ["crv", "brv", "jazz"];
const tata = ["hexa", "tiago", "tigor"];

var cars = honda.concat(tata);

console.log(cars);
//with spread operator '...'

cars = [...honda, ...tata];
console.log(cars);

const indian = {
  tata: ["tiago", "hexa", "tigor"],
  mahindra: ["verito", "xuv"]
};
const japan = {
  honda: ["city", "crv", "brv"],
  toyota: ["yaris", "corolla", "camry"]
};

cars = { ...indian, hyundai: ["i10", "i20"], ...japan };
console.log(cars);

//Classes
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     return this.name + " can walk";
//   }
// }

// const seethu = new Person("seethu");
// console.log(seethu.walk());

// //inheritance

// class Teacher extends Person {
//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }
//   teach() {
//     console.log("teaching...");
//   }
// }

const teacher = new Teacher("sathish", "BTech");
teacher.walk();
teach();
