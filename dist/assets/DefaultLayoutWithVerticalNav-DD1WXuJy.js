import{L as Q,M as x,T as q,r as w,N as X,k as P,i as E,w as S,a as F,f as v,o as n,e as c,d as g,z as C,b,n as e,q as r,J as k,x as _,K as $,g as p,s as y,c as O,F as M,h as H,y as R,O as Z,P as D,j as ee,Q as te,l as W,R as A,m as T,p as ae,t as j,v as G,U as z,V as ie,W as ne,X as se,Y as le,Z as oe,A as U,B as re,C as ce,$ as ve,H as B}from"./index-C_YW0fvW.js";import ue from"./Footer-DTXQtMTv.js";import de from"./UserProfile-c7aZCiAk.js";import{_ as me}from"./I18n-BMa5blmb.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as pe}from"./vue3-perfect-scrollbar-CIGf9gbV.js";import{V as fe}from"./VNodeRenderer-BCPdaQUG.js";import{V as ge}from"./VSpacer-BCsa1XW8.js";import"./VMenu-BvqmN1OI.js";import"./VOverlay-Bk2i1yGP.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-BAoymXMI.js";import"./VList-Br68t1cx.js";import"./VAvatar-Mv-fc8Jn.js";import"./VDivider-CPJwSM9S.js";/* empty css              */const he=Q({name:"TransitionExpand",setup(t,{slots:o}){const d=a=>{const N=getComputedStyle(a).width;a.style.width=N,a.style.position="absolute",a.style.visibility="hidden",a.style.height="auto";const h=getComputedStyle(a).height;a.style.width="",a.style.position="",a.style.visibility="",a.style.height="0px",getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height=h})},m=a=>{a.style.height="auto"},s=a=>{const N=getComputedStyle(a).height;a.style.height=N,getComputedStyle(a).height,requestAnimationFrame(()=>{a.style.height="0px"})};return()=>x(x(q),{name:"expand",onEnter:d,onAfterEnter:m,onLeave:s},()=>{var a;return(a=o.default)==null?void 0:a.call(o)})}}),ye=K(he,[["__scopeId","data-v-e5b9cc91"]]),Ne={class:"nav-header"},be={class:"header-action"},Ce={__name:"VerticalNav",props:{tag:{type:null,required:!1,default:"aside"},navItems:{type:null,required:!0},isOverlayNavActive:{type:Boolean,required:!0},toggleIsOverlayNavActive:{type:Function,required:!0}},setup(t){const o=t,d=w(),m=X(d);Z(D,m);const s=P(),a=i=>"heading"in i?je:"children"in i?$e:Y,N=E();S(()=>N.name,()=>{o.toggleIsOverlayNavActive(!1)});const h=w(!1),u=i=>h.value=i,V=i=>{h.value=i.target.scrollTop>0},I=s.isVerticalNavMini(m);return(i,l)=>{const f=F("RouterLink");return n(),v(p(o.tag),{ref_key:"refNav",ref:d,"data-allow-mismatch":"",class:R(["layout-vertical-nav",[{"overlay-nav":e(s).isLessThanOverlayNavBreakpoint,hovered:e(m),visible:t.isOverlayNavActive,scrolled:e(h)}]])},{default:c(()=>[g("div",Ne,[C(i.$slots,"nav-header",{},()=>[b(f,{to:"/",class:"app-logo app-title-wrapper"},{default:c(()=>[b(e(fe),{nodes:e(r).app.logo},null,8,["nodes"]),b(q,{name:"vertical-nav-app-title"},{default:c(()=>[k(g("h1",{class:"app-logo-title"},_(e(r).app.title),513),[[$,!e(I)]])]),_:1})]),_:1}),g("div",be,[k((n(),v(p(e(r).app.iconRenderer||"div"),y({class:["d-none nav-unpin",e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(r).icons.verticalNavUnPinned,{onClick:l[0]||(l[0]=L=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[$,e(s).isVerticalNavCollapsed]]),k((n(),v(p(e(r).app.iconRenderer||"div"),y({class:["d-none nav-pin",!e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(r).icons.verticalNavPinned,{onClick:l[1]||(l[1]=L=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[$,!e(s).isVerticalNavCollapsed]]),(n(),v(p(e(r).app.iconRenderer||"div"),y({class:"d-lg-none"},e(r).icons.close,{onClick:l[2]||(l[2]=L=>t.toggleIsOverlayNavActive(!1))}),null,16))])],!0)]),C(i.$slots,"before-nav-items",{},()=>[l[3]||(l[3]=g("div",{class:"vertical-nav-items-shadow"},null,-1))],!0),C(i.$slots,"nav-items",{updateIsVerticalNavScrolled:u},()=>[(n(),v(e(pe),{key:e(s).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:V},{default:c(()=>[(n(!0),O(M,null,H(t.navItems,(L,J)=>(n(),v(p(a(L)),{key:J,item:L},null,8,["item"]))),128))]),_:1}))],!0),C(i.$slots,"after-nav-items",{},void 0,!0)]),_:3},8,["class"])}}},Ve=K(Ce,[["__scopeId","data-v-eea602c3"]]),ke={class:"nav-group-children"},$e=Object.assign({name:"VerticalNavGroup"},{__name:"VerticalNavGroup",props:{item:{type:null,required:!0}},setup(t){const o=t,d=E(),m=ee(),s=P(),a=s.isVerticalNavMini(),N=te(D,w(!1)),h=w(!1),u=w(!1),V=i=>i.some(l=>{let f=A.value.includes(l.title);return"children"in l&&(f=V(l.children)||f),f}),I=i=>{i.forEach(l=>{"children"in l&&I(l.children),A.value=A.value.filter(f=>f!==l.title)})};return S(()=>d.path,()=>{const i=W(o.item.children,m);u.value=i&&!s.isVerticalNavMini(N).value,h.value=i},{immediate:!0}),S(u,i=>{const l=A.value.indexOf(o.item.title);i&&l===-1?A.value.push(o.item.title):!i&&l!==-1&&(A.value.splice(l,1),I(o.item.children))},{immediate:!0}),S(A,i=>{if(i.at(-1)===o.item.title)return;const f=W(o.item.children,m);f||V(o.item.children)||(u.value=f,h.value=f)},{deep:!0}),S(s.isVerticalNavMini(N),i=>{u.value=i?!1:h.value}),(i,l)=>e(ae)(t.item)?(n(),O("li",{key:0,class:R(["nav-group",[{active:e(h),open:e(u),disabled:t.item.disable}]])},[g("div",{class:"nav-group-label",onClick:l[0]||(l[0]=f=>u.value=!e(u))},[(n(),v(p(e(r).app.iconRenderer||"div"),y(t.item.icon||e(r).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(n(),v(p(z),{name:"transition-slide-x"},{default:c(()=>[k((n(),v(p(e(r).app.i18n.enable?"i18n-t":"span"),y(e(j)(t.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:c(()=>[G(_(t.item.title),1)]),_:1},16)),[[$,!e(a)]]),t.item.badgeContent?k((n(),v(p(e(r).app.i18n.enable?"i18n-t":"span"),y({key:0},e(j)(t.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",t.item.badgeClass]}),{default:c(()=>[G(_(t.item.badgeContent),1)]),_:1},16,["class"])),[[$,!e(a)]]):T("",!0),k((n(),v(p(e(r).app.iconRenderer||"div"),y(e(r).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[$,!e(a)]])]),_:1}))]),b(e(ye),null,{default:c(()=>[k(g("ul",ke,[(n(!0),O(M,null,H(t.item.children,f=>(n(),v(p("children"in f?"VerticalNavGroup":e(Y)),{key:f.title,item:f},null,8,["item"]))),128))],512),[[$,e(u)]])]),_:1})],2)):T("",!0)}}),Ae={class:"layout-content-wrapper"},we={class:"navbar-content-container"},Ie={class:"layout-page-content"},Se={class:"page-content-container"},Re={class:"layout-footer d-print-none"},_e={class:"footer-content-container"},Oe={__name:"VerticalNavLayout",props:{navItems:{type:null,required:!0},verticalNavAttrs:{type:Object,required:!1,default:()=>({})}},setup(t){const o=t,{width:d}=ie(),m=P(),s=w(!1),a=w(!1),N=ne(s);se(s,a),S(d,()=>{!m.isLessThanOverlayNavBreakpoint&&a.value&&(a.value=!1)});const h=le(()=>{const u=oe(o,"verticalNavAttrs"),{wrapper:V,wrapperProps:I,...i}=u.value;return{verticalNavWrapper:V,verticalNavWrapperProps:I,additionalVerticalNavAttrs:i}});return(u,V)=>(n(),O("div",{class:R(["layout-wrapper",e(m)._layoutClasses]),"data-allow-mismatch":""},[(n(),v(p(e(h).verticalNavWrapper?e(h).verticalNavWrapper:"div"),y(e(h).verticalNavWrapperProps,{class:"vertical-nav-wrapper"}),{default:c(()=>[b(e(Ve),y({"is-overlay-nav-active":e(s),"toggle-is-overlay-nav-active":e(N),"nav-items":o.navItems},{...e(h).additionalVerticalNavAttrs}),{"nav-header":c(()=>[C(u.$slots,"vertical-nav-header")]),"before-nav-items":c(()=>[C(u.$slots,"before-vertical-nav-items")]),_:3},16,["is-overlay-nav-active","toggle-is-overlay-nav-active","nav-items"])]),_:3},16)),g("div",Ae,[g("header",{class:R(["layout-navbar d-print-none",[{"navbar-blur":e(m).isNavbarBlurEnabled}]])},[g("div",we,[C(u.$slots,"navbar",{toggleVerticalOverlayNavActive:e(N)})])],2),g("main",Ie,[g("div",Se,[C(u.$slots,"default")])]),g("footer",Re,[g("div",_e,[C(u.$slots,"footer")])])]),g("div",{class:R(["layout-overlay",[{visible:e(a)}]]),onClick:V[0]||(V[0]=()=>{a.value=!e(a)})},null,2)],2))}},Y={__name:"VerticalNavLink",props:{item:{type:null,required:!0}},setup(t){const d=P().isVerticalNavMini();return(m,s)=>e(U)(t.item.action,t.item.subject)?(n(),O("li",{key:0,class:R(["nav-link",{disabled:t.item.disable}])},[(n(),v(p(t.item.to?"RouterLink":"a"),y(e(ce)(t.item),{class:{"router-link-active router-link-exact-active":e(re)(t.item,m.$router)}}),{default:c(()=>[(n(),v(p(e(r).app.iconRenderer||"div"),y(t.item.icon||e(r).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),b(z,{name:"transition-slide-x"},{default:c(()=>[k((n(),v(p(e(r).app.i18n.enable?"i18n-t":"span"),y({key:"title",class:"nav-item-title"},e(j)(t.item.title,"span")),{default:c(()=>[G(_(t.item.title),1)]),_:1},16)),[[$,!e(d)]]),t.item.badgeContent?k((n(),v(p(e(r).app.i18n.enable?"i18n-t":"span"),y({key:"badge",class:["nav-item-badge",t.item.badgeClass]},e(j)(t.item.badgeContent,"span")),{default:c(()=>[G(_(t.item.badgeContent),1)]),_:1},16,["class"])),[[$,!e(d)]]):T("",!0)]),_:1})]),_:1},16,["class"]))],2)):T("",!0)}},Te={key:0,class:"nav-section-title"},Le={class:"title-wrapper"},je={__name:"VerticalNavSectionTitle",props:{item:{type:null,required:!0}},setup(t){const d=P().isVerticalNavMini();return(m,s)=>e(U)(t.item.action,t.item.subject)?(n(),O("li",Te,[g("div",Le,[b(q,{name:"vertical-nav-section-title",mode:"out-in"},{default:c(()=>[(n(),v(p(e(d)?e(r).app.iconRenderer:e(r).app.i18n.enable?"i18n-t":"span"),y({key:e(d),class:e(d)?"placeholder-icon":"title-text"},{...e(r).icons.sectionTitlePlaceholder,...e(j)(t.item.heading,"span")}),{default:c(()=>[G(_(e(d)?null:t.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):T("",!0)}},Ge=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Roles",to:{name:"role-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"role"},{title:"Utilisateurs",to:{name:"user-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"user"},{title:"Tarifs des villes",to:{name:"tarif-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"tarif"},{title:"Gestion Colis",to:{name:"colis-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"colis"},{title:"Gestion Ramassage",to:{name:"ramassage-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"ramassage"},{title:"Gestion Retours",to:{name:"retour-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"retour"},{title:"Scanner retours",to:{name:"retour-scan"},icon:{icon:"tabler-smart-home"},action:"scan",subject:"retour"},{title:"Factures par livreur",to:{name:"facture-livreur-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"factureLivreur"},{title:"Factures par vendeur",to:{name:"facture-vendeur-list"},icon:{icon:"tabler-smart-home"},action:"list",subject:"factureVendeur"}],Pe={class:"d-flex h-100 align-center"},Ze={__name:"DefaultLayoutWithVerticalNav",setup(t){return(o,d)=>{const m=F("IconBtn");return n(),v(e(Oe),{"nav-items":e(Ge)},{navbar:c(({toggleVerticalOverlayNavActive:s})=>{var a;return[g("div",Pe,[b(m,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:N=>s(!0)},{default:c(()=>[b(ve,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),b(ge),e(B).app.i18n.enable&&((a=e(B).app.i18n.langConfig)!=null&&a.length)?(n(),v(me,{key:0,languages:e(B).app.i18n.langConfig},null,8,["languages"])):T("",!0),b(de)])]}),footer:c(()=>[b(ue)]),default:c(()=>[C(o.$slots,"default")]),_:3},8,["nav-items"])}}};export{Ze as default};
