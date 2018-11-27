/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-775dfa8030f77130c567.js"
  },
  {
    "url": "app.3f15fff3534527b8ea89.css"
  },
  {
    "url": "app-527e8115c41f72567c52.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a8dd87b6cb56446206aa.js"
  },
  {
    "url": "index.html",
    "revision": "4bfcaaaecb3df328c45bd7dd9044b0c8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dd3752575325a15223e3d0b6fd2a2c8a"
  },
  {
    "url": "0.b96dca86d27577010ba2.css"
  },
  {
    "url": "0-000914a2e2e8112e8bae.js"
  },
  {
    "url": "component---src-pages-index-js-7d13f673f3360bca183b.js"
  },
  {
    "url": "1-1a4b5c7f6de5a6dcdffd.js"
  },
  {
    "url": "static/d/612/path---index-6a9-vvsVW8BBqqVHVS8W4rc0eX6eZ0k.json",
    "revision": "07fd09a4e5fda987a01100190edbd6bb"
  },
  {
    "url": "component---src-pages-404-js-0087e3b78190cf81f5ae.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});