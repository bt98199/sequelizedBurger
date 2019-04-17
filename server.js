// Dependencies
const express = require('express');
const app = express();
const db = require('./models');
const exphbs = require('express-handlebars');
// End Dependencies ▲▲▲▲ ---- Start configuration ▼▼▼▼
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// Require is used to tell the express node to route its calls here.  Note app has a lot of use statements above.  The main.handlebars file is set as the initilaization file, express is going to ues the URL entries to get data, that data will be in the form of json, and the static root of all of the activity is going to be ./public
require('./controllers/api')(app);
require('./controllers/html')(app);
// const PORT = process.env.PORT || process.argv[2] || <----This will be the heroku sequelize adjustmnet
const PORT = process.env.PORT || 8888;
// Syncing our sequelize models and then starting our Express app
// Why do we need the force property here?=======
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log('Server listening on http://localhost:' + PORT);
    });
});

// hi there
