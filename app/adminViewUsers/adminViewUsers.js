(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('AdminViewUserController', AdminViewUserController);
 
    AdminViewUserController.$inject = ['$state', '$rootScope', '$scope','AuthenticationService' , 'UserService'];
    function AdminViewUserController($state, $scope,$rootScope, AuthenticationService,UserService) {
 	

 
  
    $scope.currentPage = 0;
    $scope.pageSize = 3;


       $scope.data1 = UserService.getUsers().slice(1);
           $scope.numberOfPages=function(){
        return Math.ceil(UserService.getUsers().length/$scope.pageSize);                
    };
    



    

    }


   angular
        .module('myApp').filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});


 
} )();