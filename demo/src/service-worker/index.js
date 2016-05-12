//importScripts('secondscript.js');

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('activated');
});

console.log('Listen for push');
self.addEventListener('push', event => {
  const title = 'Push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message',
      //icon: 'images/icon.png',
      tag: 'my-tag'
    }));
});