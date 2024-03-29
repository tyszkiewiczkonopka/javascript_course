import { faker } from "@faker-js/faker";

console.log(faker.internet.emoji())
console.log(faker.person.firstName())
console.log(faker.person.lastName())

// TASK

import { expect } from "chai";

expect("Such a wonderful day!").to.be.equal("Such a wonderful day!")
console.log('Module was imported! Congratulations!')