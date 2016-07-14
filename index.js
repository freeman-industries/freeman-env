//freeman-env
//usage:
//var env = require('freeman-env');
//env('production', function(){ //production only code here });
//env() //returns current NODE_ENV
module.exports = function(desired_environment, callback){
    if(!desired_environment && !callback){
        //get node_env
        return process.env.NODE_ENV;
    } else if(desired_environment && !callback || !desired_environment && callback){
        throw new Error("freeman-env: Please supply both arguments.");
        return;
    } else if(process.env.NODE_ENV === desired_environment) {
        callback();
        return;
    }
}
