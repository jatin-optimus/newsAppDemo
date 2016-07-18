(function() {
  'use strict';

  angular
    .module('innovaccerTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('newsSearch', {
        url: '/newsSearch',
        templateUrl: 'app/newsSearch/newsSearch.html',
        controller: 'NewsController',
        controllerAs: 'news'
      });

    $urlRouterProvider.otherwise('/home');
  }

})();
