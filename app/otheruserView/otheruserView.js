(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('OtherUserController', OtherUserController);
 
    OtherUserController.$inject = ['$state', '$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function OtherUserController($state, $scope,$rootScope, AuthenticationService,UserService) {
 	

 
 

		$scope.user = null;

     $scope.msg = null;
    




        loadCurrentUser();

 
     function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                     	$scope.user = user;
                });
        }




        $scope.updateUser = function (){

            var nwuser = { id:  $scope.user.id  ,username: $scope.user.username , password : $scope.user.password ,firstname: $scope.user.firstname,lastname: $scope.user.lastname};

            UserService.Update(nwuser);      

            $scope.msg = "Updated completed!";
        };

    

    }





 
} )();