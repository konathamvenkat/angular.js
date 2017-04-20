const express = require("express");
const bodyParser = require("body-parser");
module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.set('view engine', 'ejs');
    
    app.get("/",function(req,res){
        res.send("helloi am default route");
        
    });
    //configure routes in routes.js
    //call the routes.js file and pass express as parameter.
    var routes = require("../app/routes.js");
    routes(app);
    return app;
}


