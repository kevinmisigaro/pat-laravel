import{r as f,j as e,R as c,Y as N,a as l}from"./app-B52jx06G.js";function w({targetDate:t}){const r=()=>{const a=+new Date(t)-+new Date;let i={days:0,hours:0,minutes:0};return a>0&&(i={days:Math.floor(a/864e5),hours:Math.floor(a/36e5%24),minutes:Math.floor(a/1e3/60%60)}),i},[s,n]=f.useState(r());return f.useEffect(()=>{const a=setTimeout(()=>{n(r())},1e3);return()=>clearTimeout(a)}),e.jsxs("div",{className:"grid grid-flow-col gap-x-10 text-center auto-cols-max",children:[e.jsxs("div",{className:"flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white",children:[e.jsx("span",{className:"countdown font-mono text-5xl",children:s.days}),"days"]}),e.jsxs("div",{className:"flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white",children:[e.jsx("span",{className:"countdown font-mono text-5xl",children:s.hours}),e.jsx("span",{children:" hours"})]}),e.jsxs("div",{className:"flex flex-col items-center w-32 p-6 bg-[#202abd] rounded-box text-white",children:[e.jsx("span",{className:"countdown font-mono text-5xl",children:s.minutes}),"min"]})]})}const y=({title:t,children:r})=>e.jsxs("div",{className:"max-w-sm rounded overflow-hidden shadow-lg border border-[#202abd]",children:[e.jsx("div",{className:"font-bold text-xl bg-[#202abd] mb-2 p-4 text-white",children:t}),e.jsx("div",{className:"p-5",children:r})]}),d=y;var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=c.createContext&&c.createContext(b),O=["attr","size","title"];function C(t,r){if(t==null)return{};var s=P(t,r),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}function P(t,r){if(t==null)return{};var s={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(r.indexOf(n)>=0)continue;s[n]=t[n]}return s}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},x.apply(this,arguments)}function j(t,r){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),s.push.apply(s,n)}return s}function m(t){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?j(Object(s),!0).forEach(function(n){E(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):j(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function E(t,r,s){return r=z(r),r in t?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s,t}function z(t){var r=S(t,"string");return typeof r=="symbol"?r:r+""}function S(t,r){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function g(t){return t&&t.map((r,s)=>c.createElement(r.tag,m({key:s},r.attr),g(r.child)))}function v(t){return r=>c.createElement(D,x({attr:m({},t.attr)},r),g(t.child))}function D(t){var r=s=>{var{attr:n,size:a,title:i}=t,p=C(t,O),u=a||s.size||"1em",o;return s.className&&(o=s.className),t.className&&(o=(o?o+" ":"")+t.className),c.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,p,{className:o,style:m(m({color:t.color||s.color},s.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),t.children)};return h!==void 0?c.createElement(h.Consumer,null,s=>r(s)):r(b)}function V(t){return v({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"},child:[]}]})(t)}function H(t){return v({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"},child:[]}]})(t)}function M({auth:t,laravelVersion:r,phpVersion:s}){const n=new Date().getFullYear(),a=new Date(`October 17, ${n} 00:00:00`);return e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Welcome"}),e.jsx("div",{className:"h-screen",style:{backgroundColor:"/images/banner1.jpg"},children:e.jsxs("div",{className:"relative flex flex-col items-start justify-center",children:[e.jsx("div",{className:"relative w-full bg-[#202abd]",children:e.jsxs("header",{className:"flex items-center justify-between mt-2 bg-[#202abd]",children:[e.jsx("div",{className:"flex lg:justify-center lg:col-start-2",children:e.jsx("img",{src:"/images/pat-logo.png",className:"w-3/12"})}),e.jsx("nav",{className:"mx-3 flex flex-1 justify-end ",children:t.user?e.jsx(l,{href:route("dashboard"),className:"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20]",children:"Dashboard"}):e.jsx(e.Fragment,{children:e.jsx(l,{href:route("register"),className:"text-white hover:underline",children:"Membership Registration"})})})]})}),e.jsxs("main",{className:"mt-5 w-full",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsxs("p",{className:"mb-5 text-2xl mt-4 font-bold text-[#202abd]",children:["Countdown to the 24",e.jsx("sup",{children:"th"})," PAT SCIENTIFIC CONFERENCE"]}),e.jsx(w,{targetDate:a}),e.jsx("div",{className:"my-5",children:e.jsx("a",{href:"https://conference2024.paediatrics.or.tz",target:"_blank",className:"text-[#202abd] hover:underline",children:"Find out more"})})]}),e.jsxs("div",{className:"mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-10 px-20 items-center",children:[e.jsxs("div",{className:"flex flex-col gap-y-10",children:[e.jsx(d,{title:"Member Registration",children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(l,{onClick:()=>localStorage.setItem("pat","1"),href:route("login"),className:"hover:text-[#202abd] hover:underline",children:"Login"}),e.jsx(l,{onClick:()=>localStorage.setItem("pat","1"),href:route("register"),className:"hover:text-[#202abd] hover:underline",children:"Register"})]})}),e.jsx(d,{title:"Conference Registeration",children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx(l,{onClick:()=>localStorage.setItem("pat","0"),href:route("login"),className:"hover:text-[#202abd] hover:underline",children:"Login"}),e.jsx(l,{onClick:()=>localStorage.setItem("pat","0"),href:route("register"),className:"hover:text-[#202abd] hover:underline",children:"Register"})]})})]}),e.jsxs("div",{className:"flex flex-col gap-y-8 items-center justify-center bg-[#202abd] text-white max-w-fit py-8 px-20",children:[e.jsx("div",{className:"basis-1/3 font-bold text-xl",children:"Conference details"}),e.jsxs("div",{className:"basis-1/3 flex flex-col items-center justify-center",children:[e.jsx(H,{className:"text-3xl"}),e.jsx("div",{className:"font-bold text-2xl",children:"Mbeya"}),e.jsx("div",{className:"text-base",children:"EDEN HIGHLANDS HOTEL"})]}),e.jsxs("div",{className:"basis-1/3 flex flex-col gap-y-2 items-center justify-center mt-5",children:[e.jsx(V,{className:"text-3xl"}),e.jsxs("div",{className:"font-bold text-2xl text-center",children:["17",e.jsx("sup",{children:"th"})," - 19",e.jsx("sup",{children:"th"})," ","October"]}),e.jsx("div",{className:"text-base",children:"Event date"})]})]}),e.jsx(d,{title:"Abstract Submission",children:e.jsx("div",{children:e.jsx(l,{className:"hover:underline",href:route("guestabstract"),children:"Submit New Abstract"})})}),e.jsx(d,{title:"Announcements",children:e.jsx("div",{children:"No Announcements for now"})})]})]}),e.jsx("div",{className:"flex justify-center items-center w-full py-16",children:e.jsx("footer",{className:"text-center text-sm text-[#202abd]",children:"Paediatrics Association of Tanzania"})})]})})]})}export{M as default};
