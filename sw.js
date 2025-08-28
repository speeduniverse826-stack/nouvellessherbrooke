// Service Worker for Sherbrooke Breaking News
const CACHE_NAME = 'sherbrooke-news-v1';
const urlsToCache = [
    '/',
    '/index-optimized.html',
    '/news-data.json',
    '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch Event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                return response || fetch(event.request);
            }
        )
    );
});

// Push Notification
self.addEventListener('push', function(event) {
    const options = {
        body: 'Nouvelles urgentes de Sherbrooke disponibles!',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🚨</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🚨</text></svg>',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'Voir les détails',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👁️</text></svg>'
            },
            {
                action: 'close',
                title: 'Fermer',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❌</text></svg>'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('🚨 Sherbrooke Alerte', options)
    );
});

// Background Sync
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        event.waitUntil(updateNewsData());
    }
});

// Update News Data
async function updateNewsData() {
    try {
        const response = await fetch('/news-data.json');
        const data = await response.json();
        
        // Store in cache
        const cache = await caches.open(CACHE_NAME);
        cache.put('/news-data.json', new Response(JSON.stringify(data)));
        
        console.log('News data updated in background');
    } catch (error) {
        console.error('Failed to update news data:', error);
    }
}