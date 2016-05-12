(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//importScripts('secondscript.js');

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('activated');
});

console.log('Listen for push');
self.addEventListener('push', function (event) {
  var title = 'Push message';
  event.waitUntil(self.registration.showNotification(title, {
    body: 'The Message',
    //icon: 'images/icon.png',
    tag: 'my-tag'
  }));
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL3NlcnZpY2Utd29ya2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0VBLEtBQUssZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsaUJBQVM7QUFDeEMsT0FBSyxXQUFMO0FBQ0QsQ0FGRDs7QUFJQSxLQUFLLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDLGlCQUFTO0FBQ3pDLFVBQVEsR0FBUixDQUFZLFdBQVo7QUFDRCxDQUZEOztBQUlBLFFBQVEsR0FBUixDQUFZLGlCQUFaO0FBQ0EsS0FBSyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QixpQkFBUztBQUNyQyxNQUFNLFFBQVEsY0FBZDtBQUNBLFFBQU0sU0FBTixDQUNFLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBbkMsRUFBMEM7QUFDeEMsVUFBTSxhQURrQzs7QUFHeEMsU0FBSztBQUhtQyxHQUExQyxDQURGO0FBTUQsQ0FSRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL2ltcG9ydFNjcmlwdHMoJ3NlY29uZHNjcmlwdC5qcycpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG4gIHNlbGYuc2tpcFdhaXRpbmcoKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xuICBjb25zb2xlLmxvZygnYWN0aXZhdGVkJyk7XG59KTtcblxuY29uc29sZS5sb2coJ0xpc3RlbiBmb3IgcHVzaCcpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZXZlbnQgPT4ge1xuICBjb25zdCB0aXRsZSA9ICdQdXNoIG1lc3NhZ2UnO1xuICBldmVudC53YWl0VW50aWwoXG4gICAgc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih0aXRsZSwge1xuICAgICAgYm9keTogJ1RoZSBNZXNzYWdlJyxcbiAgICAgIC8vaWNvbjogJ2ltYWdlcy9pY29uLnBuZycsXG4gICAgICB0YWc6ICdteS10YWcnXG4gICAgfSkpO1xufSk7Il19
