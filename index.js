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

	function option_1() {
		return user.fn(...stack);
	}

	function option_2(...args) {
		return user.fn(...args);
	}

	return stack.length ? option_1 : option_2;
}

const getUser1FullName = getFullName.bind(user1); // option 1
const getUser2FullName = getFullName.bind(user2, 'PHP', 'Yii'); // option 2

const user1FullName = getUser1FullName('JS', 'Unit testing');
const user2FullName = getUser2FullName();

console.log(user1FullName);
console.log(user2FullName);