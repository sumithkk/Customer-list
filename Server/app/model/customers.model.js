module.exports = (sequelize, Sequelize) => {
	let Customer = sequelize.define('customers', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		age: {
			type: Sequelize.STRING
		},
		gender: {
			type: Sequelize.STRING
		},
		address1: {
			type: Sequelize.STRING
		},
		address2: {
			type: Sequelize.STRING
		},
		address3: {
			type: Sequelize.STRING
		}
	});

	var data = [{
		id: 1,
		name: "Sumith kk",
		age: "30",
		gender: "male",
		address1: "Old No.11, New No 25, 13th Cross Vinayaka Nagar, Bangalore, Karnataka",
		address2: "Door No 14, 4th Cross Jeevan bheema Nagar, Bangalore, Karnataka",
		address3: "#18, 5th Cross, B-Block, Murugesh palya Nagar, Bangalore, Karnataka"
	}, {
		id: 2,
		name: "Neha Singh",
		age: "28",
		gender: "female",
		address1: "Old No.15, New No 25, 13th Cross Vinayaka Nagar, Bangalore, Karnataka",
		address2: "#18, 5th Cross, B-Block, Murugesh palya Nagar, Bangalore, Karnataka",
		address3: "Door No 14, 4th Cross Jeevan bheema Nagar, Bangalore, Karnataka",
	}, {
		id: 3,
		name: "Akash",
		age: "27",
		gender: "male",
		address1: "Door No 14, 4th Cross Jeevan bheema Nagar, Bangalore, Karnataka",
		address2: "Old No.15, New No 25, 13th Cross Vinayaka Nagar, Bangalore, Karnataka",
		address3: "#18, 5th Cross, B-Block, Murugesh palya Nagar, Bangalore, Karnataka"
	}]


	sequelize.sync({ force: true }).then(() => {
		Customer.bulkCreate(data, { validate: true }).then(() => {
			console.log('**** Customers created Successfully ****');
		}).catch((err) => {
			console.log('**** Failed to create Customers ****');
			console.log(err);
		})
	});

	return Customer;

}