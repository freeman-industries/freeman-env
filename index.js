//freeman-env
//usage:
//var env = require('freeman-env');
//env.production(function(){ //production only code here });
module.exports = {
    development: function(callback){
        if(process.env.NODE_ENV === "development"){
            callback();
        }
    },

    production: function(callback){
        if(process.env.NODE_ENV === "production"){
            callback();
        }
    }
}
