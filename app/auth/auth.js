(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$state', '$scope','$cookies','$window','AuthenticationService' , 'UserService','rememberMeService','SessionService'];
    function LoginController($state,  $scope, $cookies,$window, AuthenticationService,UserService,rememberMeService, SessionService) {

        $scope.error = null;
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
        
            AuthenticationService.ClearCredentials();

            var admin = {username:'Admin',password:'Tiger123#'};
                    UserService.Create(admin);

    if (rememberMeService.eget('7ZXYZ@L') && rememberMeService.eget('UU@#90')) {
       vm.username = rememberMeService.eget('7ZXYZ@L');
         vm.password= rememberMeService.eget('UU@#90');

    } 
                 
        })();



 
        function login() {
            vm.dataLoading = true;

                    if (vm.remember) {
 
            rememberMeService.eset('7ZXYZ@L',vm.username);
            rememberMeService.eset('UU@#90',  vm.password);
        } 


          
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
             
                    AuthenticationService.SetCredentials(vm.username, vm.password);
   
                    $state.go('home',{obj:vm.username});
                    SessionService.set("userId", vm.username);
 
                } else {
                 
                       $scope.error= 'Try Again! '+response.message;
                         $state.go('auth');
                    vm.dataLoading = false;
                }
            });
        }
    }
 
})();

