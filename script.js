'use strict';

// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.
// Objects are mutable: They are addressed by reference, not by value.

const gaurav = {
  firstName: 'Gaurav',
  lastName: 'jaiswal',
  age: 2024 - 1998,
  job: 'programmer',
  friends: ['Andrew', 'Neo', 'Triumph', 'Tristan'],
};
console.log(gaurav, typeof gaurav);

// Accessing JavaScript Properties
console.log(gaurav.friends);
console.log(gaurav['friends']);
// const interestedIn = prompt('what do you want to know about Gaurav?');
// console.log(gaurav[interestedIn]);

// Adding New Properties
gaurav.location = 'Ghaziabad';
gaurav['instaId'] = 'xyz123';
console.log(gaurav['location']);
console.log(gaurav.instaId);

// Deleting Properties
delete gaurav.age;
delete gaurav['lastName'];
console.log(gaurav);

console.log(
  `${gaurav.firstName} has ${gaurav.friends.length} friends and his best friend is ${gaurav['friends'][0]}.`
);

const gaurav1 = {
  firstName: 'Gaurav',
  lastName: 'jaiswal',
  birthYear: 1998,
  job: 'programmer',
  friends: ['Andrew', 'Neo', 'Triumph', 'Tristan'],
  hasDriversLicense: false,

  calcAge() {
    // console.log(this);
    this.age = 2024 - this.birthYear; // it's like adding new properties
    return this.age;
  },

  getSummary() {
    this.summary = `${this.firstName} is a ${this['calcAge']()} years old ${
      gaurav1.job
    } and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`;
    return this.summary;
  },
};
// gaurav1.calcAge();
gaurav1['calcAge']();
console.log(gaurav1.age);

gaurav1.getSummary();
console.log(gaurav1.summary);
