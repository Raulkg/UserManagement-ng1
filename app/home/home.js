(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('HomeController', HomeController);
 
    HomeController.$inject = ['$state','$stateParams', '$timeout','$rootScope', '$scope','AuthenticationService' , 'UserService','SessionService'];
    function HomeController($state,$stateParams,$timeout,$scope,$rootScope, AuthenticationService,UserService,SessionService) {
 	

if(typeof SessionService.get("userId") !== "undefined")
       $state.go('auth'); 
 

		$scope.user = SessionService.get("userId");
        $scope.formInfo = {};
   
     $scope.msg1 = null;
   if(  SessionService.get("userId") === 'Admin'){
    $scope.data = [{"name":'Add Users',"link":'.adminAddUser'}, {"name":'View Users',"link":'.adminViewUsers'}];
     $state.go('home.adminAddUser'); 
  }
  else{
    $scope.data = [{"name":'My Profile',"link":'.oview'}];
  
  $state.go('home.oview'); 
}

$scope.signOut = function() {
     SessionService.unset("userId");
    };




    

    }
 
} )();




