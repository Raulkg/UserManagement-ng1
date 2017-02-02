'use strict';

// Declare app level module which depends on views, and components
var rApp =  angular.module('myApp', ['ngMaterial','ngCookies','ngAnimate','ngAria','ngMessages','ngAnimate','ui.router']);

rApp.config(function($stateProvider, $urlRouterProvider) {
 

 $urlRouterProvider.otherwise('/auth');


 $stateProvider

   
    .state('home', {
        url: '/home',

        templateUrl: 'home/home.html',
         controller: "HomeController",
           
             data: {
        requireLogin: true
      }
    });


 $stateProvider

   
    .state('home.adminViewUsers', {
        url: '/adminViewUsers',

        templateUrl: 'adminViewUsers/adminViewUsers.html',
         controller: "AdminViewUserController",
           
             data: {
        requireLogin: true
      }
    });

         $stateProvider.state('home.adminAddUser', {
        url: '/adminAddUser',

        templateUrl: 'adminAddUsers/adminAddUsers.html',
         controller: "adminAddUserController",
           
             data: {
        requireLogin: true
      }
    });
    



 $stateProvider

   
    .state('auth', {
        url: '/auth',
        templateUrl: 'auth/auth.html',
         controller: "LoginController",
 
             data: {
        requireLogin: false
      }
    });




$stateProvider

   
    .state('home.oview', {
        url: '/oview',
        templateUrl: 'otheruserView/otheruserView.html',
         controller: "OtherUserController",
 
             data: {
        requireLogin: true
      }
    });



});






angular.module("myApp").run(function ($rootScope, $state, AuthenticationService) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){

  

    if (toState.data.requireLogin && !AuthenticationService.isAuthenticated()){
      // User isn’t authenticated

      $state.transitionTo("auth");
      event.preventDefault(); 
    }

   

  });
});
