function getFullName(skill1, skill2) {
	return `${this.firstName} ${this.lastName} - ${skill1}, ${skill2}`;
}

getFullName.bind = bind;

// TODO: use constructor function to create objects
const user1 = {
	firstName: 'Serhii',
	lastName: 'Khrapin'
};
const user2 = {
	firstName: 'Petro',
	lastName: 'Petrenko'
};

function bind(context, ...stack) {
	// Create a new object and set 'context' parameter as its __proto__ 
	let user = Object.create(context);

	// Add to that object 'fn' method equals to 'this' (getFullName function)
	user.fn = this;

	// Return a function that will be invoked later (line 33, 34)
	return function() {
		return user.fn(...stack);
	}
}

const getUser1FullName = getFullName.bind(user1, 'JS', 'Unit testing');
const getUser2FullName = getFullName.bind(user2, 'PHP', 'Yii');

const user1FullName = getUser1FullName(); // return an invoke result - user1.getFullName('JS', 'Unit testing')
const user2FullName = getUser2FullName(); // return an invoke result - user2.getFullName('PHP', 'Yii')

console.log(user1FullName);
console.log(user2FullName);