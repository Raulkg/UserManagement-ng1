!function(){"use strict";function e(e,r,n,s,o,a,t){function i(){u.dataLoading=!0,u.remember&&(t.eset("7ZXYZ@L",u.username),t.eset("UU@#90",u.password)),o.Login(u.username,u.password,function(n){n.success?(o.SetCredentials(u.username,u.password),e.go("home",{obj:u.username})):(r.error="Try Again! "+n.message,e.go("auth"),u.dataLoading=!1)})}r.error=null;var u=this;u.login=i,function(){o.ClearCredentials();var e={username:"Admin",password:"Tiger123#"};a.Create(e),t.eget("7ZXYZ@L")&&t.eget("UU@#90")&&(u.username=t.eget("7ZXYZ@L"),u.password=t.eget("UU@#90"))}()}angular.module("myApp").controller("LoginController",e),e.$inject=["$state","$scope","$cookies","$window","AuthenticationService","UserService","rememberMeService"]}();