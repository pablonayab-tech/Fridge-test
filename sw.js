self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = { title: 'Nevera', body: 'Aviso' };
  try { d = e.data.json(); } catch (_) {}
  e.waitUntil(self.registration.showNotification(d.title, { body: d.body, icon: 'icon.png' }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('./'));
});
