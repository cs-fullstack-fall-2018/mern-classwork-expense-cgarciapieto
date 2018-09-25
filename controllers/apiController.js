// We first need to load our mongoose data model
const Mongos = require('../model/MongoModel');

// Include body parser
const bodyParser = require('body-parser'); // In node_modules

module.exports = function (app) {

    app.use(bodyParser.json()); // Use body parser middleware
    app.use(bodyParser.urlencoded({extended: true})); // Parse out any JSON from body and handle URL encoded data

    //  Add a method to get all todos for a particular User (uname)
    app.get('/api/account/:uname', function (req, res) {

        // ROUTE: GET a user's list of todos
        Mongos.find({username: req.params.uname}, function (err, todos) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(todos);
        });

    });

    app.get('/api/getall', function (req, res) {

        // ROUTE: GET a user's list of todos
        Mongos.find({}, function (err, balance) { //Use the find method on the data model to search DB
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send the JSON back to the client in the web response
            res.send(balance);
        });

    });




    // ROUTE: POST (create) a new Todo item to my list
    app.post('/api/account', function (req, res) {
        const newTodo =
            mongos({
                username: req.body.username,
                balance: req.body.balance,

            });

        newTodo.save(function (reyError) {
            if (reyError) {
                throw reyError; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'Ok'});
        });

    });

    // ROUTE: UPDATE and existing item
    app.put('/api/account', function (req, res) {

        Todos.findOneAndUpdate(req.body.id, {
            username: req.body.username,
            balance: req.body.balance,
            //  hasAttachment: req.body.hasAttachment
        }, function (err, account) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        });
    });

    // ROUTE: DELETE an existing todo item by its ID
    app.delete('/api/account', function (req, res) {

        //console.log(req.body);
        Todos.findByIdAndRemove(req.body.id, function (err) {
            if (err) {
                throw err; // If we get an error then bail
            }
            // Use Express to send a simple SUCCESS message
            res.json({result: 'OK'});
        })

    });

};