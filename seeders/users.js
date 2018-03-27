const db = require('../models');

module.exports = db.User.create({
        user_name:'user',
        email:'user@email.com',
        password:'123456'
    });