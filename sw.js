if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),l={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CjJJ0e2y.css",revision:null},{url:"assets/index-DdGLfOzO.js",revision:null},{url:"index.html",revision:"470118a72de54ee0f898de73bb68eb79"},{url:"registerSW.js",revision:"02cb16423af4349bd98a2d585da6235b"},{url:"manifest.webmanifest",revision:"6341f5a7b34d55d44613af73c2ff278d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
