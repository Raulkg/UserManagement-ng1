!function(){"use strict";function e(e,n,o,t,i,s,r,d){"undefined"!=typeof d.get("userId")&&e.go("auth"),t.user=d.get("userId"),t.formInfo={},t.msg1=null,"Admin"===d.get("userId")?(t.data=[{name:"Add Users",link:".adminAddUser"},{name:"View Users",link:".adminViewUsers"}],e.go("home.adminAddUser")):(t.data=[{name:"My Profile",link:".oview"}],e.go("home.oview")),t.signOut=function(){d.unset("userId")}}angular.module("myApp").controller("HomeController",e),e.$inject=["$state","$stateParams","$timeout","$rootScope","$scope","AuthenticationService","UserService","SessionService"]}();