if(!self.define){let e,o={};const i=(i,n)=>(i=new URL(i+".js",n).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(o[l])return;let s={};const t=e=>i(e,l),u={module:{uri:l},exports:s,require:t};o[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),s)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"todo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/todo-vue/css/app.4add23e5.css",revision:null},{url:"/todo-vue/img/back.4eee76db.png",revision:null},{url:"/todo-vue/img/complete.30498ed5.png",revision:null},{url:"/todo-vue/img/delete.17796106.png",revision:null},{url:"/todo-vue/img/forward.8a76ab85.png",revision:null},{url:"/todo-vue/img/selectAll.450b24a1.png",revision:null},{url:"/todo-vue/index.html",revision:"fcba4bda15d4437b62e35c80cfdf28f4"},{url:"/todo-vue/js/app.314e8d78.js",revision:null},{url:"/todo-vue/js/chunk-vendors.e9839ede.js",revision:null},{url:"/todo-vue/manifest.json",revision:"8d4192f82ff22aae2f49028b915656fa"},{url:"/todo-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
