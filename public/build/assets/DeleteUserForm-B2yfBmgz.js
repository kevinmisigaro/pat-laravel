import{r as s,R as p,b as Ee,j as v,W as qe}from"./app-B52jx06G.js";import{T as ze,I as Je}from"./TextInput-7e44tnxE.js";import{I as Ze}from"./InputLabel-B5Tript2.js";import{s as te,W as x,H as $,o as E,y as D,n as A,a as ne,u as Y,b as X,t as re,T as Qe,l as oe,p as et,f as ye,M as fe,c as be,i as B,m as tt,d as nt,X as xe,I as V}from"./transition-ecSV1Hi8.js";function le(e){return te.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let rt=s.createContext(void 0);function ot(){return s.useContext(rt)}let lt="div";var G=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(G||{});function at(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:o,slot:{},defaultTag:lt,name:"Hidden"})}let z=x(at),it=s.createContext(null);function ut({children:e}){let t=s.useContext(it);if(!t)return p.createElement(p.Fragment,null,e);let{target:n}=t;return n?Ee.createPortal(p.createElement(p.Fragment,null,e),n):null}let ae=s.createContext(null);ae.displayName="DescriptionContext";function $e(){let e=s.useContext(ae);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,$e),t}return e}function st(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=E(l=>(t(a=>[...a,l]),()=>t(a=>{let u=a.slice(),i=u.indexOf(l);return i!==-1&&u.splice(i,1),u}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props,value:n.value}),[r,n.slot,n.name,n.props,n.value]);return p.createElement(ae.Provider,{value:o},n.children)},[t])]}let ct="p";function dt(e,t){let n=s.useId(),r=ot(),{id:o=`headlessui-description-${n}`,...l}=e,a=$e(),u=D(t);A(()=>a.register(o),[o,a.register]);let i=r||!1,d=s.useMemo(()=>({...a.slot,disabled:i}),[a.slot,i]),c={ref:u,...a.props,id:o};return $({ourProps:c,theirProps:l,slot:d,defaultTag:ct,name:a.name||"Description"})}let ft=x(dt),mt=Object.assign(ft,{});var Te=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Te||{});let pt=s.createContext(()=>{});function ht({value:e,children:t}){return p.createElement(pt.Provider,{value:e},t)}let vt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Fe(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let a=t[o].call(n,...l);a&&(n=a,r.forEach(u=>u()))}}}function Pe(e){return s.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let gt=new vt(()=>Fe(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function k(e,t){let n=gt.get(t),r=s.useId(),o=Pe(n);if(A(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),a=o.length;return l===-1&&(l=a,a+=1),l===a-1}let J=new Map,W=new Map;function me(e){var t;let n=(t=W.get(e))!=null?t:0;return W.set(e,n+1),n!==0?()=>pe(e):(J.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0,()=>pe(e))}function pe(e){var t;let n=(t=W.get(e))!=null?t:1;if(n===1?W.delete(e):W.set(e,n-1),n!==1)return;let r=J.get(e);r&&(r["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,J.delete(e))}function wt(e,{allowed:t,disallowed:n}={}){let r=k(e,"inert-others");A(()=>{var o,l;if(!r)return;let a=ne();for(let i of(o=n==null?void 0:n())!=null?o:[])i&&a.add(me(i));let u=(l=t==null?void 0:t())!=null?l:[];for(let i of u){if(!i)continue;let d=le(i);if(!d)continue;let c=i.parentElement;for(;c&&c!==d.body;){for(let f of c.children)u.some(h=>f.contains(h))||a.add(me(f));c=c.parentElement}}return a.dispose},[r,t,n])}let Z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),Et=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(F||{}),Q=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Q||{}),yt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(yt||{});function bt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Z)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function xt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Et)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Le||{});function $t(e,t=0){var n;return e===((n=le(e))==null?void 0:n.body)?!1:Y(t,{0(){return e.matches(Z)},1(){let r=e;for(;r!==null;){if(r.matches(Z))return!0;r=r.parentElement}return!1}})}var Tt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Tt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function P(e){e==null||e.focus({preventScroll:!0})}let Ft=["textarea","input"].join(",");function Pt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ft))!=null?n:!1}function Lt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function U(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?Lt(e):e:t&64?xt(e):bt(e);o.length>0&&a.length>1&&(a=a.filter(m=>!o.some(y=>y!=null&&"current"in y?(y==null?void 0:y.current)===m:y===m))),r=r??l.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=a.length,h;do{if(c>=f||c+f<=0)return 0;let m=i+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}h=a[m],h==null||h.focus(d),c+=u}while(h!==l.activeElement);return t&6&&Pt(h)&&h.select(),2}function Me(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Mt(){return/Android/gi.test(window.navigator.userAgent)}function Dt(){return Me()||Mt()}function j(e,t,n,r){let o=X(n);s.useEffect(()=>{if(!e)return;function l(a){o.current(a)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function De(e,t,n,r){let o=X(n);s.useEffect(()=>{if(!e)return;function l(a){o.current(a)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const he=30;function Nt(e,t,n){let r=k(e,"outside-click"),o=X(n),l=s.useCallback(function(i,d){if(i.defaultPrevented)return;let c=d(i);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let f=function h(m){return typeof m=="function"?h(m()):Array.isArray(m)||m instanceof Set?m:[m]}(t);for(let h of f){if(h===null)continue;let m=h instanceof HTMLElement?h:h.current;if(m!=null&&m.contains(c)||i.composed&&i.composedPath().includes(m))return}return!$t(c,Le.Loose)&&c.tabIndex!==-1&&i.preventDefault(),o.current(i,c)},[o]),a=s.useRef(null);j(r,"pointerdown",i=>{var d,c;a.current=((c=(d=i.composedPath)==null?void 0:d.call(i))==null?void 0:c[0])||i.target},!0),j(r,"mousedown",i=>{var d,c;a.current=((c=(d=i.composedPath)==null?void 0:d.call(i))==null?void 0:c[0])||i.target},!0),j(r,"click",i=>{Dt()||a.current&&(l(i,()=>a.current),a.current=null)},!0);let u=s.useRef({x:0,y:0});j(r,"touchstart",i=>{u.current.x=i.touches[0].clientX,u.current.y=i.touches[0].clientY},!0),j(r,"touchend",i=>{let d={x:i.changedTouches[0].clientX,y:i.changedTouches[0].clientY};if(!(Math.abs(d.x-u.current.x)>=he||Math.abs(d.y-u.current.y)>=he))return l(i,()=>i.target instanceof HTMLElement?i.target:null)},!0),De(r,"blur",i=>l(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function _(...e){return s.useMemo(()=>le(...e),[...e])}function Ne(e,t,n,r){let o=X(n);s.useEffect(()=>{e=e??window;function l(a){o.current(a)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function St(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function Ct(){return Me()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let u=ne();u.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>u.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,a=null;t.addEventListener(e,"click",u=>{if(u.target instanceof HTMLElement)try{let i=u.target.closest("a");if(!i)return;let{hash:d}=new URL(i.href),c=e.querySelector(d);c&&!r(c)&&(a=c)}catch{}},!0),t.addEventListener(e,"touchstart",u=>{if(u.target instanceof HTMLElement)if(r(u.target)){let i=u.target;for(;i.parentElement&&r(i.parentElement);)i=i.parentElement;t.style(i,"overscrollBehavior","contain")}else t.style(u.target,"touchAction","none")}),t.addEventListener(e,"touchmove",u=>{if(u.target instanceof HTMLElement){if(u.target.tagName==="INPUT")return;if(r(u.target)){let i=u.target;for(;i.parentElement&&i.dataset.headlessuiPortal!==""&&!(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth);)i=i.parentElement;i.dataset.headlessuiPortal===""&&u.preventDefault()}else u.preventDefault()}},{passive:!1}),t.add(()=>{var u;let i=(u=window.scrollY)!=null?u:window.pageYOffset;l!==i&&window.scrollTo(0,l),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})})}}:{}}function At(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Rt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Fe(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ne(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Rt(n)},o=[Ct(),St(),At()];o.forEach(({before:l})=>l==null?void 0:l(r)),o.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function kt(e,t,n=()=>({containers:[]})){let r=Pe(C),o=t?r.get(t):void 0,l=o?o.count>0:!1;return A(()=>{if(!(!t||!e))return C.dispatch("PUSH",t,n),()=>C.dispatch("POP",t,n)},[e,t]),l}function It(e,t,n=()=>[document.body]){let r=k(e,"scroll-lock");kt(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function ie(e,t){let n=s.useRef([]),r=E(e);s.useEffect(()=>{let o=[...n.current];for(let[l,a]of t.entries())if(n.current[l]!==a){let u=r(t,o);return n.current=t,u}},[r,...t])}function Ot(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let M=[];Ot(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&M[0]!==t.target&&(M.unshift(t.target),M=M.filter(n=>n!=null&&n.isConnected),M.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Se(e){let t=E(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,re(()=>{n.current&&t()})}),[t])}let Ce=s.createContext(!1);function jt(){return s.useContext(Ce)}function ve(e){return p.createElement(Ce.Provider,{value:e.force},e.children)}function Ht(e){let t=jt(),n=s.useContext(Re),r=_(e),[o,l]=s.useState(()=>{var a;if(!t&&n!==null)return(a=n.current)!=null?a:null;if(te.isServer)return null;let u=r==null?void 0:r.getElementById("headlessui-portal-root");if(u)return u;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let Ae=s.Fragment,Wt=x(function(e,t){let n=e,r=s.useRef(null),o=D(Qe(c=>{r.current=c}),t),l=_(r),a=Ht(r),[u]=s.useState(()=>{var c;return te.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),i=s.useContext(ee),d=oe();return A(()=>{!a||!u||a.contains(u)||(u.setAttribute("data-headlessui-portal",""),a.appendChild(u))},[a,u]),A(()=>{if(u&&i)return i.register(u)},[i,u]),Se(()=>{var c;!a||!u||(u instanceof Node&&a.contains(u)&&a.removeChild(u),a.childNodes.length<=0&&((c=a.parentElement)==null||c.removeChild(a)))}),d?!a||!u?null:Ee.createPortal($({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:Ae,name:"Portal"}),u):null});function Ut(e,t){let n=D(t),{enabled:r=!0,...o}=e;return r?p.createElement(Wt,{...o,ref:n}):$({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:Ae,name:"Portal"})}let _t=s.Fragment,Re=s.createContext(null);function Bt(e,t){let{target:n,...r}=e,o={ref:D(t)};return p.createElement(Re.Provider,{value:n},$({ourProps:o,theirProps:r,defaultTag:_t,name:"Popover.Group"}))}let ee=s.createContext(null);function Yt(){let e=s.useContext(ee),t=s.useRef([]),n=E(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=E(l=>{let a=t.current.indexOf(l);a!==-1&&t.current.splice(a,1),e&&e.unregister(l)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:l}){return p.createElement(ee.Provider,{value:o},l)},[o])]}let Vt=x(Ut),ke=x(Bt),Gt=Object.assign(Vt,{Group:ke});function Xt(e,t=typeof document<"u"?document.defaultView:null,n){let r=k(e,"escape");Ne(t,"keydown",o=>{r&&(o.defaultPrevented||o.key===Te.Escape&&n(o))})}function Kt(){var e;let[t]=s.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[n,r]=s.useState((e=t==null?void 0:t.matches)!=null?e:!1);return A(()=>{if(!t)return;function o(l){r(l.matches)}return t.addEventListener("change",o),()=>t.removeEventListener("change",o)},[t]),n}function qt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),l=_(o),a=E(()=>{var u,i,d;let c=[];for(let f of e)f!==null&&(f instanceof HTMLElement?c.push(f):"current"in f&&f.current instanceof HTMLElement&&c.push(f.current));if(t!=null&&t.current)for(let f of t.current)c.push(f);for(let f of(u=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?u:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((d=(i=o.current)==null?void 0:i.getRootNode())==null?void 0:d.host)||c.some(h=>f.contains(h))||c.push(f));return c});return{resolveContainers:a,contains:E(u=>a().some(i=>i.contains(u))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:p.createElement(z,{features:G.Hidden,ref:o})},[o,n])}}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function zt(){let e=s.useRef(0);return De(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ie(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Jt="div";var S=(e=>(e[e.None=0]="None",e[e.InitialFocus=1]="InitialFocus",e[e.TabLock=2]="TabLock",e[e.FocusLock=4]="FocusLock",e[e.RestoreFocus=8]="RestoreFocus",e[e.AutoFocus=16]="AutoFocus",e))(S||{});function Zt(e,t){let n=s.useRef(null),r=D(n,t),{initialFocus:o,initialFocusFallback:l,containers:a,features:u=15,...i}=e;oe()||(u=0);let d=_(n);nn(u,{ownerDocument:d});let c=rn(u,{ownerDocument:d,container:n,initialFocus:o,initialFocusFallback:l});on(u,{ownerDocument:d,container:n,containers:a,previousActiveElement:c});let f=zt(),h=E(w=>{let L=n.current;L&&(b=>b())(()=>{Y(f.current,{[H.Forwards]:()=>{U(L,F.First,{skipElements:[w.relatedTarget,l]})},[H.Backwards]:()=>{U(L,F.Last,{skipElements:[w.relatedTarget,l]})}})})}),m=k(!!(u&2),"focus-trap#tab-lock"),y=et(),N=s.useRef(!1),T={ref:r,onKeyDown(w){w.key=="Tab"&&(N.current=!0,y.requestAnimationFrame(()=>{N.current=!1}))},onBlur(w){if(!(u&4))return;let L=Ie(a);n.current instanceof HTMLElement&&L.add(n.current);let b=w.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(Oe(L,b)||(N.current?U(n.current,Y(f.current,{[H.Forwards]:()=>F.Next,[H.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&P(w.target)))}};return p.createElement(p.Fragment,null,m&&p.createElement(z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:G.Focusable}),$({ourProps:T,theirProps:i,defaultTag:Jt,name:"FocusTrap"}),m&&p.createElement(z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:G.Focusable}))}let Qt=x(Zt),en=Object.assign(Qt,{features:S});function tn(e=!0){let t=s.useRef(M.slice());return ie(([n],[r])=>{r===!0&&n===!1&&re(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=M.slice())},[e,M,t]),E(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function nn(e,{ownerDocument:t}){let n=!!(e&8),r=tn(n);ie(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&P(r())},[n]),Se(()=>{n&&P(r())})}function rn(e,{ownerDocument:t,container:n,initialFocus:r,initialFocusFallback:o}){let l=s.useRef(null),a=k(!!(e&1),"focus-trap#initial-focus"),u=ye();return ie(()=>{if(e===0)return;if(!a){o!=null&&o.current&&P(o.current);return}let i=n.current;i&&re(()=>{if(!u.current)return;let d=t==null?void 0:t.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===d){l.current=d;return}}else if(i.contains(d)){l.current=d;return}if(r!=null&&r.current)P(r.current);else{if(e&16){if(U(i,F.First|F.AutoFocus)!==Q.Error)return}else if(U(i,F.First)!==Q.Error)return;if(o!=null&&o.current&&(P(o.current),(t==null?void 0:t.activeElement)===o.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}l.current=t==null?void 0:t.activeElement})},[o,a,e]),l}function on(e,{ownerDocument:t,container:n,containers:r,previousActiveElement:o}){let l=ye(),a=!!(e&4);Ne(t==null?void 0:t.defaultView,"focus",u=>{if(!a||!l.current)return;let i=Ie(r);n.current instanceof HTMLElement&&i.add(n.current);let d=o.current;if(!d)return;let c=u.target;c&&c instanceof HTMLElement?Oe(i,c)?(o.current=c,P(c)):(u.preventDefault(),u.stopPropagation(),P(d)):P(o.current)},!0)}function Oe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var ln=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ln||{}),an=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(an||{});let un={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ue=s.createContext(null);ue.displayName="DialogContext";function K(e){let t=s.useContext(ue);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,K),n}return t}function sn(e,t){return Y(t.type,un,e,t)}let ge=x(function(e,t){let n=s.useId(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,role:u="dialog",autoFocus:i=!0,__demoMode:d=!1,...c}=e,f=s.useRef(!1);u=function(){return u==="dialog"||u==="alertdialog"?u:(f.current||(f.current=!0,console.warn(`Invalid role [${u}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let h=be();o===void 0&&h!==null&&(o=(h&B.Open)===B.Open);let m=s.useRef(null),y=D(m,t),N=_(m),T=o?0:1,[w,L]=s.useReducer(sn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),b=E(()=>l(!1)),se=E(g=>L({type:0,id:g})),R=oe()?T===0:!1,[He,We]=Yt(),Ue={get current(){var g;return(g=w.panelRef.current)!=null?g:m.current}},{resolveContainers:q,mainTreeNodeRef:_e,MainTreeNode:Be}=qt({portals:He,defaultContainers:[Ue]}),ce=h!==null?(h&B.Closing)===B.Closing:!1;wt(d||ce?!1:R,{allowed:E(()=>{var g,O;return[(O=(g=m.current)==null?void 0:g.closest("[data-headlessui-portal]"))!=null?O:null]}),disallowed:E(()=>{var g,O;return[(O=(g=_e.current)==null?void 0:g.closest("body > *:not(#headlessui-portal-root)"))!=null?O:null]})}),Nt(R,q,g=>{g.preventDefault(),b()}),Xt(R,N==null?void 0:N.defaultView,g=>{g.preventDefault(),g.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),b()}),It(d||ce?!1:R,N,q),tt(R,m,b);let[Ye,Ve]=st(),Ge=s.useMemo(()=>[{dialogState:T,close:b,setTitleId:se},w],[T,w,b,se]),de=s.useMemo(()=>({open:T===0}),[T]),Xe={ref:y,id:r,role:u,tabIndex:-1,"aria-modal":d?void 0:T===0?!0:void 0,"aria-labelledby":w.titleId,"aria-describedby":Ye},Ke=!Kt(),I=S.None;return R&&!d&&(I|=S.RestoreFocus,I|=S.TabLock,i&&(I|=S.AutoFocus),Ke&&(I|=S.InitialFocus)),p.createElement(nt,null,p.createElement(ve,{force:!0},p.createElement(Gt,null,p.createElement(ue.Provider,{value:Ge},p.createElement(ke,{target:m},p.createElement(ve,{force:!1},p.createElement(Ve,{slot:de},p.createElement(We,null,p.createElement(en,{initialFocus:a,initialFocusFallback:m,containers:q,features:I},p.createElement(ht,{value:b},$({ourProps:Xe,theirProps:c,slot:de,defaultTag:cn,features:dn,visible:T===0,name:"Dialog"})))))))))),p.createElement(ut,null,p.createElement(Be,null)))}),cn="div",dn=fe.RenderStrategy|fe.Static;function fn(e,t){let{transition:n=!1,open:r,...o}=e,l=be(),a=e.hasOwnProperty("open")||l!==null,u=e.hasOwnProperty("onClose");if(!a&&!u)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!a)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!u)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!l&&typeof e.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);if(typeof e.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);return(r!==void 0||n)&&!o.static?p.createElement(xe,{show:r,transition:n,unmount:o.unmount},p.createElement(ge,{ref:t,...o})):p.createElement(ge,{ref:t,open:r,...o})}let mn="div";function pn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-panel-${n}`,transition:o=!1,...l}=e,[{dialogState:a},u]=K("Dialog.Panel"),i=D(t,u.panelRef),d=s.useMemo(()=>({open:a===0}),[a]),c=E(f=>{f.stopPropagation()});return p.createElement(o?V:s.Fragment,null,$({ourProps:{ref:i,id:r,onClick:c},theirProps:l,slot:d,defaultTag:mn,name:"Dialog.Panel"}))}let hn="div";function vn(e,t){let{transition:n=!1,...r}=e,[{dialogState:o}]=K("Dialog.Backdrop"),l=s.useMemo(()=>({open:o===0}),[o]);return p.createElement(n?V:s.Fragment,null,$({ourProps:{ref:t,"aria-hidden":!0},theirProps:r,slot:l,defaultTag:hn,name:"Dialog.Backdrop"}))}let gn="h2";function wn(e,t){let n=s.useId(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=K("Dialog.Title"),u=D(t);s.useEffect(()=>(a(r),()=>a(null)),[r,a]);let i=s.useMemo(()=>({open:l===0}),[l]);return $({ourProps:{ref:u,id:r},theirProps:o,slot:i,defaultTag:gn,name:"Dialog.Title"})}let En=x(fn),je=x(pn);x(vn);let yn=x(wn),bn=Object.assign(En,{Panel:je,Title:yn,Description:mt});function we({className:e="",disabled:t,children:n,...r}){return v.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function xn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v.jsx(xe,{show:t,leave:"duration-200",children:v.jsxs(bn,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[v.jsx(V,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),v.jsx(V,{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v.jsx(je,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`,children:e})})]})})}function $n({type:e="button",className:t="",disabled:n,children:r,...o}){return v.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Dn({className:e=""}){const[t,n]=s.useState(!1),r=s.useRef(null),{data:o,setData:l,delete:a,processing:u,reset:i,errors:d}=qe({password:""}),c=()=>{n(!0)},f=m=>{m.preventDefault(),a(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>h(),onError:()=>{var y;return(y=r.current)==null?void 0:y.focus()},onFinish:()=>i()})},h=()=>{n(!1),i()};return v.jsxs("section",{className:`space-y-6 ${e}`,children:[v.jsxs("header",{children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v.jsx(we,{onClick:c,children:"Delete Account"}),v.jsx(xn,{show:t,onClose:h,children:v.jsxs("form",{onSubmit:f,className:"p-6",children:[v.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),v.jsxs("div",{className:"mt-6",children:[v.jsx(Ze,{htmlFor:"password",value:"Password",className:"sr-only"}),v.jsx(ze,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:m=>l("password",m.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v.jsx(Je,{message:d.password,className:"mt-2"})]}),v.jsxs("div",{className:"mt-6 flex justify-end",children:[v.jsx($n,{onClick:h,children:"Cancel"}),v.jsx(we,{className:"ms-3",disabled:u,children:"Delete Account"})]})]})})]})}export{Dn as default};
