
(function () {
    'use strict';

        angular
        .module('myApp')
        .factory('rememberMeService', rememberMeService);


     rememberMeService.$inject = ['$http', '$cookies', '$rootScope', '$timeout', 'UserService'];
    function rememberMeService($http, $cookies, $rootScope, $timeout, UserService) {

      var service = {};
 
        service.eget = eget;
        service.eset = eset;

        return service;



      function eget(name){
           var gCookieVal = document.cookie.split("; ");
           for (var i = 0; i < gCookieVal.length; i++) {
               // a name/value pair (a crumb) is separated by an equal sign
               var gCrumb = gCookieVal[i].split("=");
               if (name === gCrumb[0]) {
                   var value = '';
                   try {
                       value = angular.fromJson(gCrumb[1]);
                   } catch (e) {
                       value = unescape(gCrumb[1]);
                   }
                   return Base64.decode(value);
               }
           }
           // a cookie with the requested name does not exist
 
       }



        function eset(name, values) {
          // name = 
           if (arguments.length === 1) return eget(name);
           var cookie = name + '=';
           if (typeof values === 'object') {
               var expires = '';
               cookie += (typeof values.value === 'object') ? angular.toJson(values.value) + ';' : values.value + ';';
               if (values.expires) {
                   var date = new Date();
                   date.setTime(date.getTime() + (values.expires * 24 * 60 * 60 * 1000));
                   expires = date.toGMTString();
               }
               cookie += (!values.session) ? 'expires=' + expires + ';' : '';
               cookie += (values.path) ? 'path=' + values.path + ';' : '';
               cookie += (values.secure) ? 'secure;' : '';
           } else {
               cookie += Base64.encode(values) + ';';
           }
           document.cookie = cookie;


      
       }



   }  



    var Base64 = {
 
        keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
 
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
 
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
 
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
 
                output = output +
                    this.keyStr.charAt(enc1) +
                    this.keyStr.charAt(enc2) +
                    this.keyStr.charAt(enc3) +
                    this.keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
 
            return output;
        },


 
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;
 
            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
            do {
                enc1 = this.keyStr.indexOf(input.charAt(i++));
                enc2 = this.keyStr.indexOf(input.charAt(i++));
                enc3 = this.keyStr.indexOf(input.charAt(i++));
                enc4 = this.keyStr.indexOf(input.charAt(i++));
 
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
 
                output = output + String.fromCharCode(chr1);
 
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
 
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
 
            } while (i < input.length);
 
            return output;
        }
    };


})();