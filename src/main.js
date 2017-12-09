var angular = require('angular');
var uirouter = require('@uirouter/angularjs');


// import your routes config
var appRoutes = require('./app/routes');

angular.module('ita-app', [
  'ui.router'
])
  .config(appRoutes)
;