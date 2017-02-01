(function () {
    'use strict';
 
    angular
        .module('myApp')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$state',  '$window','AuthenticationService' , 'UserService'];
    function LoginController($state,  $window, AuthenticationService,UserService) {
        var vm = this;
 
        vm.login = login;
 
        (function initController() {
        
            AuthenticationService.ClearCredentials();

            var admin = {username:'Admin',password:'Tiger123#'};
                    UserService.Create(admin);
                 
        })();
 
        function login() {
            vm.dataLoading = true;
          
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
             
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    
                    $state.go('home');
                } else {
                    // FlashService.Error(response.message);
                       console.log(response.message);
                         $state.go('auth');
                    vm.dataLoading = false;
                }
            });
        }
    }
 
})();

