import{av as Q,p as y,g as ee,l as H,aw as He,v as je,c as d,b as h,q as l,ax as z,ay as he,az as se,aA as De,aB as We,aC as Fe,aD as L,X as Ae,B as be,al as Me,am as ye,aE as te,t as q,s as R,r as ne,x as A,aF as qe,ar as Xe,j as pe,P as re,S as Ue,$ as _e,Q as Ye,L as ie,R as Ke,m as Se,n as Ce,aG as Ge,aH as Qe,aI as Je,u as ke,z as Ze,w as oe,ak as et,aJ as tt,aK as le,a as ue,ap as nt,aL as at,aM as ce}from"./index-BQpyQsdg.js";const st=["top","bottom"],rt=["start","end","left","right"];function it(e,t){let[n,a]=e.split(" ");return a||(a=Q(st,n)?"start":Q(rt,n)?"top":"center"),{side:de(n,t),align:de(a,t)}}function de(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const U=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Y(e){const t=ee("useRender");t.render=e}const Nt="/assets/logo-DsrTQlsL.svg",we=y({tag:{type:String,default:"div"}},"tag"),ot=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Vt=H(!1)({name:"VDefaultsProvider",props:ot(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=He(e);return je(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}}),lt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ut(e){return{dimensionStyles:d(()=>{const n={},a=h(e.height),r=h(e.maxHeight),s=h(e.maxWidth),i=h(e.minHeight),o=h(e.minWidth),u=h(e.width);return a!=null&&(n.height=a),r!=null&&(n.maxHeight=r),s!=null&&(n.maxWidth=s),i!=null&&(n.minHeight=i),o!=null&&(n.minWidth=o),u!=null&&(n.width=u),n})}}function ct(e){return{aspectStyles:d(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const xe=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...U(),...lt()},"VResponsive"),ve=H()({name:"VResponsive",props:xe(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=ct(e),{dimensionStyles:r}=ut(e);return Y(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function ae(e){return he(()=>{const t=[],n={};if(e.value.background)if(se(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&De(e.value.background)){const a=We(e.value.background);if(a.a==null||a.a===1){const r=Fe(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(se(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Le(e,t){const n=d(()=>({text:z(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=ae(n);return{textColorClasses:a,textColorStyles:r}}function M(e,t){const n=d(()=>({background:z(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=ae(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const Pe=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Te(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:d(()=>{const a=z(e)?e.value:e.rounded,r=z(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);else(r||a===!1)&&s.push("rounded-0");return s})}}const dt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),F=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,group:s,...i}=e,{component:o=s?Me:ye,...u}=typeof a=="object"?a:{};return Ae(o,be(typeof a=="string"?{name:r?"":a}:u,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[v,g]=c;return g!==void 0})),i),n)};function vt(e,t){if(!te)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!c)return;const v=o.some(b=>b.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||v||c.init)&&r(v,o,u),v&&n.once?Ee(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Ee(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const ft={mounted:vt,unmounted:Ee},mt=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...xe(),...U(),...Pe(),...dt()},"VImg"),It=H()({name:"VImg",directives:{intersect:ft},props:mt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=M(q(e,"color")),{roundedClasses:i}=Te(e),o=ee("VImg"),u=R(""),c=ne(),v=R(e.eager?"loading":"idle"),g=R(),b=R(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=d(()=>f.value.aspect||g.value/b.value||0);A(()=>e.src,()=>{w(v.value!=="idle")}),A(_,(m,p)=>{!m&&p&&c.value&&C(c.value)}),qe(()=>w());function w(m){if(!(e.eager&&m)&&!(te&&!m&&!e.eager)){if(v.value="loading",f.value.lazySrc){const p=new Image;p.src=f.value.lazySrc,C(p,null)}f.value.src&&Xe(()=>{var p;n("loadstart",((p=c.value)==null?void 0:p.currentSrc)||f.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||P(),v.value==="error")return;_.value||C(c.value,null),v.value==="loading"&&j()}else _.value||C(c.value),D()})})}}function j(){var m;o.isUnmounted||(D(),C(c.value),v.value="loaded",n("load",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function P(){var m;o.isUnmounted||(v.value="error",n("error",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function D(){const m=c.value;m&&(u.value=m.currentSrc||m.src)}let x=-1;pe(()=>{clearTimeout(x)});function C(m){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(x),o.isUnmounted)return;const{naturalHeight:B,naturalWidth:W}=m;B||W?(g.value=W,b.value=B):!m.complete&&v.value==="loading"&&p!=null?x=window.setTimeout(k,p):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const T=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var k;if(!f.value.src||v.value==="idle")return null;const m=l("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:j,onError:P},null),p=(k=a.sources)==null?void 0:k.call(a);return l(F,{transition:e.transition,appear:!0},{default:()=>[re(p?l("picture",{class:"v-img__picture"},[p,m]):m,[[Ye,v.value==="loaded"]])]})},E=()=>l(F,{transition:e.transition},{default:()=>[f.value.lazySrc&&v.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),K=()=>a.placeholder?l(F,{transition:e.transition,appear:!0},{default:()=>[(v.value==="loading"||v.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,$=()=>a.error?l(F,{transition:e.transition,appear:!0},{default:()=>[v.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,G=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,V=R(!1);{const m=A(_,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{V.value=!0})}),m())})}return Y(()=>{const m=ve.filterProps(e);return re(l(ve,be({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!V.value},r.value,i.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},s.value,e.style]},m,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(_e,null,[l(N,null,null),l(E,null,null),l(G,null,null),l(K,null,null),l($,null,null)]),default:a.default}),[[Ue("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:c,state:v,naturalWidth:g,naturalHeight:b}}}),Ot=y({border:[Boolean,Number,String]},"border");function Ht(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:d(()=>{const a=z(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const jt=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Dt(e){return{elevationClasses:d(()=>{const n=z(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const gt=[null,"default","comfortable","compact"],Wt=y({density:{type:String,default:"default",validator:e=>gt.includes(e)}},"density");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:d(()=>`${t}--density-${e.density}`)}}const ht=["elevated","flat","tonal","outlined","text","plain"];function At(e,t){return l(_e,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const Mt=y({color:String,variant:{type:String,default:"elevated",validator:e=>ht.includes(e)}},"variant");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const n=d(()=>{const{variant:s}=ie(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=ae(d(()=>{const{variant:s,color:i}=ie(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const bt=["x-small","small","default","large","x-large"],yt=y({size:{type:[String,Number],default:"default"}},"size");function pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return he(()=>{let n,a;return Q(bt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const _t=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ke,...U(),...yt(),...we({tag:"i"}),...Se()},"VIcon"),Xt=H()({name:"VIcon",props:_t(),setup(e,t){let{attrs:n,slots:a}=t;const r=ne(),{themeClasses:s}=Ce(e),{iconData:i}=Ge(d(()=>r.value||e.icon)),{sizeClasses:o}=pt(e),{textColorClasses:u,textColorStyles:c}=Le(q(e,"color"));return Y(()=>{var b,f;const v=(b=a.default)==null?void 0:b.call(a);v&&(r.value=(f=Qe(v).filter(_=>_.type===Je&&_.children&&typeof _.children=="string")[0])==null?void 0:f.children);const g=!!(n.onClick||n.onClickOnce);return l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[v]})}),{}}});function St(e,t){const n=ne(),a=R(!1);if(te){const r=new IntersectionObserver(s=>{a.value=!!s.find(i=>i.isIntersecting)},t);pe(()=>{r.disconnect()}),A(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const fe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ct=y({location:String},"location");function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ke();return{locationStyles:d(()=>{if(!e.location)return{};const{side:s,align:i}=it(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const u={};return s!=="center"&&(t?u[fe[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),i!=="center"?t?u[fe[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const wt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...U(),...Ct({location:"top"}),...Pe(),...we(),...Se()},"VProgressLinear"),xt=H()({name:"VProgressLinear",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,t){var V;let{slots:n}=t;const a=Ze(e,"modelValue"),{isRtl:r,rtlClasses:s}=ke(),{themeClasses:i}=Ce(e),{locationStyles:o}=kt(e),{textColorClasses:u,textColorStyles:c}=Le(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:g}=M(d(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=M(d(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:_,backgroundColorStyles:w}=M(e,"color"),{roundedClasses:j}=Te(e),{intersectionRef:P,isIntersecting:D}=St(),x=d(()=>parseFloat(e.max)),C=d(()=>parseFloat(e.height)),T=d(()=>oe(parseFloat(e.bufferValue)/x.value*100,0,100)),N=d(()=>oe(parseFloat(a.value)/x.value*100,0,100)),E=d(()=>r.value!==e.reverse),K=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),$=et&&((V=window.matchMedia)==null?void 0:V.call(window,"(forced-colors: active)").matches);function G(m){if(!P.value)return;const{left:p,right:k,width:B}=P.value.getBoundingClientRect(),W=E.value?B-m.clientX+(k-B):m.clientX-p;a.value=Math.round(W/B*x.value)}return Y(()=>l(e.tag,{ref:P,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&D.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},j.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(C.value):0,"--v-progress-linear-height":h(C.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:N.value,onClick:e.clickable&&G},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[E.value?"left":"right"]:h(-C.value),borderTop:`${h(C.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(C.value/4)})`,width:h(100-T.value,"%"),"--v-progress-linear-stream-to":h(C.value*(E.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",$?void 0:v.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),l("div",{class:["v-progress-linear__buffer",$?void 0:b.value],style:[f.value,{opacity:parseFloat(e.bufferOpacity),width:h(T.value,"%")}]},null),l(ye,{name:K.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>l("div",{key:m,class:["v-progress-linear__indeterminate",m,$?void 0:_.value],style:w.value},null))]):l("div",{class:["v-progress-linear__determinate",$?void 0:_.value],style:[w.value,{width:h(N.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:N.value,buffer:T.value})])]})),{}}}),Ut=y({loading:[Boolean,String]},"loader");function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{loaderClasses:d(()=>({[`${t}--loading`]:e.loading}))}}function Kt(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(xt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Lt=["static","relative","fixed","absolute","sticky"],Gt=y({position:{type:String,validator:e=>Lt.includes(e)}},"position");function Qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{positionClasses:d(()=>e.position?`${t}--${e.position}`:void 0)}}function Pt(){const e=ee("useRoute");return d(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Jt(e,t){var g,b;const n=tt("RouterLink"),a=d(()=>!!(e.href||e.to)),r=d(()=>(a==null?void 0:a.value)||le(t,"click")||le(e,"click"));if(typeof n=="string"||!("useLink"in n)){const f=q(e,"href");return{isLink:a,isClickable:r,href:f,linkProps:ue({href:f})}}const s=d(()=>({...e,to:q(()=>e.to||"")})),i=n.useLink(s.value),o=d(()=>e.to?i:void 0),u=Pt(),c=d(()=>{var f,_,w;return o.value?e.exact?u.value?((w=o.value.isExactActive)==null?void 0:w.value)&&nt(o.value.route.value.query,u.value.query):((_=o.value.isExactActive)==null?void 0:_.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),v=d(()=>{var f;return e.to?(f=o.value)==null?void 0:f.route.value.href:e.href});return{isLink:a,isClickable:r,isActive:c,route:(g=o.value)==null?void 0:g.route,navigate:(b=o.value)==null?void 0:b.navigate,href:v,linkProps:ue({href:v,"aria-current":d(()=>c.value?"page":void 0)})}}const Zt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),J=Symbol("rippleStop"),Tt=80;function me(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function $e(e){return e.constructor.name==="KeyboardEvent"}const Et=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!$e(e)){const b=t.getBoundingClientRect(),f=Z(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,r=f.clientY-b.top}let s=0,i=.3;(g=t._ripple)!=null&&g.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,v=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:c,y:v,centerX:o,centerY:u}},X={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:u,centerX:c,centerY:v}=Et(e,t,n),g=`${s*2}px`;r.className="v-ripple__animation",r.style.width=g,r.style.height=g,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),me(r,`translate(${o}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),me(r,`translate(${c}, ${v}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Be(e){return typeof e>"u"||!!e}function I(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[J])){if(e[J]=!0,Z(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||$e(e),n._ripple.class&&(t.class=n._ripple.class),Z(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{X.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Tt)}else X.show(e,n,t)}}function ge(e){e[J]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),X.hide(t)}}function Re(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function ze(e){!O&&(e.keyCode===ce.enter||e.keyCode===ce.space)&&(O=!0,I(e))}function Ne(e){O=!1,S(e)}function Ve(e){O&&(O=!1,S(e))}function Ie(e,t,n){const{value:a,modifiers:r}=t,s=Be(a);if(s||X.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,at(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",ge,{passive:!0}),e.addEventListener("mousedown",ge);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Re,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",I),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",ze),e.addEventListener("keyup",Ne),e.addEventListener("blur",Ve),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&Oe(e)}function Oe(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Re),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",ze),e.removeEventListener("keyup",Ne),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Ve)}function $t(e,t){Ie(e,t,!1)}function Bt(e){delete e._ripple,Oe(e)}function Rt(e,t){if(t.value===t.oldValue)return;const n=Be(t.oldValue);Ie(e,t,n)}const en={mounted:$t,unmounted:Bt,updated:Rt};export{kt as A,Qt as B,Jt as C,qt as D,At as E,Kt as L,en as R,It as V,Nt as _,we as a,Ot as b,jt as c,Pe as d,M as e,Ht as f,Dt as g,Te as h,Vt as i,lt as j,ut as k,Xt as l,U as m,Wt as n,Mt as o,Ft as p,yt as q,pt as r,Le as s,St as t,Y as u,Ut as v,Ct as w,Gt as x,Zt as y,Yt as z};
