const app = require('express')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const db = require('./models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



require('./controllers/routes/open_api.js')(app);
require('./controllers/routes/restricted_api.js')(app);

db.sequelize.sync({force:true}).then(function() {
  require('./seeders/users.js');
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


