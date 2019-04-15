var db = require("../models");

module.exports = function (app) {
    // Add juicy new Big Kahuna Burger to the db
    app.post("/api/burgers", (req, res) => {
        db.burgers.create({
            burger_name: req.body.name
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });
    // Devour the burger by setting devoured to true
    app.put("/api/burgers/:id", (req, res) => {
        db.burgers.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            }).then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Ressurrect the burger by setting devoured to false
    // app.put("/api/burgers/:id", (req, res) => {
    //     db.burgers.update({
    //         devoured: false
    //     }, {
    //             where: {
    //                 id: req.params.id
    //             }
    //         }).then(function (dbPost) {
    //             res.json(dbPost);
    //         });
    // });

    // Throw away the leavins
    app.delete("/api/authors/:id", function (req, res) {
        db.burgers.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

};