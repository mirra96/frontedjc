(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{7682:function(e,t,n){"use strict";var r=n(2265);t.Z=function(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e},[e]),t}},2164:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2265),a=n(7682);function o(e){let t=(0,a.Z)(e);return(0,r.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}},9898:function(e,t,n){"use strict";var r=n(2265);let a=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,o="undefined"!=typeof document;t.Z=o||a?r.useLayoutEffect:r.useEffect},9697:function(e,t,n){"use strict";var r=n(2265);let a=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;t.Z=function(e,t){return(0,r.useMemo)(()=>(function(e,t){let n=a(e),r=a(t);return e=>{n&&n(e),r&&r(e)}})(e,t),[e,t])}},596:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265);function a(){let e=(0,r.useRef)(!0),t=(0,r.useRef)(()=>e.current);return(0,r.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}},1032:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265);function a(e){let t=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t.current=e}),t.current}},7212:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(2265),a=n(7437);let o=["as","disabled"];function i({tagName:e,disabled:t,href:n,target:r,rel:a,role:o,onClick:i,tabIndex:l=0,type:s}){e||(e=null!=n||null!=r||null!=a?"a":"button");let u={tagName:e};if("button"===e)return[{type:s||"button",disabled:t},u];let c=r=>{var a;if(!t&&("a"!==e||(a=n)&&"#"!==a.trim())||r.preventDefault(),t){r.stopPropagation();return}null==i||i(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:l,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),c(e))}},u]}let l=r.forwardRef((e,t)=>{let{as:n,disabled:r}=e,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,o),[s,{tagName:u}]=i(Object.assign({tagName:n,disabled:r},l));return(0,a.jsx)(u,Object.assign({},l,s,{ref:t}))});l.displayName="Button",t.ZP=l},5604:function(e,t,n){"use strict";function r(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}n.d(t,{$F:function(){return a},PB:function(){return r}})},9161:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});let r=n(2265).createContext(null),a=(e,t=null)=>null!=e?String(e):t||null;t.Z=r},3851:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},9284:function(e){"use strict";e.exports=function(e,t,n,r,a,o,i,l){if(!e){var s;if(void 0===t)s=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,l],c=0;(s=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},6648:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(5601),a=n.n(r)},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(231),a=n.n(r)},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},5601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return s},getImageProps:function(){return l}});let r=n(9920),a=n(497),o=n(8173),i=r._(n(1241));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let s=o.Image},4339:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.default)(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach(function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}}),a})};var r,a=(r=n(5778))&&r.__esModule?r:{default:r};e.exports=t.default},5778:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var l=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?Error("Required "+o+" `"+s+"` was not specified in `"+l+"`."):null;for(var u=arguments.length,c=Array(u>6?u-6:0),f=6;f<u;f++)c[f-6]=arguments[f];return e.apply(void 0,[n,r,l,o,s].concat(c))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},9949:function(e,t,n){"use strict";var r=n(8877);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},1448:function(e,t,n){e.exports=n(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2808:function(e,t,n){"use strict";var r=n(6800),a=n.n(r),o=n(2265),i=n(7212),l=n(2574),s=n(7437);let u=o.forwardRef((e,t)=>{let{as:n,bsPrefix:r,variant:o="primary",size:u,active:c=!1,disabled:f=!1,className:d,...p}=e,v=(0,l.vE)(r,"btn"),[m,{tagName:h}]=(0,i.FT)({tagName:n,disabled:f,...p});return(0,s.jsx)(h,{...m,...p,ref:t,disabled:f,className:a()(d,v,c&&"active",o&&"".concat(v,"-").concat(o),u&&"".concat(v,"-").concat(u),p.href&&f&&"disabled")})});u.displayName="Button",t.Z=u},2824:function(e,t,n){"use strict";var r=n(6800),a=n.n(r),o=n(2265),i=n(2574),l=n(7437);let s=o.forwardRef((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:o="div",className:s,...u}=e,c=(0,i.vE)(n,"container");return(0,l.jsx)(o,{ref:t,...u,className:a()(s,r?"".concat(c).concat("string"==typeof r?"-".concat(r):"-fluid"):c)})});s.displayName="Container",t.Z=s},7051:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(6800),a=n.n(r);n(4339);var o=n(2265),i=n(505),l=n(3851),s=n(9697);let u=o.createContext(null);u.displayName="NavContext";var c=n(9161);let f=o.createContext(null);var d=n(5604),p=n(2164),v=n(7212),m=n(7437);let h=["as","active","eventKey"];function g({key:e,onClick:t,active:n,id:r,role:a,disabled:i}){let l=(0,o.useContext)(c.Z),s=(0,o.useContext)(u),v=(0,o.useContext)(f),m=n,h={role:a};if(s){a||"tablist"!==s.role||(h.role="tab");let t=s.getControllerId(null!=e?e:null),o=s.getControlledId(null!=e?e:null);h[(0,d.PB)("event-key")]=e,h.id=t||r,((m=null==n&&null!=e?s.activeKey===e:n)||!(null!=v&&v.unmountOnExit)&&!(null!=v&&v.mountOnEnter))&&(h["aria-controls"]=o)}return"tab"===h.role&&(h["aria-selected"]=m,m||(h.tabIndex=-1),i&&(h.tabIndex=-1,h["aria-disabled"]=!0)),h.onClick=(0,p.Z)(n=>{i||(null==t||t(n),null!=e&&l&&!n.isPropagationStopped()&&l(e,n))}),[h,{isActive:m}]}let x=o.forwardRef((e,t)=>{let{as:n=v.ZP,active:r,eventKey:a}=e,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,h),[i,l]=g(Object.assign({key:(0,c.h)(a,o.href),active:r},o));return i[(0,d.PB)("active")]=l.isActive,(0,m.jsx)(n,Object.assign({},o,i,{ref:t}))});x.displayName="NavItem";let E=["as","onSelect","activeKey","role","onKeyDown"],y=()=>{},b=(0,d.PB)("event-key"),C=o.forwardRef((e,t)=>{let n,r,{as:a="div",onSelect:i,activeKey:p,role:v,onKeyDown:h}=e,g=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,E),x=function(){let[,e]=(0,o.useReducer)(e=>!e,!1);return e}(),C=(0,o.useRef)(!1),O=(0,o.useContext)(c.Z),w=(0,o.useContext)(f);w&&(v=v||"tablist",p=w.activeKey,n=w.getControlledId,r=w.getControllerId);let N=(0,o.useRef)(null),j=e=>{let t=N.current;if(!t)return null;let n=(0,l.Z)(t,`[${b}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;let a=n.indexOf(r);if(-1===a)return null;let o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},R=(e,t)=>{null!=e&&(null==i||i(e,t),null==O||O(e,t))};(0,o.useEffect)(()=>{if(N.current&&C.current){let e=N.current.querySelector(`[${b}][aria-selected=true]`);null==e||e.focus()}C.current=!1});let k=(0,s.Z)(t,N);return(0,m.jsx)(c.Z.Provider,{value:R,children:(0,m.jsx)(u.Provider,{value:{role:v,activeKey:(0,c.h)(p),getControlledId:n||y,getControllerId:r||y},children:(0,m.jsx)(a,Object.assign({},g,{onKeyDown:e=>{let t;if(null==h||h(e),w){switch(e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),R(t.dataset[(0,d.$F)("EventKey")]||null,e),C.current=!0,x())}},ref:k,role:v}))})})});C.displayName="Nav";var O=Object.assign(C,{Item:x}),w=n(2574),N=n(3907);let j=o.createContext(null);j.displayName="CardHeaderContext";let R=o.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:o="div",...i}=e;return r=(0,w.vE)(r,"nav-item"),(0,m.jsx)(o,{ref:t,className:a()(n,r),...i})});R.displayName="NavItem",n(7682),n(596),n(1032),n(9898),new WeakMap;let k=["onKeyDown"],T=o.forwardRef((e,t)=>{var n;let{onKeyDown:r}=e,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,k),[o]=(0,v.FT)(Object.assign({tagName:"a"},a)),i=(0,p.Z)(e=>{o.onKeyDown(e),null==r||r(e)});return(n=a.href)&&"#"!==n.trim()&&"button"!==a.role?(0,m.jsx)("a",Object.assign({ref:t},a,{onKeyDown:r})):(0,m.jsx)("a",Object.assign({ref:t},a,o,{onKeyDown:i}))});T.displayName="Anchor";let S=o.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:o=T,active:i,eventKey:l,disabled:s=!1,...u}=e;n=(0,w.vE)(n,"nav-link");let[f,d]=g({key:(0,c.h)(l,u.href),active:i,disabled:s,...u});return(0,m.jsx)(o,{...u,...f,ref:t,disabled:s,className:a()(r,n,s&&"disabled",d.isActive&&"active")})});S.displayName="NavLink";let P=o.forwardRef((e,t)=>{let n,r;let{as:l="div",bsPrefix:s,variant:u,fill:c=!1,justify:f=!1,navbar:d,navbarScroll:p,className:v,activeKey:h,...g}=(0,i.Ch)(e,{activeKey:"onSelect"}),x=(0,w.vE)(s,"nav"),E=!1,y=(0,o.useContext)(N.Z),b=(0,o.useContext)(j);return y?(n=y.bsPrefix,E=null==d||d):b&&({cardHeaderBsPrefix:r}=b),(0,m.jsx)(O,{as:l,ref:t,activeKey:h,className:a()(v,{[x]:!E,["".concat(n,"-nav")]:E,["".concat(n,"-nav-scroll")]:E&&p,["".concat(r,"-").concat(u)]:!!r,["".concat(x,"-").concat(u)]:!!u,["".concat(x,"-fill")]:c,["".concat(x,"-justified")]:f}),...g})});P.displayName="Nav";var Z=Object.assign(P,{Item:R,Link:S})},3039:function(e,t,n){"use strict";let r,a;n.d(t,{Z:function(){return eU}});var o=n(6800),i=n.n(o),l=n(2265),s=n(9161),u=n(505),c=n(2574),f=n(7437);let d=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,as:a,...o}=e;n=(0,c.vE)(n,"navbar-brand");let l=a||(o.href?"a":"span");return(0,f.jsx)(l,{...o,ref:t,className:i()(r,n)})});function p(e){return e&&e.ownerDocument||document}d.displayName="NavbarBrand";var v=/([A-Z])/g,m=/^ms-/;function h(e){return e.replace(v,"-$1").toLowerCase().replace(m,"-ms-")}var g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,x=function(e,t){var n,r="",a="";if("string"==typeof t)return e.style.getPropertyValue(h(t))||((n=p(e))&&n.defaultView||window).getComputedStyle(e,void 0).getPropertyValue(h(t));Object.keys(t).forEach(function(n){var o=t[n];o||0===o?n&&g.test(n)?a+=n+"("+o+") ":r+=h(n)+": "+o+";":e.style.removeProperty(h(n))}),a&&(r+="transform: "+a+";"),e.style.cssText+=";"+r},E=n(3950);function y(e,t){return(y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var b=n(4887),C={disabled:!1},O=l.createContext(null),w="unmounted",N="exited",j="entering",R="entered",k="exiting",T=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=N,r.appearStatus=j):a=R:a=t.unmountOnExit||t.mountOnEnter?w:N,r.state={status:a},r.nextCallback=null,r}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,y(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===w?{status:N}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==j&&n!==R&&(t=j):(n===j||n===R)&&(t=k)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===j){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===N&&this.setState({status:w})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[b.findDOMNode(this),r],o=a[0],i=a[1],l=this.getTimeouts(),s=r?l.appear:l.enter;if(!e&&!n||C.disabled){this.safeSetState({status:R},function(){t.props.onEntered(o)});return}this.props.onEnter(o,i),this.safeSetState({status:j},function(){t.props.onEntering(o,i),t.onTransitionEnd(s,function(){t.safeSetState({status:R},function(){t.props.onEntered(o,i)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:b.findDOMNode(this);if(!t||C.disabled){this.safeSetState({status:N},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:k},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:N},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===w)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,E.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.createElement(O.Provider,{value:null},"function"==typeof n?n(e,r):l.cloneElement(l.Children.only(n),r))},t}(l.Component);function S(){}T.contextType=O,T.propTypes={},T.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S},T.UNMOUNTED=w,T.EXITED=N,T.ENTERING=j,T.ENTERED=R,T.EXITING=k;var P=!!("undefined"!=typeof window&&window.document&&window.document.createElement),Z=!1,L=!1;try{var D={get passive(){return Z=!0},get once(){return L=Z=!0}};P&&(window.addEventListener("test",D,D),window.removeEventListener("test",D,!0))}catch(e){}var _=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!L){var a=r.once,o=r.capture,i=n;!L&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,Z?r:o)}e.addEventListener(t,n,r)},A=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)},M=function(e,t,n,r){return _(e,t,n,r),function(){A(e,t,n,r)}};function I(e,t){let n=x(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function B(e,t){var n,r,a,o,i,l,s,u,c,f,d,p;let v=I(e,"transitionDuration"),m=I(e,"transitionDelay"),h=(n=e,r=n=>{n.target===e&&(h(),t(n))},null==(a=v+m)&&(l=-1===(i=x(n,"transitionDuration")||"").indexOf("ms")?1e3:1,a=parseFloat(i)*l||0),d=(u=!1,c=setTimeout(function(){u||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(t,n,r),e.dispatchEvent(a)}}(n,"transitionend",!0)},a+5),f=M(n,"transitionend",function(){u=!0},{once:!0}),function(){clearTimeout(c),f()}),p=M(n,"transitionend",r),function(){d(),p()})}var F=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}},null)};function K(e){e.offsetHeight}var $=n(9697);let W=l.forwardRef((e,t)=>{let{onEnter:n,onEntering:r,onEntered:a,onExit:o,onExiting:i,onExited:s,addEndListener:u,children:c,childRef:d,...p}=e,v=(0,l.useRef)(null),m=(0,$.Z)(v,d),h=e=>{m(e&&"setState"in e?b.findDOMNode(e):null!=e?e:null)},g=e=>t=>{e&&v.current&&e(v.current,t)},x=(0,l.useCallback)(g(n),[n]),E=(0,l.useCallback)(g(r),[r]),y=(0,l.useCallback)(g(a),[a]),C=(0,l.useCallback)(g(o),[o]),O=(0,l.useCallback)(g(i),[i]),w=(0,l.useCallback)(g(s),[s]),N=(0,l.useCallback)(g(u),[u]);return(0,f.jsx)(T,{ref:t,...p,onEnter:x,onEntered:y,onEntering:E,onExit:C,onExited:w,onExiting:O,addEndListener:N,nodeRef:v,children:"function"==typeof c?(e,t)=>c(e,{...t,ref:h}):l.cloneElement(c,{ref:h})})}),V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function H(e,t){let n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=V[e];return n+parseInt(x(t,r[0]),10)+parseInt(x(t,r[1]),10)}let U={[N]:"collapse",[k]:"collapsing",[j]:"collapsing",[R]:"collapse show"},G=l.forwardRef((e,t)=>{let{onEnter:n,onEntering:r,onEntered:a,onExit:o,onExiting:s,className:u,children:c,dimension:d="height",in:p=!1,timeout:v=300,mountOnEnter:m=!1,unmountOnExit:h=!1,appear:g=!1,getDimensionValue:x=H,...E}=e,y="function"==typeof d?d():d,b=(0,l.useMemo)(()=>F(e=>{e.style[y]="0"},n),[y,n]),C=(0,l.useMemo)(()=>F(e=>{let t="scroll".concat(y[0].toUpperCase()).concat(y.slice(1));e.style[y]="".concat(e[t],"px")},r),[y,r]),O=(0,l.useMemo)(()=>F(e=>{e.style[y]=null},a),[y,a]),w=(0,l.useMemo)(()=>F(e=>{e.style[y]="".concat(x(y,e),"px"),K(e)},o),[o,x,y]),N=(0,l.useMemo)(()=>F(e=>{e.style[y]=null},s),[y,s]);return(0,f.jsx)(W,{ref:t,addEndListener:B,...E,"aria-expanded":E.role?p:null,onEnter:b,onEntering:C,onEntered:O,onExit:w,onExiting:N,childRef:c.ref,in:p,timeout:v,mountOnEnter:m,unmountOnExit:h,appear:g,children:(e,t)=>l.cloneElement(c,{...t,className:i()(u,c.props.className,U[e],"width"===y&&"collapse-horizontal")})})});var X=n(3907);let q=l.forwardRef((e,t)=>{let{children:n,bsPrefix:r,...a}=e;r=(0,c.vE)(r,"navbar-collapse");let o=(0,l.useContext)(X.Z);return(0,f.jsx)(G,{in:!!(o&&o.expanded),...a,children:(0,f.jsx)("div",{ref:t,className:r,children:n})})});q.displayName="NavbarCollapse";var Y=n(2164);let z=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:a,label:o="Toggle navigation",as:s="button",onClick:u,...d}=e;n=(0,c.vE)(n,"navbar-toggler");let{onToggle:p,expanded:v}=(0,l.useContext)(X.Z)||{},m=(0,Y.Z)(e=>{u&&u(e),p&&p()});return"button"===s&&(d.type="button"),(0,f.jsx)(s,{...d,ref:t,onClick:m,"aria-label":o,className:i()(r,n,!v&&"collapsed"),children:a||(0,f.jsx)("span",{className:"".concat(n,"-icon")})})});z.displayName="NavbarToggle";var J=n(9898);let Q=new WeakMap,ee=(e,t)=>{if(!e||!t)return;let n=Q.get(t)||new Map;Q.set(t,n);let r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r},et=function(e){let t=Object.keys(e);function n(e,t){return e===t?t:e?`${e} and ${t}`:t}return function(r,a,o){let i;return"object"==typeof r?(i=r,o=a,a=!0):i={[r]:a=a||!0},function(e,t="undefined"==typeof window?void 0:window){let n=ee(e,t),[r,a]=(0,l.useState)(()=>!!n&&n.matches);return(0,J.Z)(()=>{let n=ee(e,t);if(!n)return a(!1);let r=Q.get(t),o=()=>{a(n.matches)};return n.refCount++,n.addListener(o),o(),()=>{n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}},[e]),r}((0,l.useMemo)(()=>Object.entries(i).reduce((r,[a,o])=>{if("up"===o||!0===o){let t;r=n(r,("number"==typeof(t=e[a])&&(t=`${t}px`),`(min-width: ${t})`))}if("down"===o||!0===o){let o;r=n(r,(o="number"==typeof(o=e[t[Math.min(t.indexOf(a)+1,t.length-1)]])?`${o-.2}px`:`calc(${o} - 0.2px)`,`(max-width: ${o})`))}return r},""),[JSON.stringify(i)]),o)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function en(e){void 0===e&&(e=p());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(t){return e.body}}function er(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var ea=n(596),eo=n(1032);let ei=(0,n(5604).PB)("modal-open");class el{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){return Math.abs(e.defaultView.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(x(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(ei,""),x(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(ei),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}var es=el;let eu=(0,l.createContext)(P?window:void 0);function ec(){return(0,l.useContext)(eu)}eu.Provider;let ef=(e,t)=>P?null==e?(t||p()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;var ed=function({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:a}){let o=(0,l.useRef)(null),i=(0,l.useRef)(t),s=(0,Y.Z)(n);(0,l.useEffect)(()=>{t?i.current=!0:s(o.current)},[t,s]);let u=(0,$.Z)(o,e.ref),c=(0,l.cloneElement)(e,{ref:u});return t?c:a||!i.current&&r?null:c};let ep=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"],ev=["component"],em=l.forwardRef((e,t)=>{let{component:n}=e,r=function(e){let{onEnter:t,onEntering:n,onEntered:r,onExit:a,onExiting:o,onExited:i,addEndListener:s,children:u}=e,c=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ep),{major:f}=function(){let e=l.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}(),d=f>=19?u.props.ref:u.ref,p=(0,l.useRef)(null),v=(0,$.Z)(p,"function"==typeof u?null:d),m=e=>t=>{e&&p.current&&e(p.current,t)},h=(0,l.useCallback)(m(t),[t]),g=(0,l.useCallback)(m(n),[n]),x=(0,l.useCallback)(m(r),[r]),E=(0,l.useCallback)(m(a),[a]),y=(0,l.useCallback)(m(o),[o]),b=(0,l.useCallback)(m(i),[i]),C=(0,l.useCallback)(m(s),[s]);return Object.assign({},c,{nodeRef:p},t&&{onEnter:h},n&&{onEntering:g},r&&{onEntered:x},a&&{onExit:E},o&&{onExiting:y},i&&{onExited:b},s&&{addEndListener:C},{children:"function"==typeof u?(e,t)=>u(e,Object.assign({},t,{ref:v})):(0,l.cloneElement)(u,{ref:v})})}(function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ev));return(0,f.jsx)(n,Object.assign({ref:t},r))});function eh({children:e,in:t,onExited:n,onEntered:r,transition:a}){let[o,i]=(0,l.useState)(!t);t&&o&&i(!1);let s=function({in:e,onTransition:t}){let n=(0,l.useRef)(null),r=(0,l.useRef)(!0),a=(0,Y.Z)(t);return(0,J.Z)(()=>{if(!n.current)return;let t=!1;return a({in:e,element:n.current,initial:r.current,isStale:()=>t}),()=>{t=!0}},[e,a]),(0,J.Z)(()=>(r.current=!1,()=>{r.current=!0}),[]),n}({in:!!t,onTransition:e=>{Promise.resolve(a(e)).then(()=>{e.isStale()||(e.in?null==r||r(e.element,e.initial):(i(!0),null==n||n(e.element)))},t=>{throw e.in||i(!0),t})}}),u=(0,$.Z)(s,e.ref);return o&&!t?null:(0,l.cloneElement)(e,{ref:u})}function eg(e,t,n){return e?(0,f.jsx)(em,Object.assign({},n,{component:e})):t?(0,f.jsx)(eh,Object.assign({},n,{transition:t})):(0,f.jsx)(ed,Object.assign({},n))}let ex=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"],eE=(0,l.forwardRef)((e,t)=>{let{show:n=!1,role:a="dialog",className:o,style:i,children:s,backdrop:u=!0,keyboard:c=!0,onBackdropClick:d,onEscapeKeyDown:p,transition:v,runTransition:m,backdropTransition:h,runBackdropTransition:g,autoFocus:x=!0,enforceFocus:E=!0,restoreFocus:y=!0,restoreFocusOptions:C,renderDialog:O,renderBackdrop:w=e=>(0,f.jsx)("div",Object.assign({},e)),manager:N,container:j,onShow:R,onHide:k=()=>{},onExit:T,onExited:S,onExiting:Z,onEnter:L,onEntering:D,onEntered:_}=e,A=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,ex),I=ec(),B=function(e,t){let n=ec(),[r,a]=(0,l.useState)(()=>ef(e,null==n?void 0:n.document));if(!r){let t=ef(e);t&&a(t)}return(0,l.useEffect)(()=>{},[void 0,r]),(0,l.useEffect)(()=>{let t=ef(e);t!==r&&a(t)},[e,r]),r}(j),F=function(e){let t=ec(),n=e||(r||(r=new es({ownerDocument:null==t?void 0:t.document})),r),a=(0,l.useRef)({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:(0,l.useCallback)(e=>{a.current.dialog=e},[]),setBackdropRef:(0,l.useCallback)(e=>{a.current.backdrop=e},[])})}(N),K=(0,ea.Z)(),$=(0,eo.Z)(n),[W,V]=(0,l.useState)(!n),H=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,()=>F,[F]),P&&!$&&n&&(H.current=en(null==I?void 0:I.document)),n&&W&&V(!1);let U=(0,Y.Z)(()=>{if(F.add(),Q.current=M(document,"keydown",z),J.current=M(document,"focus",()=>setTimeout(X),!0),R&&R(),x){var e,t;let n=en(null!=(e=null==(t=F.dialog)?void 0:t.ownerDocument)?e:null==I?void 0:I.document);F.dialog&&n&&!er(F.dialog,n)&&(H.current=n,F.dialog.focus())}}),G=(0,Y.Z)(()=>{if(F.remove(),null==Q.current||Q.current(),null==J.current||J.current(),y){var e;null==(e=H.current)||null==e.focus||e.focus(C),H.current=null}});(0,l.useEffect)(()=>{n&&B&&U()},[n,B,U]),(0,l.useEffect)(()=>{W&&G()},[W,G]),function(e){let t=function(e){let t=(0,l.useRef)(e);return t.current=e,t}(e);(0,l.useEffect)(()=>()=>t.current(),[])}(()=>{G()});let X=(0,Y.Z)(()=>{if(!E||!K()||!F.isTopModal())return;let e=en(null==I?void 0:I.document);F.dialog&&e&&!er(F.dialog,e)&&F.dialog.focus()}),q=(0,Y.Z)(e=>{e.target===e.currentTarget&&(null==d||d(e),!0===u&&k())}),z=(0,Y.Z)(e=>{c&&("Escape"===e.code||27===e.keyCode)&&F.isTopModal()&&(null==p||p(e),e.defaultPrevented||k())}),J=(0,l.useRef)(),Q=(0,l.useRef)();if(!B)return null;let ee=Object.assign({role:a,ref:F.setDialogRef,"aria-modal":"dialog"===a||void 0},A,{style:i,className:o,tabIndex:-1}),et=O?O(ee):(0,f.jsx)("div",Object.assign({},ee,{children:l.cloneElement(s,{role:"document"})}));et=eg(v,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:T,onExiting:Z,onExited:(...e)=>{V(!0),null==S||S(...e)},onEnter:L,onEntering:D,onEntered:_,children:et});let ei=null;return u&&(ei=eg(h,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ei=w({ref:F.setBackdropRef,onClick:q})})),(0,f.jsx)(f.Fragment,{children:b.createPortal((0,f.jsxs)(f.Fragment,{children:[ei,et]}),B)})});eE.displayName="Modal";var ey=Object.assign(eE,{Manager:es});let eb={[j]:"show",[R]:"show"},eC=l.forwardRef((e,t)=>{let{className:n,children:r,transitionClasses:a={},onEnter:o,...s}=e,u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},c=(0,l.useCallback)((e,t)=>{K(e),null==o||o(e,t)},[o]);return(0,f.jsx)(W,{ref:t,addEndListener:B,...u,onEnter:c,childRef:r.ref,children:(e,t)=>l.cloneElement(r,{...t,className:i()("fade",n,r.props.className,eb[e],a[e])})})});eC.displayName="Fade";let eO=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...o}=e;return r=(0,c.vE)(r,"offcanvas-body"),(0,f.jsx)(a,{ref:t,className:i()(n,r),...o})});eO.displayName="OffcanvasBody";let ew={[j]:"show",[R]:"show"},eN=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:a,in:o=!1,mountOnEnter:s=!1,unmountOnExit:u=!1,appear:d=!1,...p}=e;return n=(0,c.vE)(n,"offcanvas"),(0,f.jsx)(W,{ref:t,addEndListener:B,in:o,mountOnEnter:s,unmountOnExit:u,appear:d,...p,childRef:a.ref,children:(e,t)=>l.cloneElement(a,{...t,className:i()(r,a.props.className,(e===j||e===k)&&"".concat(n,"-toggling"),ew[e])})})});eN.displayName="OffcanvasToggling";let ej=l.createContext({onHide(){}});var eR=n(1448),ek=n.n(eR);let eT={"aria-label":ek().string,onClick:ek().func,variant:ek().oneOf(["white"])},eS=l.forwardRef((e,t)=>{let{className:n,variant:r,"aria-label":a="Close",...o}=e;return(0,f.jsx)("button",{ref:t,type:"button",className:i()("btn-close",r&&"btn-close-".concat(r),n),"aria-label":a,...o})});eS.displayName="CloseButton",eS.propTypes=eT;let eP=l.forwardRef((e,t)=>{let{closeLabel:n="Close",closeVariant:r,closeButton:a=!1,onHide:o,children:i,...s}=e,u=(0,l.useContext)(ej),c=(0,Y.Z)(()=>{null==u||u.onHide(),null==o||o()});return(0,f.jsxs)("div",{ref:t,...s,children:[i,a&&(0,f.jsx)(eS,{"aria-label":n,variant:r,onClick:c})]})}),eZ=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,closeLabel:a="Close",closeButton:o=!1,...l}=e;return n=(0,c.vE)(n,"offcanvas-header"),(0,f.jsx)(eP,{ref:t,...l,className:i()(r,n),closeLabel:a,closeButton:o})});eZ.displayName="OffcanvasHeader";let eL=l.forwardRef((e,t)=>(0,f.jsx)("div",{...e,ref:t,className:i()(e.className,"h5")})),eD=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a=eL,...o}=e;return r=(0,c.vE)(r,"offcanvas-title"),(0,f.jsx)(a,{ref:t,className:i()(n,r),...o})});eD.displayName="OffcanvasTitle";var e_=n(3851);function eA(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}let eM={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class eI extends es{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,x(t,{[e]:"".concat(parseFloat(x(t,e))+n,"px")})}restore(e,t){let n=t.dataset[e];void 0!==n&&(delete t.dataset[e],x(t,{[e]:n}))}setContainerStyle(e){var t,n;super.setContainerStyle(e);let r=this.getElement();if(n="modal-open",(t=r).classList?t.classList.add(n):(t.classList?n&&t.classList.contains(n):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" "))||("string"==typeof t.className?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n)),!e.scrollBarWidth)return;let a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";(0,e_.Z)(r,eM.FIXED_CONTENT).forEach(t=>this.adjustAndStore(a,t,e.scrollBarWidth)),(0,e_.Z)(r,eM.STICKY_CONTENT).forEach(t=>this.adjustAndStore(o,t,-e.scrollBarWidth)),(0,e_.Z)(r,eM.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(o,t,e.scrollBarWidth))}removeContainerStyle(e){var t;super.removeContainerStyle(e);let n=this.getElement();t="modal-open",n.classList?n.classList.remove(t):"string"==typeof n.className?n.className=eA(n.className,t):n.setAttribute("class",eA(n.className&&n.className.baseVal||"",t));let r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";(0,e_.Z)(n,eM.FIXED_CONTENT).forEach(e=>this.restore(r,e)),(0,e_.Z)(n,eM.STICKY_CONTENT).forEach(e=>this.restore(a,e)),(0,e_.Z)(n,eM.NAVBAR_TOGGLER).forEach(e=>this.restore(a,e))}}function eB(e){return(0,f.jsx)(eN,{...e})}function eF(e){return(0,f.jsx)(eC,{...e})}let eK=l.forwardRef((e,t)=>{let{bsPrefix:n,className:r,children:o,"aria-labelledby":s,placement:u="start",responsive:d,show:p=!1,backdrop:v=!0,keyboard:m=!0,scroll:h=!1,onEscapeKeyDown:g,onShow:x,onHide:E,container:y,autoFocus:b=!0,enforceFocus:C=!0,restoreFocus:O=!0,restoreFocusOptions:w,onEntered:N,onExit:j,onExiting:R,onEnter:k,onEntering:T,onExited:S,backdropClassName:P,manager:Z,renderStaticNode:L=!1,...D}=e,_=(0,l.useRef)();n=(0,c.vE)(n,"offcanvas");let{onToggle:A}=(0,l.useContext)(X.Z)||{},[M,I]=(0,l.useState)(!1),B=et(d||"xs","up");(0,l.useEffect)(()=>{I(d?p&&!B:p)},[p,d,B]);let F=(0,Y.Z)(()=>{null==A||A(),null==E||E()}),K=(0,l.useMemo)(()=>({onHide:F}),[F]),$=(0,l.useCallback)(e=>(0,f.jsx)("div",{...e,className:i()("".concat(n,"-backdrop"),P)}),[P,n]),W=e=>(0,f.jsx)("div",{...e,...D,className:i()(r,d?"".concat(n,"-").concat(d):n,"".concat(n,"-").concat(u)),"aria-labelledby":s,children:o});return(0,f.jsxs)(f.Fragment,{children:[!M&&(d||L)&&W({}),(0,f.jsx)(ej.Provider,{value:K,children:(0,f.jsx)(ey,{show:M,ref:t,backdrop:v,container:y,keyboard:m,autoFocus:b,enforceFocus:C&&!h,restoreFocus:O,restoreFocusOptions:w,onEscapeKeyDown:g,onShow:x,onHide:F,onEnter:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility="visible"),null==k||k(e,...n)},onEntering:T,onEntered:N,onExit:j,onExiting:R,onExited:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e&&(e.style.visibility=""),null==S||S(...n)},manager:Z||(h?(_.current||(_.current=new eI({handleContainerOverflow:!1})),_.current):(a||(a=new eI(void 0)),a)),transition:eB,backdropTransition:eF,renderBackdrop:$,renderDialog:W})})]})});eK.displayName="Offcanvas";var e$=Object.assign(eK,{Body:eO,Header:eZ,Title:eD});let eW=l.forwardRef((e,t)=>{let n=(0,l.useContext)(X.Z);return(0,f.jsx)(e$,{ref:t,show:!!(null!=n&&n.expanded),...e,renderStaticNode:!0})});eW.displayName="NavbarOffcanvas";let eV=l.forwardRef((e,t)=>{let{className:n,bsPrefix:r,as:a="span",...o}=e;return r=(0,c.vE)(r,"navbar-text"),(0,f.jsx)(a,{ref:t,className:i()(n,r),...o})});eV.displayName="NavbarText";let eH=l.forwardRef((e,t)=>{let{bsPrefix:n,expand:r=!0,variant:a="light",bg:o,fixed:d,sticky:p,className:v,as:m="nav",expanded:h,onToggle:g,onSelect:x,collapseOnSelect:E=!1,...y}=(0,u.Ch)(e,{expanded:"onToggle"}),b=(0,c.vE)(n,"navbar"),C=(0,l.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];null==x||x(...t),E&&h&&(null==g||g(!1))},[x,E,h,g]);void 0===y.role&&"nav"!==m&&(y.role="navigation");let O="".concat(b,"-expand");"string"==typeof r&&(O="".concat(O,"-").concat(r));let w=(0,l.useMemo)(()=>({onToggle:()=>null==g?void 0:g(!h),bsPrefix:b,expanded:!!h,expand:r}),[b,h,r,g]);return(0,f.jsx)(X.Z.Provider,{value:w,children:(0,f.jsx)(s.Z.Provider,{value:C,children:(0,f.jsx)(m,{ref:t,...y,className:i()(v,b,r&&O,a&&"".concat(b,"-").concat(a),o&&"bg-".concat(o),p&&"sticky-".concat(p),d&&"fixed-".concat(d))})})})});eH.displayName="Navbar";var eU=Object.assign(eH,{Brand:d,Collapse:q,Offcanvas:eW,Text:eV,Toggle:z})},3907:function(e,t,n){"use strict";let r=n(2265).createContext(null);r.displayName="NavbarContext",t.Z=r},2574:function(e,t,n){"use strict";n.d(t,{vE:function(){return l}});var r=n(2265);n(7437);let a=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:i}=a;function l(e,t){let{prefixes:n}=(0,r.useContext)(a);return e||n[t]||t}},505:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}n.d(t,{Ch:function(){return s}});var a=n(3950),o=n(2265);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function l(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce(function(n,s){var u,c,f,d,p,v,m,h,g=n[i(s)],x=n[s],E=(0,a.Z)(n,[i(s),s].map(l)),y=t[s],b=(u=e[y],c=(0,o.useRef)(void 0!==x),d=(f=(0,o.useState)(g))[0],p=f[1],v=void 0!==x,m=c.current,c.current=v,!v&&m&&d!==g&&p(g),[v?x:d,(0,o.useCallback)(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];u&&u.apply(void 0,[e].concat(n)),p(e)},[u])]),C=b[0],O=b[1];return r({},E,((h={})[s]=C,h[y]=O,h))},e)}n(9284)},9252:function(){},594:function(){},6800:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}(n)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},3950:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n.d(t,{Z:function(){return r}})}}]);