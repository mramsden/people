const faker = require('faker');

let people = [];

function *generatePeople(count) {
	for (let i = 0; i < count; i++) {
		yield { 
			firstName: faker.name.firstName(), 
			lastName: faker.name.lastName(),
			avatar: faker.image.avatar()
		};
	}
}

/**
 * Seed the people database
 *
 * @param {number} count The number of people to put in the database,
 *                       defaults to 100.
 * @returns {Promise} Resolves once the seed operation has been completed.
 */
module.exports.seed = function seed(count = 100) {
	return new Promise((resolve) => {
		people = [...generatePeople(count)].reduce((people, person) => {
			people.push(person);
			return people;
		}, []);
		resolve();
	});
};

/**
 * Retrieve all people in the database
 *
 * @returns {Promise<Array<Person>>} Resolves with a list of people
 */
module.exports.allPeople = function () {
	return new Promise(resolve => {
		resolve(people);
	});
};

