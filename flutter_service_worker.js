'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "258eae6d540db199bea8236b07d360b1",
"favicon.ico": "96d476813ac0ae420dc3cbccad68b31d",
"index.html": "88ea57623bdb55d9d328daf31c6a1d99",
"/": "88ea57623bdb55d9d328daf31c6a1d99",
"apple-icon.png": "a32aa2b08972bfa8b5146cdb5251e762",
"apple-icon-144x144.png": "c36674f5cf23ec9d086c3ec2deb9c98e",
"android-icon-192x192.png": "aae347d1bb79890c298d2cdd7d16f242",
"apple-icon-precomposed.png": "a32aa2b08972bfa8b5146cdb5251e762",
"apple-icon-114x114.png": "37762abf4fc35c50e0fd6d361fef7de7",
"main.dart.js": "fb7e7312cb954fe7b347ada49be8a9b0",
"ms-icon-310x310.png": "5fd6228983f319f31f310f3a67c547c0",
"ms-icon-144x144.png": "c36674f5cf23ec9d086c3ec2deb9c98e",
"apple-icon-57x57.png": "d71a349c84454acd04008bdbc6241585",
"apple-icon-152x152.png": "f2096149282c43e71d3ea62e358e710b",
"ms-icon-150x150.png": "42681666a29c4a405b3021b9ade308cc",
"android-icon-72x72.png": "c4559f54af96c4aa3d56e42e14ce1864",
"android-icon-96x96.png": "830b40cbc7cf43273eebb256481043f5",
"android-icon-36x36.png": "47f781d76f8fec30a6da4d3d38283c18",
"apple-icon-180x180.png": "9c802e4d01edd8de1e39c1be461799dd",
"favicon-96x96.png": "830b40cbc7cf43273eebb256481043f5",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"android-icon-48x48.png": "c37ddd7975fa193443bdb8605dc003ad",
"apple-icon-76x76.png": "bdd66b41bac84f8f6aa4be83699ccfa6",
"apple-icon-60x60.png": "db4b3f0f651912a8c19a25459bbc1af3",
"assets/AssetManifest.json": "ee503b2bd93604127c128a601e60fc58",
"assets/NOTICES": "83855df640a4d7dd372e8cce103b8c3f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/albums_other.json": "c436fc9d3d6c2791e04d555733aa945e",
"assets/assets/bible_esv_albums.json": "1fcd4b91f115f39caed27c3f9dbdbc0a",
"assets/assets/albums_ly_otg.json": "049587083218b7bb06b05d17ba84d001",
"assets/assets/banner.jpg": "632d5eed6854d77989b4d8f8d9275ede",
"assets/assets/dp_all_songs.json": "f3208fde49ad54091078365d04a1fbc9",
"assets/assets/bible_verse.json": "049f4784daf0c27e860b4cfd3184debc",
"assets/assets/bible_chapter.json": "b1ad6b03b65c2f8f627e029fac039b3f",
"assets/assets/bible_book.json": "7da8cb1133e28c3c3282c29c4b1d8516",
"assets/assets/bible_haomuren_albums.json": "f83fd10ec4d5183a2cc4552871e041bd",
"assets/assets/artistCategory.json": "edffe69723f2c29285e1b0a8afb6ce4f",
"assets/assets/albums_zdfj.json": "6fd308a099ff5a974f6610005e7bd666",
"assets/assets/albumCategory.json": "02a20648fd5cd69ab2cde668dec40529",
"assets/assets/bible_esv_songs.json": "310fe6ea5b9fcce4f66c93e3072e520f",
"assets/assets/bible_haomuren_songs.json": "0bd644856c5745e9b830c06b6211efa0",
"assets/assets/albums_hmr_otg.json": "7c1290c97eba94e6aa711c3e8812ab85",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "c36674f5cf23ec9d086c3ec2deb9c98e",
"apple-icon-72x72.png": "c4559f54af96c4aa3d56e42e14ce1864",
"apple-icon-120x120.png": "2e993f256dd0c13d97f95114a8beba19",
"favicon-32x32.png": "25aa0557172f497ed5417d12f63a3bde",
"ms-icon-70x70.png": "39fb6857d870cb8d5f260dc6de1db211"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
