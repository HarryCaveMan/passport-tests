const path = require('path');
module.exports = (app) => {
     const jwt = require('jsonwebtoken');
     auth = require('../.auth/auth.js');
     app.use('/auth', auth);
     
    app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname+'../../../test.html'));
});
};