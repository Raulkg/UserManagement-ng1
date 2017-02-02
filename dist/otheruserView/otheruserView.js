(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('OtherUserController', OtherUserController);

    OtherUserController.$inject = ['$state', '$rootScope', '$scope', 'AuthenticationService', 'UserService'];

    function OtherUserController($state, $scope, $rootScope, AuthenticationService, UserService) {





        $scope.usero = null;

        $scope.msg = null;





        loadCurrentUser();


        function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function(user) {
                    $scope.usero = user;
                });
        }




        $scope.updateUser = function() {

            var nwuser = {
                id: $scope.usero.id,
                username: $scope.usero.username,
                password: $scope.usero.password,
                firstname: $scope.usero.firstname,
                lastname: $scope.usero.lastname
            };

            UserService.Update(nwuser);

            $scope.msg = "Updated completed!";
        };



    }






})();