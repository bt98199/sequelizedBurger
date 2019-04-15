var db = require("../models");

module.exports = function (app) {

    //  Render the current burgers in queue and eaten
    app.get("/", (req, res) =>
        db.burgers.findAll().then(results => {
            var hbsArray = [];
            results.forEach(v => hbsArray.push(v.dataValues));
            console.log(hbsArray);
            res.render("index", { burger: hbsArray });
        }));

    // View the helpful burgers API
    app.get('/api/burgers', function (req, res) {
        console.log("Viewing current JSON API of burgers");
        db.burgers.findAll().then(results => {
            var hbsObject = {
                burgers: data
            };
            res.json(hbsObject);
        });
    });

};