'use strict';
module.exports = function(app) {
    var users = require('../controllers/usersController');
    
    app.get('/users', users.get_users);
};