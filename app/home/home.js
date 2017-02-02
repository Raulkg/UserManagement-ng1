(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('HomeController', HomeController);
 
    HomeController.$inject = ['$state','$stateParams', '$timeout','$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function HomeController($state,$stateParams,$timeout,$scope,$rootScope, AuthenticationService,UserService) {
 	

 
 

		$scope.user = $stateParams.obj;
        $scope.formInfo = {};
        loadCurrentUser();
     $scope.msg1 = null;
   if(  $scope.user === 'Admin'){
    $scope.data = [{"name":'Add Users',"link":'.adminAddUser'}, {"name":'View Users',"link":'.adminViewUsers'}];
     $state.go('home.adminAddUser'); 
  }
  else{
    $scope.data = [{"name":'My Profile',"link":'.oview'}];
  
  $state.go('home.oview'); 
}

     function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                     	$scope.user = user.username;
                });
        }


    

    }
 
} )();




