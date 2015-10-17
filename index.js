angular.module('routingExperiments', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
    .state('home', {
    templateUrl: '/views/home_views/home.html',
    url: "/home"
    })
    .state('home.test1', {
      url: '/test1',
      templateUrl: '/views/home_views/test1.html'
    })
    .state('home.test2', {
      url: '/test2',
      templateUrl: '/views/home_views/test2.html'
    })
    .state('about', {
      url: "/about",
      templateUrl: '/views/about_views/about.html'
    })
    .state('abstractExperiment', {
      abstract: true,
      url: '',//has to be an empty string. in spite of stackoverflow q. *scowl* not sure why here and not in plunker test
      templateUrl: '/views/abstracted_views/abstractExperiment.html'
    })
    .state('abstractExperiment.test1', {
      url: '/abstractTest1',
      views: {
      '': {templateUrl: '/views/abstracted_views/abstractTest1.html'},//this is the grand-daddy template for the the entire state here!! weird syntax, but it is what it is.
      'yourMomIsSwell@abstractExperiment.test1' : {templateUrl: "/views/abstracted_views/swell.html"},//the @'s are needed here and below
      'steakDinner@abstractExperiment.test1' : {template: "<ul><li>and grills a mean steak</li></ul>"}//they indicate absolute (as opposed to relative) view names
      }
    })
    .state('abstractExperiment.test2', {
      url: '/abstractTest2',
      templateUrl: '/views/abstracted_views/abstractTest2.html'
    })
    .state('alternative', {//same as above, but without the abstract state.
      url: '/alternative',
      views: {
        '': {templateUrl: '/views/alternative_views/alternative.html'},
        'relative1@alternative': {
          templateUrl: '/views/alternative_views/view1.html',
        },
        'relative2@alternative': {
          templateUrl: '/views/alternative_views/view2.html',
        }
      }
    });

  $urlRouterProvider.otherwise("/home");

});
