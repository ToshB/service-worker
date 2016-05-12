(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ' + registration.scope);
    return registration.pushManager.getSubscription().then(function (subscription) {
      if (subscription) {
        return subscription;
      }
      return registration.pushManager.subscribe({ userVisibleOnly: true });
    });
  }).then(function (subscription) {
    const url = subscription.endpoint.match(/[^/]/$)
    console.log(subscription.endpoint);
  }).catch(function (err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ' + err);
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjL3BhZ2UvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksbUJBQW1CLFNBQXZCLEVBQWtDO0FBQ2hDLFlBQVUsYUFBVixDQUF3QixRQUF4QixDQUFpQyxvQkFBakMsRUFBdUQsSUFBdkQsQ0FBNEQsd0JBQWdCOztBQUV4RSxZQUFRLEdBQVIsd0RBQWlFLGFBQWEsS0FBOUU7QUFDQSxXQUFPLGFBQWEsV0FBYixDQUF5QixlQUF6QixHQUNKLElBREksQ0FDQyx3QkFBZ0I7QUFDcEIsVUFBSSxZQUFKLEVBQWtCO0FBQ2hCLGVBQU8sWUFBUDtBQUNEO0FBQ0QsYUFBTyxhQUFhLFdBQWIsQ0FBeUIsU0FBekIsQ0FBbUMsRUFBQyxpQkFBaUIsSUFBbEIsRUFBbkMsQ0FBUDtBQUNELEtBTkksQ0FBUDtBQU9ELEdBVkgsRUFXRyxJQVhILENBV1Esd0JBQWdCO0FBQ3BCLFlBQVEsR0FBUixDQUFZLFlBQVo7QUFDRCxHQWJILEVBY0csS0FkSCxDQWNTLGVBQU87O0FBRVosWUFBUSxHQUFSLHlDQUFrRCxHQUFsRDtBQUNELEdBakJIO0FBa0JEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc2VydmljZS13b3JrZXIuanMnKS50aGVuKHJlZ2lzdHJhdGlvbiA9PiB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICR7cmVnaXN0cmF0aW9uLnNjb3BlfWApO1xuICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAudGhlbihzdWJzY3JpcHRpb24gPT4ge1xuICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHt1c2VyVmlzaWJsZU9ubHk6IHRydWV9KTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKHN1YnNjcmlwdGlvbiA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhzdWJzY3JpcHRpb24pO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZyhgU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAke2Vycn1gKTtcbiAgICB9KTtcbn1cbiJdfQ==
