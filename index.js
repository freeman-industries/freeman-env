//freeman-env
//usage:
//var env = require('freeman-env');
//env.production(function(){ //production only code here });
module.exports = {
    get: function(){
        return process.env.NODE_ENV;
    },

    development: function(callback){
        if(process.env.NODE_ENV === "development"){
            callback();
        } else if(process.env.NODE_ENV === undefined){
            console.log("NOTE: freeman-env can't find any value for NODE_ENV.");
        }
    },

    staging: function(callback){
        if(process.env.NODE_ENV === "staging"){
            callback();
        } else if(process.env.NODE_ENV === undefined){
            console.log("NOTE: freeman-env can't find any value for NODE_ENV.");
        }
    },

    debug: function(callback){
        if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "staging"){
            callback();
        } else if(process.env.NODE_ENV === undefined){
            console.log("NOTE: freeman-env can't find any value for NODE_ENV.");
        }
    },

    production: function(callback){
        if(process.env.NODE_ENV === "production"){
            callback();
        } else if(process.env.NODE_ENV === undefined){
            console.log("NOTE: freeman-env can't find any value for NODE_ENV.");
        }
    }
}
