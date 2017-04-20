
var userCtrl = require("./user/user.controller");
var productsCtrl = require("./products/product.controller");
module.exports = function(app) {
    app.get("/user/register",userCtrl.getRegistrationPage);
    app.post("/user/register",userCtrl.registerUser);
    app.get("/products",productsCtrl.get);
    
}