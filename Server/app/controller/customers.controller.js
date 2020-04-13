const db = require('../config/db.config.js');
const Customers = db.customers;

// Post a customer
exports.create = (req, res) => {
	// Save customer to MySQL database
	Customers.create({
		id: req.body.id,
		name: req.body.name,
		age: req.body.age,
		gender: req.body.gender,
		address1: req.body.address1,
		address2: req.body.address2,
		address3: req.body.address3
	}).then(customer => {
		// Send created customer to client
		res.send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Fetch all customers
exports.findAll = (req, res) => {
	Customers.findAll().then(customers => {
		// Send all customers to Client
		res.send(customers);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Find a Customer by Id
exports.findById = (req, res) => {
	Customers.findById(req.params.customerId).then(customer => {
		res.send(customer);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Update a customer
exports.update = (req, res) => {
	var customer = req.body;
	const id = req.params.customerId;
	Customers.update({
		title: req.body.title,
		author: req.body.author,
		description: req.body.description,
		published: req.body.published
	},
		{
			where: {
				id: req.params.customerId
			}
		})
		.then(() => {
			res.status(200).send(customer);
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		})
};

// Delete a customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customers.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).send('Customer has been deleted!');
	}).catch(err => {
		res.status(500).send("Fail to delete!");
	});
};