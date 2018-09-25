// A common object for accessing config values
// Gets included automatically because of its name index.js

const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        //mongodb://<dbuser>:<dbpassword>@ds113703.mlab.com:13703/bankaccounts
        // return 'YOUR_MONGO_URL';
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds113703.mlab.com:13703/bankaccounts';
    },


};
