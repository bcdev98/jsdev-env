// t his file isn't transpiled, so must use CommonJS and ES5

// register babel to transpile before our tests run
require('babel-register')();

// dislable webpack featgures that Mocha doesn't understand
require.extensions['.css'] = function() {};

