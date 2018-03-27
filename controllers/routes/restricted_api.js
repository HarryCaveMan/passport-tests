const passport = require('passport');
const user = require('../.auth/user');
require('../.auth/passport');

module.exports = (app) => {	
    app.use('/user', passport.authenticate('jwt', {session: false}), user);   
	   
};

