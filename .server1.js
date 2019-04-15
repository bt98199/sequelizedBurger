var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
// End Dependencies ▲▲▲▲ ---- Start configuration ▼▼▼▼
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var PORT = process.env.PORT || 8889;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
var routes = require('./controllers/burgers_controller.js');
app.use(routes); // Could we have API routing as well?  Maybe someone wants to make a call to find what burgers are in queue? -- I used a way to do it, maybe not the best, but it works
// SQL stuff
app.listen(PORT, () => { console.log('Server listening on http://localhost:' + PORT) });
// SQL connection found in ./config/connection.js

