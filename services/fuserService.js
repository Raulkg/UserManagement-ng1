!function(){"use strict";function e(e,r,n){function t(){var e=n.defer();return e.resolve(a()),e.promise}function s(e){var t=n.defer(),s=r("filter")(a(),{id:e}),i=s.length?s[0]:null;return t.resolve(i),t.promise}function i(e){var t=n.defer(),s=r("filter")(a(),{username:e}),i=s.length?s[0]:null;return t.resolve(i),t.promise}function o(r){var t=n.defer();return e(function(){i(r.username).then(function(e){if(null!==e)t.reject({success:!1,message:'Username "'+r.username+'" is already taken'});else{var n=a(),s=n[n.length-1]||{id:0};r.id=s.id+1,n.push(r),f(n),t.resolve({success:!0})}})},1e3),t.promise}function u(e){for(var r=n.defer(),t=a(),s=0;s<t.length;s++)if(t[s].id===e.id){t[s]=e;break}return f(t),r.resolve(),r.promise}function l(e){for(var r=n.defer(),t=a(),s=0;s<t.length;s++){var i=t[s];if(i.id===e){t.splice(s,1);break}}return f(t),r.resolve(),r.promise}function a(){return localStorage.users||(localStorage.users=JSON.stringify([])),JSON.parse(localStorage.users)}function f(e){localStorage.users=JSON.stringify(e)}var c={};return c.GetAll=t,c.GetById=s,c.GetByUsername=i,c.Create=o,c.Update=u,c.Delete=l,c.getUsers=a,c}angular.module("myApp").factory("UserService",e),e.$inject=["$timeout","$filter","$q"]}();