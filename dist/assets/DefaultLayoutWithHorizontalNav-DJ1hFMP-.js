import{o as v,c as H,F as $t,h as Bt,f as R,g as _,i as Vt,j as ne,k as vt,r as Z,w as ht,l as oe,m as u,n as ie,e as N,d as b,p as $,q as j,s as It,t as Mt,v as wt,x as tt,y as xt,z as B,b as F,A as se,B as re,C as le,D as ae,E as ce,G as fe,H as P,I as mt,J as Lt,K as Et,T as ue,a as de}from"./index-6kLELUIS.js";import me from"./Footer-DR121_De.js";import pe from"./NavbarThemeSwitcher-By1kO7Al.js";import he from"./UserProfile-DNGqYJiD.js";import{_ as ge}from"./I18n-CheF9jON.js";import{V as ye}from"./VNodeRenderer-ahTHkrA6.js";import{V as ve}from"./VSpacer-BpQnhla9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTooltip-DtTcCO-T.js";import"./VOverlay-OJm5ENmt.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-3OFnlzQv.js";import"./VMenu-Duvf4McS.js";import"./VList-D6I4s3jY.js";import"./VAvatar-Ct11wozP.js";import"./VDivider-s3PryEtB.js";/* empty css              */const we={class:"nav-items"},xe={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=o=>"children"in o?Ce:zt;return(o,n)=>(v(),H("ul",we,[(v(!0),H($t,null,Bt(t.navItems,(i,r)=>(v(),R(_(e(i)),{key:r,"data-allow-mismatch":"",item:i},null,8,["item"]))),128))]))}},be={class:"nav-group-label"},Ce=Object.assign({name:"HorizontalNavGroup"},{__name:"HorizontalNavGroup",props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,o=Vt(),n=ne(),i=vt(),r=Z(!1);return ht(()=>o.path,()=>{const s=oe(e.item.children,n);r.value=s},{immediate:!0}),(s,l)=>u(ie)(t.item)?(v(),R(u(dn),{key:0,"is-rtl":u(i).isAppRTL,class:tt(["nav-group",[{active:u(r),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:N(()=>[(v(!0),H($t,null,Bt(t.item.children,a=>(v(),R(_("children"in a?"HorizontalNavGroup":u(zt)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:N(()=>[b("div",be,[(v(),R(_(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),R(_(u($).app.i18n.enable?"i18n-t":"span"),j(u(It)(t.item.title,"span"),{class:"nav-item-title"}),{default:N(()=>[Mt(wt(t.item.title),1)]),_:1},16)),(v(),R(_(u($).app.iconRenderer||"div"),j(u($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):xt("",!0)}}),Ae={class:"layout-navbar"},Re={class:"navbar-content-container"},ke={class:"layout-horizontal-nav"},Se={class:"horizontal-nav-content-container"},Ne={class:"layout-page-content"},Le={class:"layout-footer"},Ee={class:"footer-content-container"},Te={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const e=vt();return(o,n)=>(v(),H("div",{class:tt(["layout-wrapper",u(e)._layoutClasses]),"data-allow-mismatch":""},[b("div",{class:tt(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[b("div",Ae,[b("div",Re,[B(o.$slots,"navbar")])]),b("div",ke,[b("div",Se,[F(u(xe),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),b("main",Ne,[B(o.$slots,"default")]),b("footer",Le,[b("div",Ee,[B(o.$slots,"footer")])])],2))}},zt={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t;return(o,n)=>u(se)(t.item.action,t.item.subject)?(v(),H("li",{key:0,class:tt(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(v(),R(_(t.item.to?"RouterLink":"a"),j(u(le)(t.item),{class:{"router-link-active router-link-exact-active":u(re)(t.item,o.$router)}}),{default:N(()=>[(v(),R(_(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},t.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),R(_(u($).app.i18n.enable?"i18n-t":"span"),j({class:"nav-item-title"},u(It)(t.item.title,"span")),{default:N(()=>[Mt(wt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):xt("",!0)}},gt=Math.min,G=Math.max,it=Math.round,V=t=>({x:t,y:t}),Pe={left:"right",right:"left",bottom:"top",top:"bottom"},_e={start:"end",end:"start"};function Tt(t,e,o){return G(t,gt(e,o))}function lt(t,e){return typeof t=="function"?t(e):t}function W(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Ft(t){return t==="x"?"y":"x"}function Ht(t){return t==="y"?"height":"width"}function Y(t){return["top","bottom"].includes(W(t))?"y":"x"}function Wt(t){return Ft(Y(t))}function Oe(t,e,o){o===void 0&&(o=!1);const n=at(t),i=Wt(t),r=Ht(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function De(t){const e=st(t);return[yt(t),e,yt(e)]}function yt(t){return t.replace(/start|end/g,e=>_e[e])}function $e(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function Be(t,e,o,n){const i=at(t);let r=$e(W(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(yt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>Pe[e])}function Ve(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ie(t){return typeof t!="number"?Ve(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function Pt(t,e,o){let{reference:n,floating:i}=t;const r=Y(e),s=Wt(e),l=Ht(s),a=W(e),c=r==="y",d=n.x+n.width/2-i.width/2,f=n.y+n.height/2-i.height/2,p=n[l]/2-i[l]/2;let m;switch(a){case"top":m={x:d,y:n.y-i.height};break;case"bottom":m={x:d,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:f};break;case"left":m={x:n.x-i.width,y:f};break;default:m={x:n.x,y:n.y}}switch(at(e)){case"start":m[s]-=p*(o&&c?-1:1);break;case"end":m[s]+=p*(o&&c?-1:1);break}return m}const Me=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=Pt(c,n,a),p=n,m={},h=0;for(let g=0;g<l.length;g++){const{name:y,fn:w}=l[g],{x,y:A,data:S,reset:C}=await w({x:d,y:f,initialPlacement:n,placement:p,strategy:i,middlewareData:m,rects:c,platform:s,elements:{reference:t,floating:e}});d=x??d,f=A??f,m={...m,[y]:{...m[y],...S}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(c=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:d,y:f}=Pt(c,p,a)),g=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:m}};async function qt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=lt(e,t),h=Ie(m),y=l[p?f==="floating"?"reference":"floating":f],w=rt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(y)))==null||o?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),x=f==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),S=await(r.isElement==null?void 0:r.isElement(A))?await(r.getScale==null?void 0:r.getScale(A))||{x:1,y:1}:{x:1,y:1},C=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:A,strategy:a}):x);return{top:(w.top-C.top+h.top)/S.y,bottom:(C.bottom-w.bottom+h.bottom)/S.y,left:(w.left-C.left+h.left)/S.x,right:(C.right-w.right+h.right)/S.x}}const ze=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...y}=lt(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=W(i),x=Y(l),A=W(l)===l,S=await(a.isRTL==null?void 0:a.isRTL(c.floating)),C=p||(A||!g?[st(l)]:De(l)),At=h!=="none";!p&&At&&C.push(...Be(l,g,h,S));const te=[l,...C],dt=await qt(e,y),ot=[];let Q=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&ot.push(dt[w]),f){const z=Oe(i,s,S);ot.push(dt[z[0]],dt[z[1]])}if(Q=[...Q,{placement:i,overflows:ot}],!ot.every(z=>z<=0)){var Rt,kt;const z=(((Rt=r.flip)==null?void 0:Rt.index)||0)+1,Nt=te[z];if(Nt)return{data:{index:z,overflows:Q},reset:{placement:Nt}};let U=(kt=Q.filter(q=>q.overflows[0]<=0).sort((q,O)=>q.overflows[1]-O.overflows[1])[0])==null?void 0:kt.placement;if(!U)switch(m){case"bestFit":{var St;const q=(St=Q.filter(O=>{if(At){const D=Y(O.placement);return D===x||D==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(D=>D>0).reduce((D,ee)=>D+ee,0)]).sort((O,D)=>O[1]-D[1])[0])==null?void 0:St[0];q&&(U=q);break}case"initialPlacement":U=l;break}if(i!==U)return{reset:{placement:U}}}return{}}}};async function Fe(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=W(o),l=at(o),a=Y(o)==="y",c=["left","top"].includes(s)?-1:1,d=r&&a?-1:1,f=lt(e,t);let{mainAxis:p,crossAxis:m,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return l&&typeof h=="number"&&(m=l==="end"?h*-1:h),a?{x:m*d,y:p*c}:{x:p*c,y:m*d}}const He=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:l}=e,a=await Fe(e,t);return s===((o=l.offset)==null?void 0:o.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},We=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:w,y:x}=y;return{x:w,y:x}}},...a}=lt(t,e),c={x:o,y:n},d=await qt(e,a),f=Y(W(i)),p=Ft(f);let m=c[p],h=c[f];if(r){const y=p==="y"?"top":"left",w=p==="y"?"bottom":"right",x=m+d[y],A=m-d[w];m=Tt(x,m,A)}if(s){const y=f==="y"?"top":"left",w=f==="y"?"bottom":"right",x=h+d[y],A=h-d[w];h=Tt(x,h,A)}const g=l.fn({...e,[p]:m,[f]:h});return{...g,data:{x:g.x-o,y:g.y-n,enabled:{[p]:r,[f]:s}}}}}};function ct(){return typeof window<"u"}function J(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jt(t){return ct()?t instanceof Node||t instanceof k(t).Node:!1}function L(t){return ct()?t instanceof Element||t instanceof k(t).Element:!1}function T(t){return ct()?t instanceof HTMLElement||t instanceof k(t).HTMLElement:!1}function _t(t){return!ct()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function qe(t){return["table","td","th"].includes(J(t))}function ft(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function bt(t){const e=Ct(),o=L(t)?E(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function je(t){let e=I(t);for(;T(e)&&!K(e);){if(bt(e))return e;if(ft(e))return null;e=I(e)}return null}function Ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function E(t){return k(t).getComputedStyle(t)}function ut(t){return L(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function I(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||_t(t)&&t.host||M(t);return _t(e)?e.host:e}function Gt(t){const e=I(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&nt(e)?e:Gt(e)}function Xt(t,e,o){var n;e===void 0&&(e=[]);const i=Gt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=k(i);return r?(Ge(s),e.concat(s,s.visualViewport||[],nt(i)?i:[],[])):e.concat(i,Xt(i,[]))}function Ge(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Yt(t){const e=E(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=T(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,l=it(o)!==r||it(n)!==s;return l&&(o=r,n=s),{width:o,height:n,$:l}}function Kt(t){return L(t)?t:t.contextElement}function X(t){const e=Kt(t);if(!T(e))return V(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=Yt(e);let s=(r?it(o.width):o.width)/n,l=(r?it(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Xe=V(0);function Jt(t){const e=k(t);return!Ct()||!e.visualViewport?Xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ye(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==k(t)?!1:e}function et(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=Kt(t);let s=V(1);e&&(n?L(n)&&(s=X(n)):s=X(t));const l=Ye(r,o,n)?Jt(r):V(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(r){const p=k(r),m=n&&L(n)?k(n):n;let h=p,g=h.frameElement;for(;g&&n&&m!==h;){const y=X(g),w=g.getBoundingClientRect(),x=E(g),A=w.left+(g.clientLeft+parseFloat(x.paddingLeft))*y.x,S=w.top+(g.clientTop+parseFloat(x.paddingTop))*y.y;a*=y.x,c*=y.y,d*=y.x,f*=y.y,a+=A,c+=S,h=k(g),g=h.frameElement}}return rt({width:d,height:f,x:a,y:c})}function Ke(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=M(n),l=e?ft(e.floating):!1;if(n===s||l&&r)return o;let a={scrollLeft:0,scrollTop:0},c=V(1);const d=V(0),f=T(n);if((f||!f&&!r)&&((J(n)!=="body"||nt(s))&&(a=ut(n)),T(n))){const p=et(n);c=X(n),d.x=p.x+n.clientLeft,d.y=p.y+n.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-a.scrollLeft*c.x+d.x,y:o.y*c.y-a.scrollTop*c.y+d.y}}function Je(t){return Array.from(t.getClientRects())}function Qt(t){return et(M(t)).left+ut(t).scrollLeft}function Qe(t){const e=M(t),o=ut(t),n=t.ownerDocument.body,i=G(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=G(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Qt(t);const l=-o.scrollTop;return E(n).direction==="rtl"&&(s+=G(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Ue(t,e){const o=k(t),n=M(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const c=Ct();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}function Ze(t,e){const o=et(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=T(t)?X(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,a=i*r.x,c=n*r.y;return{width:s,height:l,x:a,y:c}}function Ot(t,e,o){let n;if(e==="viewport")n=Ue(t,o);else if(e==="document")n=Qe(M(t));else if(L(e))n=Ze(e,o);else{const i=Jt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return rt(n)}function Ut(t,e){const o=I(t);return o===e||!L(o)||K(o)?!1:E(o).position==="fixed"||Ut(o,e)}function tn(t,e){const o=e.get(t);if(o)return o;let n=Xt(t,[]).filter(l=>L(l)&&J(l)!=="body"),i=null;const r=E(t).position==="fixed";let s=r?I(t):t;for(;L(s)&&!K(s);){const l=E(s),a=bt(s);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!a&&Ut(t,s))?n=n.filter(d=>d!==s):i=l,s=I(s)}return e.set(t,n),n}function en(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?ft(e)?[]:tn(e,this._c):[].concat(o),n],l=s[0],a=s.reduce((c,d)=>{const f=Ot(e,d,i);return c.top=G(f.top,c.top),c.right=gt(f.right,c.right),c.bottom=gt(f.bottom,c.bottom),c.left=G(f.left,c.left),c},Ot(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function nn(t){const{width:e,height:o}=Yt(t);return{width:e,height:o}}function on(t,e,o){const n=T(e),i=M(e),r=o==="fixed",s=et(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const a=V(0);if(n||!n&&!r)if((J(e)!=="body"||nt(i))&&(l=ut(e)),n){const f=et(e,!0,r,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=Qt(i));const c=s.left+l.scrollLeft-a.x,d=s.top+l.scrollTop-a.y;return{x:c,y:d,width:s.width,height:s.height}}function pt(t){return E(t).position==="static"}function Dt(t,e){return!T(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const o=k(t);if(ft(t))return o;if(!T(t)){let i=I(t);for(;i&&!K(i);){if(L(i)&&!pt(i))return i;i=I(i)}return o}let n=Dt(t,e);for(;n&&qe(n)&&pt(n);)n=Dt(n,e);return n&&K(n)&&pt(n)&&!bt(n)?o:n||je(t)||o}const sn=async function(t){const e=this.getOffsetParent||Zt,o=this.getDimensions,n=await o(t.floating);return{reference:on(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function rn(t){return E(t).direction==="rtl"}const ln={convertOffsetParentRelativeRectToViewportRelativeRect:Ke,getDocumentElement:M,getClippingRect:en,getOffsetParent:Zt,getElementRects:sn,getClientRects:Je,getDimensions:nn,getScale:X,isElement:L,isRTL:rn},an=He,cn=We,fn=ze,un=(t,e,o)=>{const n=new Map,i={platform:ln,...o},r={...i.platform,_c:n};return Me(t,e,{...i,platform:r})},dn={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,o=vt(),n=Z(),i=Z(),r=Z({left:"0px",top:"0px"}),s=async()=>{if(n.value!==void 0&&i.value!==void 0){const{x:f,y:p}=await un(n.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...o.horizontalNavPopoverOffset?[an(o.horizontalNavPopoverOffset)]:[],fn({boundary:document.querySelector("body"),padding:{bottom:16}}),cn({boundary:document.querySelector("body"),padding:{bottom:16}})]});r.value.left=`${f}px`,r.value.top=`${p}px`}};ae(()=>o.horizontalNavType).toMatch(f=>f==="static").then(()=>{ce("scroll",s)});const l=Z(!1),a=()=>{l.value=!0,s()},c=()=>{l.value=!1};fe(s),ht([()=>o.isAppRTL,()=>o.appContentWidth],s);const d=Vt();return ht(()=>d.fullPath,c),(f,p)=>(v(),H("div",{class:tt(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":u(l)}]])},[b("div",{ref_key:"refPopperContainer",ref:n,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[B(f.$slots,"default")],544),u(P).horizontalNav.transition?typeof u(P).horizontalNav.transition=="string"?(v(),R(ue,{key:1,name:u(P).horizontalNav.transition},{default:N(()=>[Lt(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:mt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36),[[Et,u(l)]])]),_:3},8,["name"])):(v(),R(_(u(P).horizontalNav.transition),{key:2},{default:N(()=>[Lt(b("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:mt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36),[[Et,u(l)]])]),_:3})):(v(),H("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:mt(u(r)),onMouseenter:a,onMouseleave:c},[b("div",null,[B(f.$slots,"content")])],36))],2))}},mn=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],pn={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},_n={__name:"DefaultLayoutWithHorizontalNav",setup(t){return(e,o)=>{const n=de("RouterLink");return v(),R(u(Te),{"nav-items":u(mn)},{navbar:N(()=>{var i;return[F(n,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:N(()=>[F(u(ye),{nodes:u(P).app.logo},null,8,["nodes"]),b("h1",pn,wt(u(P).app.title),1)]),_:1}),F(ve),u(P).app.i18n.enable&&((i=u(P).app.i18n.langConfig)!=null&&i.length)?(v(),R(ge,{key:0,languages:u(P).app.i18n.langConfig},null,8,["languages"])):xt("",!0),F(pe,{class:"me-2"}),F(he)]}),footer:N(()=>[F(me)]),default:N(()=>[B(e.$slots,"default")]),_:3},8,["nav-items"])}}};export{_n as default};
