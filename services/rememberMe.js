!function(){"use strict";function e(e,r,a,i,n){function o(e){for(var r=document.cookie.split("; "),a=0;a<r.length;a++){var i=r[a].split("=");if(e===i[0]){var n="";try{n=angular.fromJson(i[1])}catch(e){n=unescape(i[1])}return t.decode(n)}}}function c(e,r){if(1===arguments.length)return o(e);var a=e+"=";if("object"==typeof r){var i="";if(a+="object"==typeof r.value?angular.toJson(r.value)+";":r.value+";",r.expires){var n=new Date;n.setTime(n.getTime()+24*r.expires*60*60*1e3),i=n.toGMTString()}a+=r.session?"":"expires="+i+";",a+=r.path?"path="+r.path+";":"",a+=r.secure?"secure;":""}else a+=t.encode(r)+";";document.cookie=a}var h={};return h.eget=o,h.eset=c,h}angular.module("myApp").factory("rememberMeService",e),e.$inject=["$http","$cookies","$rootScope","$timeout","UserService"];var t={keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,a,i,n,o="",c="",h="",s=0;do t=e.charCodeAt(s++),r=e.charCodeAt(s++),c=e.charCodeAt(s++),a=t>>2,i=(3&t)<<4|r>>4,n=(15&r)<<2|c>>6,h=63&c,isNaN(r)?n=h=64:isNaN(c)&&(h=64),o=o+this.keyStr.charAt(a)+this.keyStr.charAt(i)+this.keyStr.charAt(n)+this.keyStr.charAt(h),t=r=c="",a=i=n=h="";while(s<e.length);return o},decode:function(e){var t,r,a,i,n,o="",c="",h="",s=0,d=/[^A-Za-z0-9\+\/\=]/g;d.exec(e)&&window.alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do a=this.keyStr.indexOf(e.charAt(s++)),i=this.keyStr.indexOf(e.charAt(s++)),n=this.keyStr.indexOf(e.charAt(s++)),h=this.keyStr.indexOf(e.charAt(s++)),t=a<<2|i>>4,r=(15&i)<<4|n>>2,c=(3&n)<<6|h,o+=String.fromCharCode(t),64!=n&&(o+=String.fromCharCode(r)),64!=h&&(o+=String.fromCharCode(c)),t=r=c="",a=i=n=h="";while(s<e.length);return o}}}();