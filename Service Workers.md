footer: Fagkveld Webstep Fokus 12. mai 2016

# [fit] _**Service**_
# [fit] _**Workers**_

![](./images/excavator.jpg)

---

# [fit] *Registering*
## [fit] and *installing*

---

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    // Registration was successful
    console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
  }).catch(err => {
    // registration failed :(
    console.log(`ServiceWorker registration failed: ${err}`);
  });
}
```

---

# [fit] Life*cycle*

---

1. Download
2. *Install*
3. *Activate*

---

# Install-hooks

```javascript
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    fetchStuffAndInitDatabases()
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    schemaMigrationAndCleanup()
  )
});
```

---

# Neste reload

Service Workeren har kontroll over siden

`navigator.serviceWorker.controller`

---

# Oppdateringer?

1. Sjekk for oppdateringer i bakgrunnen
2. Ved byte-endring, installer
3. Den gamle versjonen kjører til *alle faner* er lukket

---

# [fit] *Push*

![](./images/push.jpg)

---

Meldinger sendes til en __web app__ fra en __applikasjonsserver__

Meldingene mottas av __aktiv service worker__

---

```javascript
navigator.serviceWorker.register('serviceworker.js')
  .then(swRegistration => {
    swRegistration.pushManager.subscribe()
      .then(pushSubscription => {
        console.log(pushSubscription.endpoint);
        console.log(pushSubscription.getKey('p256dh'));
        console.log(pushSubscription.getKey('auth'));
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      });
  });
```
---

```javascript

self.onpush = function(event) {
  console.log(event.data);
}
```

---

```javascript
import webPush from 'web-push';
const apiKey = 'GCM_API_KEY';
const endpoint = 'received from client';
webPush.setGCMAPIKey(apiKey);
export function sendNotification(message) {
  webPush.sendNotification(endpoint, {
    TTL: 600, // seconds to retry,
    payload: message
  });
}

```

---

# [fit] *Geo*
# [fit] *fencing*

![](./images/earth.jpg)

---

> A geofence is said to be breached if the current geographical location changed from being inside the geographic region to outside, or vice versa.

---

```javascript
navigator.serviceWorker.register('service-worker.js')
  .then(swRegistration => {
    const region = new CircularGeofenceRegion({
      name: 'myfence', latitude: 37.421999, longitude: -122.084015, radius: 1000
    });
    const options = { includePosition: true };
    swRegistration.geofencing.add(region, options)
      .then(
        geofence => console.log(geofence.id),
        error => console.log(error)
      );
  });
```

---

- `ongeofenceenter`
- `ongeofenceleave`
- `ongeofenceerror`

---

```javascript
self.ongeofenceenter = (event) => {
  console.log(event.geofence.region.name);
  console.log(event.position);

  // If this is not a geofence of interest anymore, remove it.
  if (event.geofence.region.name !== "myfence") {
    event.waitUntil(event.geofence.remove());
  }
};
```

---

# [fit] *Time*

![](./images/time.jpg)

---

Vekker service worker til live på et gitt tidspunkt

*Kommer senere*


---

### postMessage

### sw-precache

### sw-toolbox

---

[https://serviceworke.rs]()

[http://w3c.github.io/push-api]()

[http://w3c.github.io/geofencing-api]()
