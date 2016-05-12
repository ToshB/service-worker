if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
      // Registration was successful
      console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
      return registration.pushManager.getSubscription()
        .then(subscription => {
          if (subscription) {
            return subscription;
          }
          return registration.pushManager.subscribe({userVisibleOnly: true});
        })
    })
    .then(subscription => {
      console.log(subscription);
    })
    .catch(err => {
      // registration failed :(
      console.log(`ServiceWorker registration failed: ${err}`);
    });
}
