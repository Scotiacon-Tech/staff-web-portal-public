import{e as P,aj as ne,v as q,x as ae,ak as V,r as se,p as D,q as B,b as c,y as z,G as $,k as W,s as X,o as ue,n as _,C as le,l as ie,al as re,am as ce}from"./index-b0FTYAfH.js";function ve(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const v=P(),u=P();if(ne){const t=new ResizeObserver(n=>{a==null||a(n,t),n.length&&(l==="content"?u.value=n[0].contentRect:u.value=n[0].target.getBoundingClientRect())});q(()=>{t.disconnect()}),ae(v,(n,i)=>{i&&(t.unobserve(V(i)),u.value=void 0),n&&t.observe(V(n))},{flush:"post"})}return{resizeRef:v,contentRect:se(u)}}const O=Symbol.for("vuetify:layout"),F=Symbol.for("vuetify:layout-item"),Z=1e3,pe=D({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),me=D({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function ge(){const a=B(O);if(!a)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:a.getLayoutItem,mainRect:a.mainRect,mainStyles:a.mainStyles}}function he(a){const l=B(O);if(!l)throw new Error("[Vuetify] Could not find injected layout");const v=a.id??`layout-item-${ie()}`,u=W("useLayoutItem");_(F,{id:v});const t=X(!1);re(()=>t.value=!0),ce(()=>t.value=!1);const{layoutItemStyles:n,layoutItemScrimStyles:i}=l.register(u,{...a,active:c(()=>t.value?!1:a.active.value),id:v});return q(()=>l.unregister(v)),{layoutItemStyles:n,layoutRect:l.layoutRect,layoutItemScrimStyles:i}}const de=(a,l,v,u)=>{let t={top:0,left:0,right:0,bottom:0};const n=[{id:"",layer:{...t}}];for(const i of a){const p=l.get(i),g=v.get(i),L=u.get(i);if(!p||!g||!L)continue;const h={...t,[p.value]:parseInt(t[p.value],10)+(L.value?parseInt(g.value,10):0)};n.push({id:i,layer:h}),t=h}return n};function Ie(a){const l=B(O,null),v=c(()=>l?l.rootZIndex.value-100:Z),u=P([]),t=z(new Map),n=z(new Map),i=z(new Map),p=z(new Map),g=z(new Map),{resizeRef:L,contentRect:h}=ve(),G=c(()=>{const o=new Map,d=a.overlaps??[];for(const e of d.filter(r=>r.includes(":"))){const[r,s]=e.split(":");if(!u.value.includes(r)||!u.value.includes(s))continue;const y=t.get(r),m=t.get(s),R=n.get(r),S=n.get(s);!y||!m||!R||!S||(o.set(s,{position:y.value,amount:parseInt(R.value,10)}),o.set(r,{position:m.value,amount:-parseInt(S.value,10)}))}return o}),I=c(()=>{const o=[...new Set([...i.values()].map(e=>e.value))].sort((e,r)=>e-r),d=[];for(const e of o){const r=u.value.filter(s=>{var y;return((y=i.get(s))==null?void 0:y.value)===e});d.push(...r)}return de(d,t,n,p)}),j=c(()=>!Array.from(g.values()).some(o=>o.value)),b=c(()=>I.value[I.value.length-1].layer),Y=c(()=>({"--v-layout-left":$(b.value.left),"--v-layout-right":$(b.value.right),"--v-layout-top":$(b.value.top),"--v-layout-bottom":$(b.value.bottom),...j.value?void 0:{transition:"none"}})),x=c(()=>I.value.slice(1).map((o,d)=>{let{id:e}=o;const{layer:r}=I.value[d],s=n.get(e),y=t.get(e);return{id:e,...r,size:Number(s.value),position:y.value}})),H=o=>x.value.find(d=>d.id===o),C=W("createLayout"),N=X(!1);ue(()=>{N.value=!0}),_(O,{register:(o,d)=>{let{id:e,order:r,position:s,layoutSize:y,elementSize:m,active:R,disableTransitions:S,absolute:Q}=d;i.set(e,r),t.set(e,s),n.set(e,y),p.set(e,R),S&&g.set(e,S);const T=le(F,C==null?void 0:C.vnode).indexOf(o);T>-1?u.value.splice(T,0,e):u.value.push(e);const K=c(()=>x.value.findIndex(w=>w.id===e)),M=c(()=>v.value+I.value.length*2-K.value*2),ee=c(()=>{const w=s.value==="left"||s.value==="right",E=s.value==="right",oe=s.value==="bottom",U={[s.value]:0,zIndex:M.value,transform:`translate${w?"X":"Y"}(${(R.value?0:-110)*(E||oe?-1:1)}%)`,position:Q.value||v.value!==Z?"absolute":"fixed",...j.value?void 0:{transition:"none"}};if(!N.value)return U;const f=x.value[K.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const A=G.value.get(e);return A&&(f[A.position]+=A.amount),{...U,height:w?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:E?void 0:`${f.left}px`,right:E?`${f.right}px`:void 0,top:s.value!=="bottom"?`${f.top}px`:void 0,bottom:s.value!=="top"?`${f.bottom}px`:void 0,width:w?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),te=c(()=>({zIndex:M.value-1}));return{layoutItemStyles:ee,layoutItemScrimStyles:te,zIndex:M}},unregister:o=>{i.delete(o),t.delete(o),n.delete(o),p.delete(o),g.delete(o),u.value=u.value.filter(d=>d!==o)},mainRect:b,mainStyles:Y,getLayoutItem:H,items:x,layoutRect:h,rootZIndex:v});const k=c(()=>["v-layout",{"v-layout--full-height":a.fullHeight}]),J=c(()=>({zIndex:l?v.value:void 0,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:k,layoutStyles:J,getLayoutItem:H,items:x,layoutRect:h,layoutRef:L}}export{ve as a,me as b,Ie as c,he as d,pe as m,ge as u};
