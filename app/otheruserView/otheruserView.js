(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('OtherUserController', OtherUserController);
 
    OtherUserController.$inject = ['$state', '$rootScope', '$scope','AuthenticationService' , 'UserService','SessionService'];
    function OtherUserController($state, $scope,$rootScope, AuthenticationService,UserService,SessionService) {
 	

 
 

		$scope.usero = null;

     $scope.msg = null;
    




        loadCurrentUser();

 console.log("reched");
     function loadCurrentUser() {



            UserService.GetByUsername(SessionService.get("userId") )
                .then(function (user) {
                     	$scope.usero = user;
                });
        }




        $scope.updateUser = function (){

            var nwuser = { id:  $scope.usero.id  ,username: $scope.usero.username , password : $scope.usero.password ,firstname: $scope.usero.firstname,lastname: $scope.usero.lastname};

            UserService.Update(nwuser);      

            $scope.msg = "Updated completed!";
        };

    

    }





 
} )();