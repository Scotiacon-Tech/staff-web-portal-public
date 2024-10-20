import{D as _,H as b,E as k,I as s,J as ee,q as o,K as P,O as te,p as y,s as Se,c as h,x as Ce,l as V,i as ae,P as ne,Q as Ie,R as q,S as we,d as Ee,U as Te,m as Ae,n as Ne,v as $e,t as m,V as N,W as z,X as oe,Y as Be,z as De,Z as je,r as L,L as j,_ as A,$ as O,a0 as M,B as R,a1 as p,a2 as Oe,a3 as Me,a4 as Re,a5 as Fe,a6 as Ue,a7 as J,a8 as Ge,a9 as ze,aa as Q,ab as He,ac as Ke,ad as We,ae as Ye,af as qe,ag as Je,ah as Qe,ai as Xe,N as Ze,T as et}from"./index-BtF6b23h.js";import{V as le,a as tt,b as se,c as ie,u as re,_ as H,d as at}from"./_plugin-vue_export-helper-CQy2v07r.js";import{l as ce,m as T,u as $,j as nt,R as ot,e as ue,k as lt,i as de,c as st,d as it,a as B,g as rt,h as ct,V as ut,_ as dt}from"./index-DArl-md_.js";import{V as ft,m as gt,b as pt,c as mt,d as vt,a as bt}from"./VBtn-DSQ9fNAu.js";const ht=["href"],F=_({__name:"OptionCard",props:{option:{}},setup(e){return(n,t)=>(b(),k(se,null,{default:s(()=>[ee("a",{href:n.option.href,class:"d-flex flex-column h-100 text-white text-decoration-none"},[o(le,{class:"text-center text-wrap"},{default:s(()=>[P(te(n.option.title),1)]),_:1}),o(tt,{class:"align-content-end"},{default:s(()=>[o(ce,{icon:n.option.icon,size:"64"},null,8,["icon"])]),_:1})],8,ht)]),_:1}))}}),E=Symbol.for("vuetify:v-expansion-panel"),yt=y({eager:Boolean},"lazy");function xt(e,n){const t=Se(!1),a=h(()=>t.value||e.eager||n.value);Ce(n,()=>t.value=!0);function l(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:l}}const fe=y({...T(),...yt()},"VExpansionPanelText"),S=V()({name:"VExpansionPanelText",props:fe(),setup(e,n){let{slots:t}=n;const a=ae(E);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:l,onAfterLeave:r}=xt(e,a.isSelected);return $(()=>o(ft,{onAfterLeave:r},{default:()=>{var i;return[ne(o("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&l.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(i=t.default)==null?void 0:i.call(t)])]),[[Ie,a.isSelected.value]])]}})),{}}}),ge=y({color:String,expandIcon:{type:q,default:"$expand"},collapseIcon:{type:q,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...T(),...nt()},"VExpansionPanelTitle"),C=V()({name:"VExpansionPanelTitle",directives:{Ripple:ot},props:ge(),setup(e,n){let{slots:t}=n;const a=ae(E);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:l,backgroundColorStyles:r}=ue(e,"color"),{dimensionStyles:i}=lt(e),c=h(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),f=h(()=>a.isSelected.value?e.collapseIcon:e.expandIcon);return $(()=>{var u;return ne(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},l.value,e.class],style:[r.value,i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(u=t.default)==null?void 0:u.call(t,c.value),!e.hideActions&&o(de,{defaults:{VIcon:{icon:f.value}}},{default:()=>{var d;return[o("span",{class:"v-expansion-panel-title__icon"},[((d=t.actions)==null?void 0:d.call(t,c.value))??o(ce,null,null)])]}})]),[[we("ripple"),e.ripple]])}),{}}}),pe=y({title:String,text:String,bgColor:String,...st(),...gt(),...it(),...B(),...ge(),...fe()},"VExpansionPanel"),U=V()({name:"VExpansionPanel",props:pe(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const a=pt(e,E),{backgroundColorClasses:l,backgroundColorStyles:r}=ue(e,"bgColor"),{elevationClasses:i}=rt(e),{roundedClasses:c}=ct(e),f=h(()=>(a==null?void 0:a.disabled.value)||e.disabled),u=h(()=>a.group.items.value.reduce((g,v,D)=>(a.group.selected.value.includes(v.id)&&g.push(D),g),[])),d=h(()=>{const g=a.group.items.value.findIndex(v=>v.id===a.id);return!a.isSelected.value&&u.value.some(v=>v-g===1)}),x=h(()=>{const g=a.group.items.value.findIndex(v=>v.id===a.id);return!a.isSelected.value&&u.value.some(v=>v-g===-1)});return Ee(E,a),$(()=>{const g=!!(t.text||e.text),v=!!(t.title||e.title),D=C.filterProps(e),Pe=S.filterProps(e);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":x.value,"v-expansion-panel--disabled":f.value},c.value,l.value,e.class],style:[r.value,e.style]},{default:()=>[o("div",{class:["v-expansion-panel__shadow",...i.value]},null),o(de,{defaults:{VExpansionPanelTitle:{...D},VExpansionPanelText:{...Pe}}},{default:()=>{var Y;return[v&&o(C,{key:"title"},{default:()=>[t.title?t.title():e.title]}),g&&o(S,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(Y=t.default)==null?void 0:Y.call(t)]}})]})}),{groupItem:a}}}),kt=["default","accordion","inset","popout"],Lt=y({flat:Boolean,...mt(),...Te(pe(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Ae(),...T(),...B(),variant:{type:String,default:"default",validator:e=>kt.includes(e)}},"VExpansionPanels"),_t=V()({name:"VExpansionPanels",props:Lt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{next:a,prev:l}=vt(e,E),{themeClasses:r}=Ne(e),i=h(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $e({VExpansionPanel:{bgColor:m(e,"bgColor"),collapseIcon:m(e,"collapseIcon"),color:m(e,"color"),eager:m(e,"eager"),elevation:m(e,"elevation"),expandIcon:m(e,"expandIcon"),focusable:m(e,"focusable"),hideActions:m(e,"hideActions"),readonly:m(e,"readonly"),ripple:m(e,"ripple"),rounded:m(e,"rounded"),static:m(e,"static")}}),$(()=>o(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},r.value,i.value,e.class],style:e.style},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t,{prev:l,next:a})]}})),{next:a,prev:l}}}),me=N.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),ve=N.reduce((e,n)=>{const t="offset"+z(n);return e[t]={type:[String,Number],default:null},e},{}),be=N.reduce((e,n)=>{const t="order"+z(n);return e[t]={type:[String,Number],default:null},e},{}),X={col:Object.keys(me),offset:Object.keys(ve),order:Object.keys(be)};function Vt(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Pt=["auto","start","end","center","baseline","stretch"],St=y({cols:{type:[Boolean,String,Number],default:!1},...me,offset:{type:[String,Number],default:null},...ve,order:{type:[String,Number],default:null},...be,alignSelf:{type:String,default:null,validator:e=>Pt.includes(e)},...T(),...B()},"VCol"),I=V()({name:"VCol",props:St(),setup(e,n){let{slots:t}=n;const a=h(()=>{const l=[];let r;for(r in X)X[r].forEach(c=>{const f=e[c],u=Vt(r,c,f);u&&l.push(u)});const i=l.some(c=>c.startsWith("v-col-"));return l.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return oe(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),K=["start","end","center"],he=["space-between","space-around","space-evenly"];function W(e,n){return N.reduce((t,a)=>{const l=e+z(a);return t[l]=n(),t},{})}const Ct=[...K,"baseline","stretch"],ye=e=>Ct.includes(e),xe=W("align",()=>({type:String,default:null,validator:ye})),It=[...K,...he],ke=e=>It.includes(e),Le=W("justify",()=>({type:String,default:null,validator:ke})),wt=[...K,...he,"stretch"],_e=e=>wt.includes(e),Ve=W("alignContent",()=>({type:String,default:null,validator:_e})),Z={align:Object.keys(xe),justify:Object.keys(Le),alignContent:Object.keys(Ve)},Et={align:"align",justify:"justify",alignContent:"align-content"};function Tt(e,n,t){let a=Et[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const At=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:ye},...xe,justify:{type:String,default:null,validator:ke},...Le,alignContent:{type:String,default:null,validator:_e},...Ve,...T(),...B()},"VRow"),w=V()({name:"VRow",props:At(),setup(e,n){let{slots:t}=n;const a=h(()=>{const l=[];let r;for(r in Z)Z[r].forEach(i=>{const c=e[i],f=Tt(r,i,c);f&&l.push(f)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return oe(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),Nt=y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function $t(e,n){let t=()=>{};function a(i){t==null||t();const c=Number(i?e.openDelay:e.closeDelay);return new Promise(f=>{t=Be(c,()=>{n==null||n(i),f(i)})})}function l(){return a(!0)}function r(){return a(!1)}return{clearDelay:t,runOpenDelay:l,runCloseDelay:r}}const Bt=y({disabled:Boolean,modelValue:{type:Boolean,default:null},...Nt()},"VHover"),G=V()({name:"VHover",props:Bt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=De(e,"modelValue"),{runOpenDelay:l,runCloseDelay:r}=$t(e,i=>!e.disabled&&(a.value=i));return()=>{var i;return(i=t.default)==null?void 0:i.call(t,{isHovering:a.value,props:{onMouseenter:l,onMouseleave:r}})}}}),Dt=_({__name:"Dashboard",setup(e){const{smAndUp:n}=je(),t=L([0]),a=L(new Map);re().getLogoutURLs().then(f=>{f&&(a.value=f)});const r=[{buttonIcon:p,buttonLabel:"Login",icon:Oe,label:"Login",href:"https://sso.scotiacon.org.uk/realms/scotiacon-staff/account/",title:"Account Management"},{buttonIcon:p,buttonLabel:"Login",icon:Me,label:"Login",href:"https://events.scotiacon.org.uk/orga/login/?next=/orga/event/&",title:"Events Management"},{buttonIcon:p,buttonLabel:"Login",icon:Re,label:"Login",href:"https://drive.scotiacon.org.uk/",title:"File Storage"},{buttonIcon:p,buttonLabel:"Login",icon:Fe,label:"Login",href:"https://sendy.scotiacon.org.uk/",title:"Mass Mailing"},{buttonIcon:p,buttonLabel:"Login",icon:Ue,href:"https://reg.scotiacon.org.uk",title:"Operations & Registration"},{buttonIcon:J,buttonLabel:"View",icon:Ge,href:"https://docs.google.com/spreadsheets/d/1KMSOre0XszWeQ4OsQWMYiaF_GB99p5OlthwcsFgqqxA/edit#gid=0",title:"Organisational Chart"},{buttonIcon:J,buttonLabel:"Login",icon:ze,href:"https://kanban.scotiacon.org.uk/login?redirectToProvider=true",title:"Project Management"},{buttonIcon:p,buttonLabel:"Login",icon:Q,label:"Login",href:"https://mail.staff.scotiacon.org.uk/?iam_sso=1",title:"Staff Emails"},{buttonIcon:p,buttonLabel:"Login",icon:He,href:"https://support.scotiacon.org.uk/scp/login.php?do=ext&bk=oauth2.agent.p4i4",title:"Support Tickets"},{buttonIcon:p,buttonLabel:"Login",icon:Ke,label:"Login",href:"https://cad.scotiacon.org.uk/Account/LogOn",title:"Welfare Dispatch"}],i=[{buttonIcon:p,buttonLabel:"Login",icon:We,label:"Login",href:"https://aws.amazon.com/",title:"Amazon AWS"},{buttonIcon:p,buttonLabel:"Login",icon:Ye,label:"Login",href:"https://www.cloudflare.com/en-gb/",title:"CloudFlare DNS"},{buttonIcon:p,buttonLabel:"Login",icon:qe,label:"Login",href:"https://portainer.scotiacon.org.uk/",title:"Docker"},{buttonIcon:p,buttonLabel:"Login",icon:Je,label:"Login",href:"https://hpanel.hostinger.com/",title:"Server Management"},{buttonIcon:p,buttonLabel:"Login",icon:Qe,label:"Tailscale",href:"https://login.tailscale.com/admin/machines",title:"Tailscale Server VPN"}],c=[{buttonIcon:p,buttonLabel:"Login",icon:Q,label:"Login",href:"https://webmail.lcn.com/",title:"Departmental & Individual Email"}];return(f,u)=>(b(),k(ie,{class:"pa-0 pa-sm-2 pa-md-4",fluid:""},{default:s(()=>[o(_t,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=d=>t.value=d),multiple:!0},{default:s(()=>[o(U,{class:"bg-transparent",rounded:j(n)?5:0,eager:!0},{default:s(()=>[o(C,{class:"text-h6",color:"blue-darken-3"},{default:s(()=>u[1]||(u[1]=[P(" General Resources ")])),_:1}),o(S,{style:{"background-color":"rgba(0,0,0,0.75)"}},{default:s(()=>[o(w,{class:"flex-wrap pt-2"},{default:s(()=>[(b(),A(O,null,M(r,d=>o(I,{class:"text-center",key:d.title},{default:s(()=>[o(G,null,{default:s(({isHovering:x,props:g})=>[o(F,R({ref_for:!0},g,{option:d,class:`mx-auto vanishIn ${x?"bg-blue-darken-2":"bg-blue-darken-4"} rounded-lg h-100`}),null,16,["option","class"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["rounded"]),o(U,{class:"bg-transparent",rounded:j(n)?5:0,eager:!0},{default:s(()=>[o(C,{class:"text-h6",color:"green-darken-3"},{default:s(()=>u[2]||(u[2]=[P(" Tech Team Resources ")])),_:1}),o(S,{style:{"background-color":"rgba(0,0,0,0.75)"}},{default:s(()=>[o(w,{class:"flex-wrap pt-2"},{default:s(()=>[(b(),A(O,null,M(i,d=>o(I,{class:"text-center",key:d.title},{default:s(()=>[o(G,null,{default:s(({isHovering:x,props:g})=>[o(F,R({ref_for:!0},g,{option:d,class:`mx-auto vanishIn ${x?"bg-green-darken-2":"bg-green-darken-4"} rounded-lg h-100`}),null,16,["option","class"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["rounded"]),o(U,{class:"bg-transparent",rounded:j(n)?5:0,eager:!0},{default:s(()=>[o(C,{class:"text-h6",color:"red-darken-3"},{default:s(()=>u[3]||(u[3]=[P(" Legacy Resources ")])),_:1}),o(S,{style:{"background-color":"rgba(0,0,0,0.75)"}},{default:s(()=>[o(w,{class:"flex-wrap pt-2"},{default:s(()=>[(b(),A(O,null,M(c,d=>o(I,{class:"text-center",key:d.title},{default:s(()=>[o(G,null,{default:s(({isHovering:x,props:g})=>[o(F,R({ref_for:!0},g,{option:d,class:`mx-auto vanishIn ${x?"bg-red-darken-2":"bg-red-darken-4"} rounded-lg h-100`}),null,16,["option","class"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["rounded"])]),_:1},8,["modelValue"])]),_:1}))}}),jt=_({__name:"AuthButton",props:{appendIcon:{type:[String,Array,Function,Object],default:""},className:{default:""},color:{},credential:{},source:{},variant:{default:"elevated"}},setup(e){const n={keycloak:{icon:"$login",label:"Login",name:"KeyCloak"}},t=L(n[e.source.toLowerCase()].label||""),a=L(n[e.source.toLowerCase()].icon||"");return h(()=>{var l,r;if(e.source.toLowerCase()==="internal"||e.source.toLowerCase()==="email")return(l=e.credential)==null?void 0:l.Email;try{const i=JSON.parse(((r=e.credential)==null?void 0:r.Data)||"{}");switch(e.source.toLowerCase()){case"telegram":return`@${i.username||i.id}`}}catch{}return""}),(l,r)=>(b(),k(bt,{"append-icon":l.appendIcon,"prepend-icon":a.value,class:Xe(`${l.source.toLowerCase()} ${l.className}`),color:l.color,variant:l.variant},{default:s(()=>[P(te(t.value),1)]),_:1},8,["append-icon","prepend-icon","class","color","variant"]))}}),Ot=H(jt,[["__scopeId","data-v-0b415f55"]]),Mt=["href"],Rt=_({__name:"LoginButton",props:{appendIcon:{type:[String,Array,Function,Object],default:""},color:{},credential:{},source:{default:"internal"},url:{default:""},variant:{}},setup(e){const n=L("");try{const t=new URL(e.url);n.value=t.searchParams.get("state")||""}catch{}return(t,a)=>(b(),A("a",{href:t.url},[o(Ot,{"append-icon":t.appendIcon,color:t.color,credential:t.credential,source:t.source,variant:t.variant,className:"d-flex justify-start w-100"},null,8,["append-icon","color","credential","source","variant"])],8,Mt))}}),Ft=H(Rt,[["__scopeId","data-v-c3f4d27b"]]),Ut=_({__name:"LoginButtons",props:{showKeyCloakLogin:{type:Boolean,default:!1},variant:{}},setup(e){const n=L(new Map);return re().getLoginURLs().then(a=>{a&&(n.value=a)}),(a,l)=>a.showKeyCloakLogin&&n.value.size>0?(b(),k(w,{key:0,dense:!0},{default:s(()=>[o(I,null,{default:s(()=>[o(Ft,{source:"keycloak",color:"primary",url:n.value.get("OAUTH_KEYCLOAK_URL")||"",variant:a.variant},null,8,["url","variant"])]),_:1})]),_:1})):Ze("",!0)}}),Gt=_({__name:"Login",setup(e){return(n,t)=>(b(),k(ie,{class:"fill-height",fluid:""},{default:s(()=>[o(se,{class:"border-blur-20 border-50 text-white mx-auto vanishIn","max-width":"400"},{default:s(()=>[o(le,{class:"text-wrap text-center"},{default:s(()=>[o(ut,{alt:"Scotiacon logo showing Scottie dog mascot Wallace as silhouette in front of a Scottish flag",class:"my-4 mx-auto","max-height":"300",width:"300",src:dt}),t[0]||(t[0]=ee("h1",{class:"text-h5 font-weight-bold"},"Scotiacon Staff Portal",-1))]),_:1}),o(at,null,{default:s(()=>[o(w,{class:"d-flex align-center justify-center"},{default:s(()=>[o(I,{cols:"auto"},{default:s(()=>[o(Ut,{"show-key-cloak-login":!0,variant:"flat"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),zt=H(Gt,[["__scopeId","data-v-5cc4123d"]]),Ht=et.getInstance(),Kt=()=>Ht,Qt=_({__name:"Home",setup(e){const n=Kt(),t=L(!1),a=n.getTokenByService("AuthAPI");return a&&n.accessTimeRemaining(a)>0&&(t.value=!0),(l,r)=>t.value?(b(),k(Dt,{key:0})):(b(),k(zt,{key:1}))}});export{Qt as default};
