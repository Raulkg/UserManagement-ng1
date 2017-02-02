(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state', '$stateParams', '$timeout', '$rootScope', '$scope', 'AuthenticationService', 'UserService'];

    function HomeController($state, $stateParams, $timeout, $scope, $rootScope, AuthenticationService, UserService) {





        $scope.user = $stateParams.obj;
        $scope.formInfo = {};
        loadCurrentUser();
        $scope.msg1 = null;
        if ($scope.user === 'Admin') {
            $scope.data = [{
                "name": 'Add Users',
                "link": '.adminAddUser'
            }, {
                "name": 'View Users',
                "link": '.adminViewUsers'
            }];

        } else
            $scope.data = [{
                "name": 'My Profile',
                "link": '.oview'
            }];

        function loadCurrentUser() {



            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function(user) {
                    $scope.user = user.username;
                });
        }


        $scope.addUser = function() {




            var nwuser = {
                username: $scope.formInfo.usrid,
                password: $scope.formInfo.pwd,
                firstname: $scope.formInfo.fn,
                lastname: $scope.formInfo.ln
            };

            UserService.Create(nwuser).then(
                function(thing) { // On success
                    $timeout(function() {
                        $state.go("home.adminViewUsers", {}, {
                            reload: true
                        });
                    }, 1000);

                },
                function(message) { // On failure
                    // $scope.msg = message.message;
                    $scope.msg1 = message.message;
                }
            );



        };


    }

})();