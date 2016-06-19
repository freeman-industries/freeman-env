# freeman-env
Simple NPM wrapper for code that is only meant to be run in production/development.

# installation
```
npm install freeman-env --save
```
# usage
```
var env = require('freeman-env');

env.production(function(){
  console.log("This will only run in production.");
});

env.development(function(){
  console.log("This will only run in dev mode.");
});
```

# notes
If you don't have process.env defined, nothing will happen.

If you have process.env defined to something other than `production` or `development`, nothing will happen.
