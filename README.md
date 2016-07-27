# freeman-env
Simple NPM wrapper for code that is only meant to be run in production/development.

This module tests the environment variable `NODE_ENV` - made popular by Express and other Node modules.

# installation
```
npm install freeman-env --save
```
# usage
```
process.env.NODE_ENV = "production";

var env = require('freeman-env');

//callback mode - run a code block only in certain environments
env('production', function(){
  console.log("This will only run in production.");
});

env('development', function(){
  console.log("This will only run in dev mode.");
});

//raw mode - simple getter for process.env.NODE_ENV
//use this for switch statements and more...
env(); //this will return 'production'

switch(env()){
  case "production":
    ...
  break;
  case "test":
    ...
  break;
  ...
}
```

# notes
If you don't have process.env.NODE_ENV defined, nothing will happen.

You can define process.env.NODE_ENV to any string value and test against it. Here are some ideas: `staging`, `test`, `development`, etc.
