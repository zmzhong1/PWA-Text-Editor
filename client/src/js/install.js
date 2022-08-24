const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (e) => {
  window.deferredPrompt = e;
  installButton.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("Click registered");
  const eventStart = window.deferredPrompt;
  if (!eventStart) {
    return;
  }
  eventStart.prompt();
  window.deferredPrompt = null;
  installButton.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
