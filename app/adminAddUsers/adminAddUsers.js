(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('adminAddUserController', adminAddUserController);
 
    adminAddUserController.$inject = ['$state', '$timeout','$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function adminAddUserController($state,$timeout,$scope,$rootScope, AuthenticationService,UserService) {
 	

 
    
		$scope.user = null;
        $scope.formInfo = {};
        loadCurrentUser();
     $scope.msg1 = null;
        

     function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                     	$scope.user = user.username;
                });
        }


        $scope.addUser = function (){


         

            var nwuser = {username: $scope.formInfo.usrid , password : $scope.formInfo.pwd ,firstname: $scope.formInfo.fn,lastname: $scope.formInfo.ln};

          UserService.Create(nwuser).then(    
    function(thing) {     // On success
      $timeout(function () {
             $state.transitionTo("home.adminViewUsers",{},{reload:true});
  }, 1000);

    },
    function(message) {   // On failure
        // $scope.msg = message.message;
         $scope.msg1  = message.message;
    }
);

        

        };
    

    }
 
} )();




