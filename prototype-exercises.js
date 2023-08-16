// ----- Prototype1 ----- //

// String.prototype.trm = function () {
//   let stringStarted = false;
//   let res = "";

//   for (let i = 0; i < this.length; i++) {
//     let pos = this[i].charCodeAt();
//     if (!stringStarted && pos == 32) {
//       continue;
//     } else if (!stringStarted) {
//       stringStarted = true;
//     }
//     res += this[i];
//   }

//   return res;
// };

// let str = "   Azamat - an aspiring software engineer    ";

// console.log(str.trm());

// ----- Prototype2 ----- //

// let str = "Azamat - an aspiring software engineer";

// String.prototype.upperCase = function () {
//   let res = "";
//   for (let el of this) {
//     let pos = el.charCodeAt(0);
//     if (pos >= 97 && pos <= 122 ) {
//       res += String.fromCharCode(pos - 32);
//     } else {
//       res += el;
//     }
//   }
//   return res;
// }

// console.log(str.upperCase());

// ----- Prototype3 ----- //

// let str = "Azamat - an aspiring software engineer";

// String.prototype.has = function (input) {
//   for (let i = 0; i < this.length; i++) {
//     if (this.slice(i, i + input.length) === input) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(str.has("oftwar"));

// ----- Prototype4 ----- //

// let str = "Azamat - an aspiring software engineer";

// String.prototype.cut = function (a, b = this.length) {
//   let newStr = "";
//   for (let i = a; i < b; i++) {
//     newStr += this[i];
//   }

//   return newStr;
// }

// console.log(str.cut(1, 5));

// ----- Prototype5 ----- //

// let str = "Azamat - an aspiring software engineer";

// String.prototype.rpt = function (n) {
//   for (let i = 1; i <= n; i++ ) {
//     console.log(this.toString());
//   }
// }

// str.rpt(2);

// ----- Prototype6 ----- //

// let int = 123.45253463;

// Number.prototype.fixed = function (n) {
//   let arr = this.toString().split(".");
//   let newArr = [];
//   let intInt = arr[0];
//   let decimalInt = arr[1];
//   for (let i = 0; i < n; i++) {
//     newArr.push(decimalInt[i]);
//   }
//   let res = newArr.join("");
//   return +(intInt.concat(".", res));
// }

// console.log(int.fixed(3));

// ----- Prototype7 ----- //

// let n = 452.52;

// Number.prototype.round = function () {
//   let arr = n.toString().split(".");
//   let int = arr[0];
//   let dcm = arr[1];
//   if (dcm[0] >= 5) {
//     int++;
//   } else {
//     int;
//   }

//   return int;
// }

// console.log(n.round());

// ----- Prototype8 ----- //

// let number = 9;

// Number.prototype.square = function () {
//   let check = this ** (1 / 2);
//   if (check % 1 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(number.square());

// ----- Prototype9 ----- //

// let n = 582;

// Number.prototype.count = function () {
//   let str = this.toString();
//   return str.length;
// }

// console.log(n.count());

// ----- Prototype10 ----- //

// let n = 5822;

// Number.prototype.sum = function () {
//   let str = String(this);
//   let plus = 0;
//   for (let el of str) {
//     plus += +el;
//   }
//   return plus;
// }

// console.log(n.sum());

// ----- Prototype11 ----- //

// let arr = [3, 6, 2, 8, 4, 9]

// Array.prototype.customMap = function () {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     let value = callback(el, i, arr);
//     result.push(value);
//   }
//   return result;
// };

// console.log(arr.customMap());

// ----- Prototype12 ----- //

// let arr = [8, 6, 1, 8, 10, 9];

// function isBigger(element, index, array) {
//   return element > 4;
// }

// Array.prototype.customEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     let element = this[i];
//     if (!callback(element)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(arr.customEvery(isBigger));

// ----- Prototype13 ----- //

// let arr = [8, 6, 1, 8, 10, 9];

// Array.prototype.customReduce = function (acc = 0, el, i, arr) {
//   let sum = acc;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }

//   return sum;
// };

// console.log(arr.customReduce());



// ----- Prototype14 ----- //


// let arr = [5, 12, 8, 12, 130, 44];

// Array.prototype.customFindIndex = function (input) {
//   for (let i = 0; i < this.length; i++) {
//     if (input) {
//       return this.indexOf(+input);
//     }
//   }
// }

// console.log(arr.customFindIndex("12"));


// ----- Prototype15 ----- //

// let arr = [5, 12, 8, 14, 130, 44];

// Array.prototype.customSplice = function (start, count, replacement) {
//   for (let i = start + 1; i < start + 1 + count; i++) {
//     this[i] = replacement;
//   }
//   return this;
// }

// console.log(arr.customSplice(1, 2, 0));


// ----- Prototype16 ----- //

// function Animal(name, speed, age) {
//   this.name = name;
//   this.speed = speed;
//   this.age = age;
//   if (!new.target) {
//     return new Animal(name, speed, age);
//   }

// }

// Animal.prototype.getInfo = function () {
//     return `${this.name} is ${this.age} years old and can run at the speed of ${this.speed} k/h`
//   }

// let animal1 = Animal("Teddy", 80, 20);

// console.log(animal1);

// console.log(animal1.getInfo());


// ----- Prototype17 ----- //


// function Student(name, course, level, university) {
//   this.name = name;
//   this.course = course;
//   this.level = level;
//   this.university = university;
//   if (!new.target) {
//     return new Student(name, course, level, university)
//   }
// }

// Student.prototype.leftYears = function () {
//   return `Graduation: ${4 - level} years later`
// } 

// let student1 = Student("Azamat", "Undergraduate", 2, "WIUT");

// console.log(student1);
// console.log(student1.leftYears());



// ----- Prototype18 ----- //

// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
//   if (!new.target) {
//     return new Person(name, age, currentYear);
//   }
// }

// Person.prototype.getBirthYear = function () {
//   let birthYear = this.currentYear - this.age;
//   return `${birthYear} year`;
// }

// let person1 = Person("Azamat", 20, 2023);
// console.log(person1);
// console.log(person1.getBirthYear());


// ----- Prototype19 ----- //

// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
//   if (!new.target) {
//     return new Employee(name, salary, workName);
//   }
// }

// Employee.prototype.increasedSalary = function (percent) {
//   return salary + (salary / 100 * percent);
// }

// let worker1 = Employee("John", 3000, "KPMG");
// console.log(worker1);
// console.log(worker1.increasedSalary(50));


// ----- Prototype20 ----- //

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   if (!new.target) {
//     return new Rectangle(width, height)
//   }
// }

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// }

// Rectangle.prototype.getPerimeter = function () {
//   return 2 * (this.width + this.height);
// };

// let rct1 = Rectangle(20, 30);
// console.log(rct1);
// console.log(rct1.getArea());
// console.log(rct1.getPerimeter());