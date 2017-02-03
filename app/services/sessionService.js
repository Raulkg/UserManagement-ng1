(function () {
    'use strict';
 
    angular
        .module('myApp')
        .factory('SessionService', SessionService);

               SessionService.$inject = ['$window'];
function SessionService($window) {

    var localStorage = $window.localStorage;
    var service = {};
    service.get = get;
    service.set = set;
    service.unset = unset;

    return service;


    function get(key) {
        return localStorage.getItem(key);
    }

    function set(key, value) {
        localStorage.setItem(key, value);
    }

  function unset(key) {
        localStorage.removeItem(key);
    }
}

})();