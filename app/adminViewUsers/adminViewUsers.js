(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('AdminViewUserController', AdminViewUserController);
 
    AdminViewUserController.$inject = ['$state', '$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function AdminViewUserController($state, $scope,$rootScope, AuthenticationService,UserService) {
 	

 
  
    $scope.currentPage = 0;
    $scope.pageSize = 3;
		$scope.user = null;

       $scope.data1 = UserService.getUsers().slice(1);
           $scope.numberOfPages=function(){
        return Math.ceil(UserService.getUsers().length/$scope.pageSize);                
    };
    




        loadCurrentUser();

 
     function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                     	$scope.user = user.username;
                });
        }
    

    }


   angular
        .module('myApp').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});


 
} )();