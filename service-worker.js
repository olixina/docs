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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf0508676241ce0b0a06af069e5b5be4"
  },
  {
    "url": "about/index.html",
    "revision": "32588691f36d34d2758b5b2e60c11206"
  },
  {
    "url": "assets/css/0.styles.3a89626e.css",
    "revision": "90e6d87f127928ede281bd1f7fbde6ac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f4114c4b.js",
    "revision": "e554bedb91fbca897fdaf56220839c70"
  },
  {
    "url": "assets/js/11.07b216f3.js",
    "revision": "63bab1ac17b673f8eec137cc5ac4727a"
  },
  {
    "url": "assets/js/12.68c8a7a0.js",
    "revision": "6db9e6e3ea5d87c3b506e1ff2183762b"
  },
  {
    "url": "assets/js/13.e70adc02.js",
    "revision": "da66c8e705b08e2541534f68f3cb5220"
  },
  {
    "url": "assets/js/14.cd9838bc.js",
    "revision": "6f722523a1f65d1dfc2f197c5cdc73ab"
  },
  {
    "url": "assets/js/15.03a60bbd.js",
    "revision": "a3c50220f6b0e710eb891dbfc89477cf"
  },
  {
    "url": "assets/js/16.9449d7aa.js",
    "revision": "daa83d4480577fe8b3c4806da7108fdf"
  },
  {
    "url": "assets/js/17.bfd48847.js",
    "revision": "ac6c3da505c3765f7b915bec60276486"
  },
  {
    "url": "assets/js/18.2b57c757.js",
    "revision": "a9f8b2e7571789b5272d6f9d9a0427ef"
  },
  {
    "url": "assets/js/19.bf7a7f29.js",
    "revision": "111ed0c961faf9bfdaed263db674fa93"
  },
  {
    "url": "assets/js/2.816a05e5.js",
    "revision": "9e68487374105177dcfa0e93daa7301c"
  },
  {
    "url": "assets/js/20.9302cc18.js",
    "revision": "baae2755f823847953d95abe94a64a83"
  },
  {
    "url": "assets/js/21.4e39bf00.js",
    "revision": "884cdf6095ae5b469e746e72717a3eea"
  },
  {
    "url": "assets/js/22.f495b422.js",
    "revision": "d2d2461b1b97be1639492132928e7722"
  },
  {
    "url": "assets/js/23.1c5d4eeb.js",
    "revision": "e61f1bbdaab931a1c3fb1da07e210e96"
  },
  {
    "url": "assets/js/24.be0f32e9.js",
    "revision": "f9f29d7db271ae1aa5bd6e2bd566f817"
  },
  {
    "url": "assets/js/25.3804dffc.js",
    "revision": "2dbaa418bdd0aa74d4240ce9173d1773"
  },
  {
    "url": "assets/js/26.49f4202b.js",
    "revision": "a2dcc7f88e481d1f3fb543e321601f16"
  },
  {
    "url": "assets/js/3.5403fae7.js",
    "revision": "f0d9cb1e79de613453b5dc88a9ba671d"
  },
  {
    "url": "assets/js/4.0a846174.js",
    "revision": "5cf2a83cd8860d63f475bc55b54b8910"
  },
  {
    "url": "assets/js/5.d0c2fe99.js",
    "revision": "4cdb593e6600cf365bcaf13d5c0ff5ab"
  },
  {
    "url": "assets/js/6.973002f5.js",
    "revision": "c01ebb8a071f36b7491354bcc1b1b5e7"
  },
  {
    "url": "assets/js/7.bc6c7be3.js",
    "revision": "8c8e952abd078ce61dd5496f89a171c4"
  },
  {
    "url": "assets/js/8.b73f59ac.js",
    "revision": "153b1cc9252d82fbb7b42e0fc01f4ede"
  },
  {
    "url": "assets/js/9.0eed63b8.js",
    "revision": "e0e664d2368824459c94f875e441f171"
  },
  {
    "url": "assets/js/app.4e7c3d3a.js",
    "revision": "e7a2897e3427d4a439fb25a4a72662f3"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "ac213f86735cbf1364c7e48e1a32eda6"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "de24dac9cfecbcd17d6063b924fef723"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "503b704cfa190bca6b1a342a3d065f18"
  },
  {
    "url": "css/index.html",
    "revision": "947296fb36f001884aeeca78fd73149a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "9c92a3ed7b834cd6c344bd31f8a6fe61"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "697e6faa62ec49655910379578c6e754"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "3b79c26acf3d169f750e4ddb414d38ba"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "dea50cc2ea17c63fd6c2974472f36c78"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "40495209221f6c3493367cbeb328c413"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "7a9516e68406f62bd897e4b71a9d0fcc"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8d17c5e902f282254de021f011feb2bd"
  },
  {
    "url": "index.html",
    "revision": "bdd4b34c5b55067cc31e1510ddabba41"
  },
  {
    "url": "javascript/index.html",
    "revision": "406cea91763681596c23a802f69a2e57"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "00dca299bc8c5ff664059bfbeae60e1b"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8565bdf9adcc300abc56f7056afdbd9e"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "2f186948371171fb5d09ad3bcdb91c57"
  },
  {
    "url": "yuedu/c-aaa.html",
    "revision": "66b858989b124f5268233e717e9ff659"
  },
  {
    "url": "yuedu/index.html",
    "revision": "035076308835ee56146804a5d8027fe7"
  },
  {
    "url": "yuedu/个人备份说明.html",
    "revision": "b9751e5bd4cb090673df48ab6933c05f"
  },
  {
    "url": "yuedu/书源校验工具.html",
    "revision": "a8901fd3ce35c160db6316575b538a6b"
  },
  {
    "url": "yuedu/关耳美化发现工具.html",
    "revision": "1125231af99c2c1afd9fe65cef635e2e"
  },
  {
    "url": "yuedu/备份文件说明.html",
    "revision": "d4e9b6f86a39d57f9bbb67ed8fbce3a6"
  },
  {
    "url": "yuedu/教程.html",
    "revision": "946b35f9566c7b0acf16f78e2a2b1abf"
  },
  {
    "url": "yuedu/资源共享.html",
    "revision": "74666c9e177a4f3eeba99c5b058b8268"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
