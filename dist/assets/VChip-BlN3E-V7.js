import{a1 as Y,a2 as Z,aA as ge,bs as Se,bF as re,aB as G,Y as k,bG as le,bH as Ce,aF as ae,w as Ie,a9 as de,b as i,bI as ve,ac as j,bJ as Ve,af as ee,ag as w,aE as xe,bK as te,$ as E,aY as fe,ab as pe,b4 as Pe,aQ as he,b6 as ze,Z as W,s as X,aO as Ae,a5 as _e,aR as we,aS as Ee,aT as Re,aV as Fe,a4 as Te,b9 as Be,al as Ge,bL as Oe,aP as Me,J as ne,aX as De,ba as Le,aZ as We,ad as He,bM as $e,a_ as Ke,b0 as qe,b1 as Ne,b2 as se,b3 as Je,bN as Qe,aI as H,K as Ue,F as ie}from"./index-DC-Wnp_v.js";import{V as oe}from"./VAvatar-Cyrz8IHk.js";function Xe(e){let{selectedElement:n,containerElement:t,isRtl:u,isHorizontal:o}=e;const b=O(o,t),c=be(o,u,t),y=O(o,n),v=ye(o,n),g=y*.4;return c>v?v-g:c+b<v+y?v-b+y+g:c}function Ye(e){let{selectedElement:n,containerElement:t,isHorizontal:u}=e;const o=O(u,t),b=ye(u,n),c=O(u,n);return b-o/2+c/2}function ce(e,n){const t=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[t])||0}function Ze(e,n){const t=e?"clientWidth":"clientHeight";return(n==null?void 0:n[t])||0}function be(e,n,t){if(!t)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:b}=t;return e?n?b-o+u:u:t.scrollTop}function O(e,n){const t=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[t])||0}function ye(e,n){const t=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[t])||0}const je=Symbol.for("vuetify:v-slide-group"),me=Z({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:je},nextIcon:{type:w,default:"$next"},prevIcon:{type:w,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ee(),...Ve({mobile:null}),...j(),...ve({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ue=Y()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:u}=ge(),{displayClasses:o,mobile:b}=Se(e),c=re(e,e.symbol),y=G(!1),v=G(0),g=G(0),I=G(0),d=k(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:R}=le(),{resizeRef:p,contentRect:x}=le(),s=Ce(),m=k(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),$=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(ae){let l=-1;Ie(()=>[c.selected.value,R.value,x.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(R.value&&x.value){const a=d.value?"width":"height";g.value=R.value[a],I.value=x.value[a],y.value=g.value+1<I.value}if($.value>=0&&p.el){const a=p.el.children[S.value];F(a,e.centerActive)}})})}const P=G(!1);function F(l,a){let r=0;a?r=Ye({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),M(r)}function M(l){if(!ae||!f.el)return;const a=O(d.value,f.el),r=be(d.value,u.value,f.el);if(!(ce(d.value,f.el)<=a||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:L,offsetWidth:U}=f.el;l=L-U-l}d.value?s.horizontal(l,m.value):s(l,m.value)}}function h(l){const{scrollTop:a,scrollLeft:r}=l.target;v.value=d.value?r:a}function V(l){if(P.value=!0,!(!y.value||!p.el)){for(const a of l.composedPath())for(const r of p.el.children)if(r===a){F(r);return}}}function K(l){P.value=!1}let T=!1;function D(l){var a;!T&&!P.value&&!(l.relatedTarget&&((a=p.el)!=null&&a.contains(l.relatedTarget)))&&C(),T=!1}function B(){T=!0}function q(l){if(!p.el)return;function a(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?a(u.value?"prev":"next"):l.key==="ArrowLeft"&&a(u.value?"next":"prev"):l.key==="ArrowDown"?a("next"):l.key==="ArrowUp"&&a("prev"),l.key==="Home"?a("first"):l.key==="End"&&a("last")}function C(l){var r,_;if(!p.el)return;let a;if(!l)a=xe(p.el)[0];else if(l==="next"){if(a=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!a)return C("first")}else if(l==="prev"){if(a=(_=p.el.querySelector(":focus"))==null?void 0:_.previousElementSibling,!a)return C("last")}else l==="first"?a=p.el.firstElementChild:l==="last"&&(a=p.el.lastElementChild);a&&a.focus({preventScroll:!0})}function z(l){const a=d.value&&u.value?-1:1,r=(l==="prev"?-a:a)*g.value;let _=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:L,offsetWidth:U}=f.el;_+=L-U}M(_)}const A=k(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),N=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!b.value;case!0:return y.value||Math.abs(v.value)>0;case"mobile":return b.value||y.value||Math.abs(v.value)>0;default:return!b.value&&(y.value||Math.abs(v.value)>0)}}),J=k(()=>Math.abs(v.value)>1),Q=k(()=>{if(!f.value)return!1;const l=ce(d.value,f.el),a=Ze(d.value,f.el);return l-a-Math.abs(v.value)>1});return de(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":N.value,"v-slide-group--is-overflowing":y.value},o.value,e.class],style:e.style,tabindex:P.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,a,r;return[N.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!J.value}],onMousedown:B,onClick:()=>J.value&&z("prev")},[((l=t.prev)==null?void 0:l.call(t,A.value))??i(te,null,{default:()=>[i(E,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:V,onFocusout:K,onKeydown:q},[(a=t.default)==null?void 0:a.call(t,A.value)])]),N.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Q.value}],onMousedown:B,onClick:()=>Q.value&&z("next")},[((r=t.next)==null?void 0:r.call(t,A.value))??i(te,null,{default:()=>[i(E,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:z,scrollOffset:v,focus:C,hasPrev:J,hasNext:Q}}}),ke=Symbol.for("vuetify:v-chip-group"),el=Z({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Pe},...me(),...ee(),...ve({selectedClass:"v-chip--selected"}),...j(),...pe(),...fe({variant:"tonal"})},"VChipGroup");Y()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:u}=he(e),{isSelected:o,select:b,next:c,prev:y,selected:v}=re(e,ke);return ze({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),de(()=>{const g=ue.filterProps(e);return i(ue,X(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var I;return[(I=t.default)==null?void 0:I.call(t,{isSelected:o,select:b,next:c,prev:y,selected:v.value})]}})}),{}}});const ll=Z({activeClass:String,appendAvatar:String,appendIcon:w,closable:Boolean,closeIcon:{type:w,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:w,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:w,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:se(),onClickOnce:se(),...Ne(),...ee(),...qe(),...Ke(),...$e(),...He(),...We(),...Le(),...j({tag:"span"}),...pe(),...fe({variant:"tonal"})},"VChip"),nl=Y()({name:"VChip",directives:{Ripple:Ae},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:t,emit:u,slots:o}=n;const{t:b}=_e(),{borderClasses:c}=we(e),{colorClasses:y,colorStyles:v,variantClasses:g}=Ee(e),{densityClasses:I}=Re(e),{elevationClasses:d}=Fe(e),{roundedClasses:f}=Te(e),{sizeClasses:R}=Be(e),{themeClasses:p}=he(e),x=Ge(e,"modelValue"),s=Oe(e,ke,!1),m=Me(e,t),$=k(()=>e.link!==!1&&m.isLink.value),S=k(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||m.isClickable.value)),P=k(()=>({"aria-label":b(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),x.value=!1,u("click:close",h)}}));function F(h){var V;u("click",h),S.value&&((V=m.navigate)==null||V.call(m,h),s==null||s.toggle())}function M(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),F(h))}return()=>{var z;const h=m.isLink.value?"a":e.tag,V=!!(e.appendIcon||e.appendAvatar),K=!!(V||o.append),T=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,B=!!(e.prependIcon||e.prependAvatar),q=!!(B||o.prepend),C=!s||s.isSelected.value;return x.value&&ne(i(h,X({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill,[`${e.activeClass}`]:e.activeClass&&((z=m.isActive)==null?void 0:z.value)},p.value,c.value,C?y.value:void 0,I.value,d.value,f.value,R.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:S.value?0:void 0,onClick:F,onKeydown:S.value&&!$.value&&M},m.linkProps),{default:()=>{var A;return[Je(S.value,"v-chip"),D&&i(Qe,{key:"filter"},{default:()=>[ne(i("div",{class:"v-chip__filter"},[o.filter?i(H,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(E,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ue,s.isSelected.value]])]}),q&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(H,{key:"prepend-defaults",disabled:!B,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ie,null,[e.prependIcon&&i(E,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(oe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((A=o.default)==null?void 0:A.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),K&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(H,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ie,null,[e.appendIcon&&i(E,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(oe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),T&&i("button",X({key:"close",class:"v-chip__close",type:"button","data-testid":"close-chip"},P.value),[o.close?i(H,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(E,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[De("ripple"),S.value&&e.ripple,null]])}}});export{nl as V,ue as a,me as m};
