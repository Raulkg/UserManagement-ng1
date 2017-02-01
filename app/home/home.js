(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('HomeController', HomeController);
 
    HomeController.$inject = ['$state', '$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function HomeController($state, $scope,$rootScope, AuthenticationService,UserService) {
 	

 
    	$scope.data = [{"name":'Add Users',"link":'home'}, {"name":'View Users',"link":'adminViewUsers'}];
		$scope.user = null;
                $scope.formInfo = {};
        loadCurrentUser();

        

     function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                     	$scope.user = user.username;
                });
        }


        $scope.addUser = function (){

            var nwuser = {username: $scope.formInfo.usrid , password : $scope.formInfo.pwd ,firstname: $scope.formInfo.fn,lastname: $scope.formInfo.ln};

          UserService.Create(nwuser);      


        };
    

    }
 
} )();




