(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[953],{9118:(e,t,n)=>{Promise.resolve().then(n.bind(n,5425))},5425:(e,t,n)=>{"use strict";n.d(t,{default:()=>C});var r={};n.r(r),n.d(r,{MDXProvider:()=>u,useMDXComponents:()=>c});var l=n(5155);"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var i=n(2115),o=n(7927);let a={},s=i.createContext(a);function c(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(s.Provider,{value:t},e.children)}function d(e){let{compiledSource:t,frontmatter:n,scope:l,components:a={},lazy:s}=e,[c,d]=(0,i.useState)(!s||"undefined"==typeof window);(0,i.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{d(!0)});return()=>window.cancelIdleCallback(e)}},[]);let f=(0,i.useMemo)(()=>{let e=Object.assign({opts:{...r,...o.jsxRuntime}},{frontmatter:n},l),i=Object.keys(e),a=Object.values(e),s=Reflect.construct(Function,i.concat("".concat(t)));return s.apply(s,a).default},[l,t]);if(!c)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let p=i.createElement(u,{components:a},i.createElement(f,null));return s?i.createElement("div",null,p):p}var f=n(4146),p=n.n(f),h=n(8173),m=n.n(h),g=n(3704),y=n.n(g);let b=e=>{let{children:t}=e;return(0,l.jsx)("h1",{className:"font-bold text-3xl mb-3",children:t})},v=e=>{let{children:t}=e,n=t.toLowerCase().replace(" ","_");return(0,l.jsx)("a",{href:"#".concat(n),children:(0,l.jsx)("h2",{className:"font-bold mb-2 text-lg hover:underline",id:n,children:t})})},x=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"mb-2",children:t})},_=e=>{let{children:t}=e;return(0,l.jsx)("code",{className:"language-glsl",children:t})},w=e=>{let{source:t}=e;return(0,l.jsx)("video",{className:"drop-shadow-sm rounded-xl",width:"400",autoPlay:!0,muted:!0,loop:!0,children:(0,l.jsx)("source",{src:t,type:"video/mp4"})})},j=e=>{let{children:t,href:n}=e;return(0,l.jsx)(m(),{className:"font-bold text-blue-700",href:n,children:t})},O=e=>{let{children:t,label:n}=e;return(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center mt-3 mb-5",children:[t,n?(0,l.jsx)("i",{className:"text-xs",children:n}):null]})},I=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 16 16",fill:"none",children:(0,l.jsx)("path",{d:"M7 2V0H9V2H11V4H9V6H15V9L12.75 12.75L14 14V16H2V14L3.25 12.75L1 9V6H7V4H5V2H7Z",fill:"#000000"})}),C=e=>{let{image:t,...n}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(y(),{id:"highlight",children:"setTimeout(() => hljs.highlightAll(), 0)"}),t&&(0,l.jsx)(p(),{src:t,alt:"blog header",width:800,height:200,className:"w-full object-cover w-full h-48"}),(0,l.jsx)("div",{className:"p-5",children:(0,l.jsx)(d,{...n,components:{h1:b,p:x,h2:v,a:j,code:_,Video:w,Figure:O,Image:p(),King:I}})})]})}},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g}});let r=n(306),l=n(9955),i=n(5155),o=r._(n(7650)),a=l._(n(2115)),s=n(1147),c=n(2815),u=n(8571),d=new Map,f=new Set,p=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:i,children:o="",strategy:a="afterInteractive",onError:s,stylesheets:u}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,s);return}let m=()=>{l&&l(),f.add(h)},g=document.createElement("script"),y=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});i?(g.innerHTML=i.__html||"",m()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",m()):t&&(g.src=t,d.set(t,y)),(0,c.setAttributesFromProps)(g,e),"worker"===a&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",a),u&&p(u),document.body.appendChild(g)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function g(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...m}=e,{updateScripts:g,scripts:y,getIsSsr:b,appDir:v,nonce:x}=(0,a.useContext)(s.HeadManagerContext),_=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;_.current||(l&&e&&f.has(e)&&l(),_.current=!0)},[l,t,n]);let w=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!w.current&&("afterInteractive"===c?h(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),w.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...m}]),g(y)):b&&b()?f.add(t||n):b&&!b()&&h(e)),v){if(p&&p.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:x,crossOrigin:m.crossOrigin}:{as:"script",nonce:x,crossOrigin:m.crossOrigin}),(0,i.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:x,crossOrigin:m.crossOrigin}:{as:"script",nonce:x,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return i}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function l(e){return["async","defer","noModule"].includes(e)}function i(e,t){for(let[i,o]of Object.entries(t)){if(!t.hasOwnProperty(i)||r.includes(i)||void 0===o)continue;let a=n[i]||i.toLowerCase();"SCRIPT"===e.tagName&&l(a)?e[a]=!!o:e.setAttribute(a,String(o)),(!1===o||"SCRIPT"===e.tagName&&l(a)&&(!o||"false"===o))&&(e.setAttribute(a,""),e.removeAttribute(a))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4146:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return a}});let r=n(306),l=n(666),i=n(7970),o=r._(n(5514));function a(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=i.Image},7927:(e,t,n)=>{"use strict";e.exports.jsxRuntime=n(5155)}},e=>{var t=t=>e(e.s=t);e.O(0,[970,173,441,517,358],()=>t(9118)),_N_E=e.O()}]);