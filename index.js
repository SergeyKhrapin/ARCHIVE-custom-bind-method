function getFullName() {
	return `${this.firstName} ${this.lastName}`;
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

function bind(context) {
	let user = Object.create(context);
	user.fn = this;
	return function() {
		return user.fn();
	}
}

const getUser1FullName = getFullName.bind(user1);
const getUser2FullName = getFullName.bind(user2);

const user1FullName = getUser1FullName();
const user2FullName = getUser2FullName();

console.log(user1FullName);
console.log(user2FullName);