var userCtrl  = {};
userCtrl.getRegistrationPage = function(req,res){

    var pageName = "Register Page";
    res.render("register",{title:pageName});
};
userCtrl.registerUser = function(req,res){
    console.log(req.body);
    res.send("thank you");
    
};
module.exports = userCtrl;
