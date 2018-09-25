// We first need to load our mongoose data model
const Mongos = require('../models/todoModel');

module.exports = function(app) {
    // Add an API endpoint with some dummy data
    app.get('/api/setupaccount', function(req, res) {

        // seed database
        const starterTodos = [
            {
                username: 'claire11',
                balance: '500'
            },

        ];

        // Use the mongo method create to create records fopr the test data. err will hold any errors after create
        // and results will show records created.
        Todos.create(starterTodos, function(err, results) {
            // Lets us confirm that the seed data added via mongoose without any errors
            res.send(results);
        });
    });

};