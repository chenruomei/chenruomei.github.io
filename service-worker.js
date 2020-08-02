/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/web_qian/md/hexo_boke/public/2020/08/01/hello-world/index.html","0acbf3743642add39c84c866326cf66b"],["F:/web_qian/md/hexo_boke/public/2020/08/02/text2/index.html","36ee3f8e5df17b66cc8cc2df6b180db5"],["F:/web_qian/md/hexo_boke/public/archives/2020/08/index.html","223a6ec5881a2a89e7aabecda5e8177f"],["F:/web_qian/md/hexo_boke/public/archives/2020/index.html","74d4fbbd2fa6bf1a5b5acb80061c9e1d"],["F:/web_qian/md/hexo_boke/public/archives/index.html","05bb8008dfebb84a6d70973d449fb68d"],["F:/web_qian/md/hexo_boke/public/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["F:/web_qian/md/hexo_boke/public/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["F:/web_qian/md/hexo_boke/public/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["F:/web_qian/md/hexo_boke/public/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["F:/web_qian/md/hexo_boke/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["F:/web_qian/md/hexo_boke/public/css/index.css","24004e7664d44a15e4eb75a36480b9f3"],["F:/web_qian/md/hexo_boke/public/css/style.css","e67a267d2af2a8b53715207a13c08176"],["F:/web_qian/md/hexo_boke/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/web_qian/md/hexo_boke/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["F:/web_qian/md/hexo_boke/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["F:/web_qian/md/hexo_boke/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["F:/web_qian/md/hexo_boke/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["F:/web_qian/md/hexo_boke/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["F:/web_qian/md/hexo_boke/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["F:/web_qian/md/hexo_boke/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["F:/web_qian/md/hexo_boke/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["F:/web_qian/md/hexo_boke/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["F:/web_qian/md/hexo_boke/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["F:/web_qian/md/hexo_boke/public/img/04.jpg","5608f2c81375afdc117adadcd11c8cf3"],["F:/web_qian/md/hexo_boke/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/web_qian/md/hexo_boke/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/web_qian/md/hexo_boke/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/web_qian/md/hexo_boke/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/web_qian/md/hexo_boke/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/web_qian/md/hexo_boke/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/web_qian/md/hexo_boke/public/index.html","0fdcbb0825ea89a1da23bcee8e7373c4"],["F:/web_qian/md/hexo_boke/public/js/main.js","125fa8cc0f50b559881e6b0be97b3db2"],["F:/web_qian/md/hexo_boke/public/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["F:/web_qian/md/hexo_boke/public/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["F:/web_qian/md/hexo_boke/public/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["F:/web_qian/md/hexo_boke/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["F:/web_qian/md/hexo_boke/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["F:/web_qian/md/hexo_boke/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["F:/web_qian/md/hexo_boke/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["F:/web_qian/md/hexo_boke/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["F:/web_qian/md/hexo_boke/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/web_qian/md/hexo_boke/public/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["F:/web_qian/md/hexo_boke/public/js/tw_cn.js","0176913a28754a766910352489a24a69"],["F:/web_qian/md/hexo_boke/public/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["F:/web_qian/md/hexo_boke/public/text1/index.html","9114d510f15fded4a2a6cdf3e0723a45"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







