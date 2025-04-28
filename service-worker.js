// Definir a versão do cache
const CACHE_NAME = 'blog-do-vakeiro-cache-v1';

// Arquivos que queremos armazenar em cache
const filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/protecao.js',
    '/painel-admin.html',
    '/login.js',
    '/email-alert.js',
    '/admin-panel.js',
    '/admin-panel.html',
    '/admin-dashboard.js',
];

// Instalar o service worker e armazenar arquivos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Arquivos em cache');
                return cache.addAll(filesToCache);
            })
    );
});

// Ativar o service worker e limpar caches antigos
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Buscar os arquivos do cache ou da rede
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Se o arquivo estiver no cache, retorna ele
                if (cachedResponse) {
                    return cachedResponse;
                }

                // Caso contrário, vai para a rede buscar o arquivo
                return fetch(event.request);
            })
    );
});
