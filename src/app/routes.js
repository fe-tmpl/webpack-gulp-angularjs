module.exports = function ($stateProvider) {
  $stateProvider
    .state({
      name: 'default',
      url: '',
      template: ' <h3>Hello ITA</h3>'
    })
    .state({
      name: 'home',
      url: '/',
      template: ' <h3>Hello ITA</h3>'
    })
    .state({
      name: 'about',
      url: '/about',
      template: '<h3>About: This is an ITA Application</h3>'
    });
};