module.exports = function (app) {

    const customers = require('../controller/customers.controller.js');

    // Create a new customer
    app.post('/api/customer/create', customers.create);

    // Retrieve all customers
    app.get('/api/customers', customers.findAll);

    // Retrieve a single customer by Id
    app.get('/api/customer/:customerId', customers.findById);

    // Update a customer with Id
    app.put('/api/customer/edit/:customerId', customers.update);

    // Delete a customers with Id
    app.delete('/api/customer/:customerId', customers.delete);
}