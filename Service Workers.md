footer: Fagkveld Webstep Fokus 12. mai 2016

# [fit] _**Service**_
# [fit] _**Workers**_

![](./images/excavator.jpg)

---

<<<<<<< HEAD
# [fit] *Registering*
## [fit] and *installing*

---

=======
# [fit] *Registrering*
## [fit] og *installering*

---

# Installering
>>>>>>> update
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

<<<<<<< HEAD
# [fit] Life*cycle*

---
=======
# Serviceworker *Lifecycle*
>>>>>>> update

1. Download
2. *Install*
3. *Activate*

---

# Install-hooks

```javascript
<<<<<<< HEAD
self.addEventListener('install', function(event) {
  // Perform install steps
=======
self.addEventListener('install', event => {
  // this happens while the old version is still in control
>>>>>>> update
  event.waitUntil(
    fetchStuffAndInitDatabases()
  );
});

<<<<<<< HEAD
self.addEventListener('activate', function(event) {
  event.waitUntil(
    schemaMigrationAndCleanup()
  )
=======
self.addEventListener('activate', event => {
  // the old version is gone now, do what you couldn't
  // do while it was still around
  event.waitUntil(
    schemaMigrationAndCleanup()
  );
>>>>>>> update
});
```

---

<<<<<<< HEAD
# Neste reload

Service Workeren har kontroll over siden

`navigator.serviceWorker.controller`

---

# Oppdateringer?

1. Sjekk for oppdateringer i bakgrunnen
2. Ved byte-endring, installer
3. Den gamle versjonen kjører til *alle faner* er lukket
=======
# Oppdatering av serviceworkers

1. Sjekker for oppdateringer i bakgrunnen
2. Ved byte-endring, installer ny versjon
3. Den gamle versjonen kjører til *alle faner* er lukket
4. Ved reload har den nye serviceworkeren kontroll

---

# WorkerGlobalScope

- `self`
- `importScripts()`
- `caches`
- `onoffline`/`ononline`
>>>>>>> update

---

# [fit] *Push*

![](./images/push.jpg)

---

Meldinger sendes til en __web app__ fra en __applikasjonsserver__

<<<<<<< HEAD
Meldingene mottas av __aktiv service worker__
=======
Meldingene mottas av __aktiv serviceworker__
>>>>>>> update

---

```javascript
navigator.serviceWorker.register('serviceworker.js')
  .then(swRegistration => {
    swRegistration.pushManager.subscribe()
      .then(pushSubscription => {
        console.log(pushSubscription.endpoint);
        console.log(pushSubscription.getKey('p256dh'));
        console.log(pushSubscription.getKey('auth'));
<<<<<<< HEAD
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      });
  });
```
=======
      });
  });
```

(fra nettsiden)

>>>>>>> update
---

```javascript

self.onpush = function(event) {
  console.log(event.data);
}
```

<<<<<<< HEAD
=======
(i serviceworkeren)

>>>>>>> update
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

<<<<<<< HEAD
=======
(fra serveren)

>>>>>>> update
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

<<<<<<< HEAD
=======
(fra nettsiden)

>>>>>>> update
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

<<<<<<< HEAD
=======
(i serviceworkeren)

>>>>>>> update
---

# [fit] *Time*

![](./images/time.jpg)

---

<<<<<<< HEAD
Vekker service worker til live på et gitt tidspunkt

*Kommer senere*
=======
Vekker serviceworkeren til live ved gitt tidspunkt

_Kommer antakeligvis senere_
>>>>>>> update


---

<<<<<<< HEAD
### postMessage

### sw-precache

### sw-toolbox
=======
# [fit] *Andre*
# [fit] *Verktøy*

![](./images/tool.jpg)

---

# sw-precache

Nodemodul for generering av serviceworker som precacher gitte ressurser.

```sh
sw-precache \
  --root=public \
  --static-file-globs='public/**/*.{html,jpg,js,css}'
```

---

# sw-toolbox

Verktøy for hjelp med bl.a. routing, runtime caching, custom fallback, oppdatering av cachede ressurser

```javascript
toolbox.router.get(':foo/index.html', (request, values) => {
  return new Response(`Handled a request for ${request.url}, where foo is ${values.foo}`);
});
```
>>>>>>> update

---

[https://serviceworke.rs]()

[http://w3c.github.io/push-api]()

[http://w3c.github.io/geofencing-api]()
