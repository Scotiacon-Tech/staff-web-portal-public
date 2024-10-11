import{au as U,p as y,g as G,l as N,av as Ie,v as Oe,c as d,b as g,q as o,aw as V,ax as fe,ay as re,az as De,aA as He,aB as We,aC as E,W as je,B as ge,am as he,aD as J,t as Z,s as R,r as ee,x as W,aE as Ae,aq as qe,j as ye,P as se,S as Fe,_ as be,Q as Me,K as ie,R as Xe,m as pe,n as _e,aF as Ue,aG as Ye,aH as Ke,u as Se,z as Qe,aI as Ge,aJ as oe,ao as Je,aK as Ze,aL as le}from"./index-2ndd5mQr.js";const et=["top","bottom"],tt=["start","end","left","right"];function nt(e,t){let[n,a]=e.split(" ");return a||(a=U(et,n)?"start":U(tt,n)?"top":"center"),{side:ue(n,t),align:ue(a,t)}}function ue(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const A=y({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function q(e){const t=G("useRender");t.render=e}const Rt="/assets/logo-DsrTQlsL.svg",Ce=y({tag:{type:String,default:"div"}},"tag"),at=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),zt=N(!1)({name:"VDefaultsProvider",props:at(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:r,root:i,scoped:u}=Ie(e);return Oe(a,{reset:r,root:i,scoped:u,disabled:s}),()=>{var v;return(v=n.default)==null?void 0:v.call(n)}}}),rt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function st(e){return{dimensionStyles:d(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function it(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const we=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...A(),...rt()},"VResponsive"),ce=N()({name:"VResponsive",props:we(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=it(e),{dimensionStyles:s}=st(e);return q(()=>{var r;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function te(e){return fe(()=>{const t=[],n={};if(e.value.background)if(re(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&De(e.value.background)){const a=He(e.value.background);if(a.a==null||a.a===1){const s=We(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(re(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function ke(e,t){const n=d(()=>({text:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=te(n);return{textColorClasses:a,textColorStyles:s}}function Y(e,t){const n=d(()=>({background:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=te(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const xe=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{roundedClasses:d(()=>{const a=V(e)?e.value:e.rounded,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);return s})}}const ot=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),H=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,...r}=e,{component:i=he,...u}=typeof a=="object"?a:{};return je(i,ge(typeof a=="string"?{name:s?"":a}:u,r,{disabled:s}),n)};function lt(e,t){if(!J)return;const n=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var h;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const l=(h=e._observe)==null?void 0:h[t.instance.$.uid];if(!l)return;const m=u.some(b=>b.isIntersecting);s&&(!n.quiet||l.init)&&(!n.once||m||l.init)&&s(m,u,v),m&&n.once?Te(e,t):l.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Te(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const ut={mounted:lt,unmounted:Te},ct=ut,dt=y({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...we(),...A(),...xe(),...ot()},"VImg"),Bt=N()({name:"VImg",directives:{intersect:ct},props:dt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:r}=Y(Z(e,"color")),{roundedClasses:i}=Le(e),u=G("VImg"),v=R(""),l=ee(),m=R(e.eager?"loading":"idle"),h=R(),b=R(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),k=d(()=>f.value.aspect||h.value/b.value||0);W(()=>e.src,()=>{x(m.value!=="idle")}),W(k,(c,p)=>{!c&&p&&l.value&&C(l.value)}),Ae(()=>x());function x(c){if(!(e.eager&&c)&&!(J&&!c&&!e.eager)){if(m.value="loading",f.value.lazySrc){const p=new Image;p.src=f.value.lazySrc,C(p,null)}f.value.src&&qe(()=>{var p;n("loadstart",((p=l.value)==null?void 0:p.currentSrc)||f.value.src),setTimeout(()=>{var w;if(!u.isUnmounted)if((w=l.value)!=null&&w.complete){if(l.value.naturalWidth||$(),m.value==="error")return;k.value||C(l.value,null),m.value==="loading"&&I()}else k.value||C(l.value),S()})})}}function I(){var c;u.isUnmounted||(S(),C(l.value),m.value="loaded",n("load",((c=l.value)==null?void 0:c.currentSrc)||f.value.src))}function $(){var c;u.isUnmounted||(m.value="error",n("error",((c=l.value)==null?void 0:c.currentSrc)||f.value.src))}function S(){const c=l.value;c&&(v.value=c.currentSrc||c.src)}let L=-1;ye(()=>{clearTimeout(L)});function C(c){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const w=()=>{if(clearTimeout(L),u.isUnmounted)return;const{naturalHeight:ne,naturalWidth:ae}=c;ne||ae?(h.value=ae,b.value=ne):!c.complete&&m.value==="loading"&&p!=null?L=window.setTimeout(w,p):(c.currentSrc.endsWith(".svg")||c.currentSrc.startsWith("data:image/svg+xml"))&&(h.value=1,b.value=1)};w()}const T=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),F=()=>{var w;if(!f.value.src||m.value==="idle")return null;const c=o("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:I,onError:$},null),p=(w=a.sources)==null?void 0:w.call(a);return o(H,{transition:e.transition,appear:!0},{default:()=>[se(p?o("picture",{class:"v-img__picture"},[p,c]):c,[[Me,m.value==="loaded"]])]})},O=()=>o(H,{transition:e.transition},{default:()=>[f.value.lazySrc&&m.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),M=()=>a.placeholder?o(H,{transition:e.transition,appear:!0},{default:()=>[(m.value==="loading"||m.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,P=()=>a.error?o(H,{transition:e.transition,appear:!0},{default:()=>[m.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,X=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=R(!1);{const c=W(k,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),c())})}return q(()=>{const c=ce.filterProps(e);return se(o(ce,ge({class:["v-img",{"v-img--booting":!D.value},s.value,i.value,e.class],style:[{width:g(e.width==="auto"?h.value:e.width)},r.value,e.style]},c,{aspectRatio:k.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(be,null,[o(F,null,null),o(O,null,null),o(X,null,null),o(M,null,null),o(P,null,null)]),default:a.default}),[[Fe("intersect"),{handler:x,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:l,state:m,naturalWidth:h,naturalHeight:b}}}),Nt=y({border:[Boolean,Number,String]},"border");function Vt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{borderClasses:d(()=>{const a=V(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`border-${r}`);return s})}}const It=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ot(e){return{elevationClasses:d(()=>{const n=V(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const vt=[null,"default","comfortable","compact"],Dt=y({density:{type:String,default:"default",validator:e=>vt.includes(e)}},"density");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const mt=["elevated","flat","tonal","outlined","text","plain"];function Wt(e,t){return o(be,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const jt=y({color:String,variant:{type:String,default:"elevated",validator:e=>mt.includes(e)}},"variant");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();const n=d(()=>{const{variant:r}=ie(e);return`${t}--variant-${r}`}),{colorClasses:a,colorStyles:s}=te(d(()=>{const{variant:r,color:i}=ie(e);return{[["elevated","flat"].includes(r)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const ft=["x-small","small","default","large","x-large"],gt=y({size:{type:[String,Number],default:"default"}},"size");function ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return fe(()=>{let n,a;return U(ft,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:g(e.size),height:g(e.size)}),{sizeClasses:n,sizeStyles:a}})}const yt=y({color:String,start:Boolean,end:Boolean,icon:Xe,...A(),...gt(),...Ce({tag:"i"}),...pe()},"VIcon"),qt=N()({name:"VIcon",props:yt(),setup(e,t){let{attrs:n,slots:a}=t;const s=ee(),{themeClasses:r}=_e(e),{iconData:i}=Ue(d(()=>s.value||e.icon)),{sizeClasses:u}=ht(e),{textColorClasses:v,textColorStyles:l}=ke(Z(e,"color"));return q(()=>{var h,b;const m=(h=a.default)==null?void 0:h.call(a);return m&&(s.value=(b=Ye(m).filter(f=>f.type===Ke&&f.children&&typeof f.children=="string")[0])==null?void 0:b.children),o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,u.value,v.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},l.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function bt(e,t){const n=ee(),a=R(!1);if(J){const s=new IntersectionObserver(r=>{e==null||e(r,s),a.value=!!r.find(i=>i.isIntersecting)},t);ye(()=>{s.disconnect()}),W(n,(r,i)=>{i&&(s.unobserve(i),a.value=!1),r&&s.observe(r)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const de={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},pt=y({location:String},"location");function _t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Se();return{locationStyles:d(()=>{if(!e.location)return{};const{side:r,align:i}=nt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function u(l){return n?n(l):0}const v={};return r!=="center"&&(t?v[de[r]]=`calc(100% - ${u(r)}px)`:v[r]=0),i!=="center"?t?v[de[i]]=`calc(100% - ${u(i)}px)`:v[i]=0:(r==="center"?v.top=v.left="50%":v[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",v.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),v})}}const St=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...pt({location:"top"}),...xe(),...Ce(),...pe()},"VProgressLinear"),Ct=N()({name:"VProgressLinear",props:St(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Qe(e,"modelValue"),{isRtl:s,rtlClasses:r}=Se(),{themeClasses:i}=_e(e),{locationStyles:u}=_t(e),{textColorClasses:v,textColorStyles:l}=ke(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:h}=Y(d(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=Y(e,"color"),{roundedClasses:k}=Le(e),{intersectionRef:x,isIntersecting:I}=bt(),$=d(()=>parseInt(e.max,10)),S=d(()=>parseInt(e.height,10)),L=d(()=>parseFloat(e.bufferValue)/$.value*100),C=d(()=>parseFloat(a.value)/$.value*100),T=d(()=>s.value!==e.reverse),F=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),O=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function M(P){if(!x.value)return;const{left:X,right:D,width:c}=x.value.getBoundingClientRect(),p=T.value?c-P.clientX+(D-c):P.clientX-X;a.value=Math.round(p/c*$.value)}return q(()=>o(e.tag,{ref:x,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&I.value,"v-progress-linear--reverse":T.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},k.value,i.value,r.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(S.value):0,"--v-progress-linear-height":g(S.value),...u.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:C.value,onClick:e.clickable&&M},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",v.value],style:{...l.value,[T.value?"left":"right"]:g(-S.value),borderTop:`${g(S.value/2)} dotted`,opacity:O.value,top:`calc(50% - ${g(S.value/4)})`,width:g(100-L.value,"%"),"--v-progress-linear-stream-to":g(S.value*(T.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",m.value],style:[h.value,{opacity:O.value,width:g(e.stream?L.value:100,"%")}]},null),o(he,{name:F.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(P=>o("div",{key:P,class:["v-progress-linear__indeterminate",P,b.value],style:f.value},null))]):o("div",{class:["v-progress-linear__determinate",b.value],style:[f.value,{width:g(C.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:C.value,buffer:L.value})])]})),{}}}),Ft=y({loading:[Boolean,String]},"loader");function Mt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Xt(e,t){var a;let{slots:n}=t;return o("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||o(Ct,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const wt=["static","relative","fixed","absolute","sticky"],Ut=y({position:{type:String,validator:e=>wt.includes(e)}},"position");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function kt(){const e=G("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Kt(e,t){const n=Ge("RouterLink"),a=d(()=>!!(e.href||e.to)),s=d(()=>(a==null?void 0:a.value)||oe(t,"click")||oe(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:s,href:Z(e,"href")};const r=e.to?n.useLink(e):void 0,i=kt();return{isLink:a,isClickable:s,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&d(()=>{var u,v,l;return e.exact?i.value?((l=r.isExactActive)==null?void 0:l.value)&&Je(r.route.value.query,i.value.query):(v=r.isExactActive)==null?void 0:v.value:(u=r.isActive)==null?void 0:u.value}),href:d(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const Qt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),K=Symbol("rippleStop"),xt=80;function ve(e,t){e.style.transform=t,e.style.webkitTransform=t}function Q(e){return e.constructor.name==="TouchEvent"}function Pe(e){return e.constructor.name==="KeyboardEvent"}const Lt=function(e,t){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Pe(e)){const b=t.getBoundingClientRect(),f=Q(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,s=f.clientY-b.top}let r=0,i=.3;(h=t._ripple)!=null&&h.circle?(i=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((a-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-r*2)/2}px`,v=`${(t.clientHeight-r*2)/2}px`,l=n.center?u:`${a-r}px`,m=n.center?v:`${s-r}px`;return{radius:r,scale:i,x:l,y:m,centerX:u,centerY:v}},j={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:r,scale:i,x:u,y:v,centerX:l,centerY:m}=Lt(e,t,n),h=`${r*2}px`;s.className="v-ripple__animation",s.style.width=h,s.style.height=h,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ve(s,`translate(${u}, ${v}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ve(s,`translate(${l}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=n.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Ee(e){return typeof e>"u"||!!e}function z(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[K])){if(e[K]=!0,Q(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Pe(e),n._ripple.class&&(t.class=n._ripple.class),Q(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{j.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},xt)}else j.show(e,n,t)}}function me(e){e[K]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),j.hide(t)}}function $e(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let B=!1;function Re(e){!B&&(e.keyCode===le.enter||e.keyCode===le.space)&&(B=!0,z(e))}function ze(e){B=!1,_(e)}function Be(e){B&&(B=!1,_(e))}function Ne(e,t,n){const{value:a,modifiers:s}=t,r=Ee(a);if(r||j.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=r,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ze(a)&&a.class&&(e._ripple.class=a.class),r&&!n){if(s.stop){e.addEventListener("touchstart",me,{passive:!0}),e.addEventListener("mousedown",me);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",$e,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",z),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Re),e.addEventListener("keyup",ze),e.addEventListener("blur",Be),e.addEventListener("dragstart",_,{passive:!0})}else!r&&n&&Ve(e)}function Ve(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",$e),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Re),e.removeEventListener("keyup",ze),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Be)}function Tt(e,t){Ne(e,t,!1)}function Pt(e){delete e._ripple,Ve(e)}function Et(e,t){if(t.value===t.oldValue)return;const n=Ee(t.oldValue);Ne(e,t,n)}const Gt={mounted:Tt,unmounted:Pt,updated:Et};export{Mt as A,_t as B,Yt as C,Kt as D,Wt as E,Xt as L,Gt as R,Bt as V,Rt as _,Ce as a,Nt as b,It as c,xe as d,Y as e,Vt as f,Ot as g,Le as h,zt as i,qt as j,Dt as k,jt as l,A as m,Ht as n,gt as o,ht as p,ke as q,bt as r,rt as s,Ft as t,q as u,pt as v,Ut as w,Qt as x,At as y,st as z};