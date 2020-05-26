'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fa444c3c10772326900dad9737052d7b",
"/": "fa444c3c10772326900dad9737052d7b",
"main.dart.js": "af14f8cc3c6515e3d6bad0bbd92cfc87",
"assets/LICENSE": "a5a6725571d4216f43a2d8a945490a25",
"assets/AssetManifest.json": "70d7555dcd595f42211f3f9cb0a8f910",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/albums_other.json": "c436fc9d3d6c2791e04d555733aa945e",
"assets/assets/bible_esv_albums.json": "1fcd4b91f115f39caed27c3f9dbdbc0a",
"assets/assets/albums_ly_otg.json": "049587083218b7bb06b05d17ba84d001",
"assets/assets/banner.jpg": "632d5eed6854d77989b4d8f8d9275ede",
"assets/assets/artist.json": "c9858b76f937a8257c1e453d55f2a66d",
"assets/assets/dp_all_songs.json": "f3208fde49ad54091078365d04a1fbc9",
"assets/assets/bible_verse.json": "049f4784daf0c27e860b4cfd3184debc",
"assets/assets/bible_chapter.json": "b1ad6b03b65c2f8f627e029fac039b3f",
"assets/assets/bible_book.json": "7da8cb1133e28c3c3282c29c4b1d8516",
"assets/assets/bible_haomuren_albums.json": "f83fd10ec4d5183a2cc4552871e041bd",
"assets/assets/artistCategory.json": "edffe69723f2c29285e1b0a8afb6ce4f",
"assets/assets/albums_zdfj.json": "6fd308a099ff5a974f6610005e7bd666",
"assets/assets/albumCategory.json": "31856697b301ea97942747fe44b979a0",
"assets/assets/bible_esv_songs.json": "310fe6ea5b9fcce4f66c93e3072e520f",
"assets/assets/bible_haomuren_songs.json": "0bd644856c5745e9b830c06b6211efa0",
"assets/assets/albums_hmr_otg.json": "7c1290c97eba94e6aa711c3e8812ab85"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
