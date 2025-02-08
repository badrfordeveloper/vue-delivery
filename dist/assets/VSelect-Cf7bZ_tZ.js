import{a as De,m as Re,u as Fe,V as Ve}from"./VTextField-DmD_WYFy.js";import{a1 as U,a2 as oe,bg as Oe,a3 as ue,aJ as _e,a7 as Ee,a8 as X,am as Y,an as ke,Y as y,O as Le,br as me,b4 as Me,Z as D,af as Z,b as s,bs as Ue,ar as E,r as z,aF as He,q as L,J as qe,bt as $e,F as Q,$ as de,Q as Ne,aQ as ze,as as ae,ac as Ke,a9 as Ge,az as ve,at as he,al as we,b5 as Ie,w as K,b3 as je,bd as be,bb as se,bu as We,au as fe,aK as Je,ba as Qe,aR as Ye,bv as Xe,G as Ze,b8 as ne,ab as el,av as ll,aw as tl,t as nl,ay as pe}from"./index-B8o6XWUs.js";import{f as al}from"./forwardRefs-DWGaNmQL.js";import{m as ol,u as ul,V as il,a as Ce}from"./VList-Cwnv6z4G.js";import{m as rl}from"./VImg-DdNh8-7M.js";import{g as sl,a as cl}from"./VOverlay-BkZ_veo4.js";import{V as dl}from"./VMenu-xqu6wRhm.js";import{V as vl}from"./VAvatar-CL2L54QD.js";import{V as fl}from"./VChip-Fri2bxdA.js";const xe=Symbol.for("vuetify:selection-control-group"),Pe=U({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:oe,trueIcon:oe,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Oe},...ue(),..._e(),...Ee()},"SelectionControlGroup"),ml=U({...Pe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ul=X()({name:"VSelectionControlGroup",props:ml(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:n}=r;const u=Y(e,"modelValue"),o=ke(),f=y(()=>e.id||`v-selection-control-group-${o}`),d=y(()=>e.name||f.value),a=new Set;return Le(xe,{modelValue:u,forceUpdate:()=>{a.forEach(t=>t())},onForceUpdate:t=>{a.add(t),me(()=>{a.delete(t)})}}),Me({[e.defaultsTarget]:{color:D(e,"color"),disabled:D(e,"disabled"),density:D(e,"density"),error:D(e,"error"),inline:D(e,"inline"),modelValue:u,multiple:y(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),name:d,falseIcon:D(e,"falseIcon"),trueIcon:D(e,"trueIcon"),readonly:D(e,"readonly"),ripple:D(e,"ripple"),type:D(e,"type"),valueComparator:D(e,"valueComparator")}}),Z(()=>{var t;return s("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Te=U({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ue(),...Pe()},"VSelectionControl");function hl(e){const r=Ne(xe,void 0),{densityClasses:n}=ze(e),u=Y(e,"modelValue"),o=y(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),f=y(()=>e.falseValue!==void 0?e.falseValue:!1),d=y(()=>!!e.multiple||e.multiple==null&&Array.isArray(u.value)),a=y({get(){const V=r?r.modelValue.value:u.value;return d.value?ae(V).some(k=>e.valueComparator(k,o.value)):e.valueComparator(V,o.value)},set(V){if(e.readonly)return;const k=V?o.value:f.value;let p=k;d.value&&(p=V?[...ae(u.value),k]:ae(u.value).filter(m=>!e.valueComparator(m,o.value))),r?r.modelValue.value=p:u.value=p}}),{textColorClasses:t,textColorStyles:g}=Ke(y(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:x,backgroundColorStyles:A}=Ge(y(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),c=y(()=>a.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:n,trueValue:o,falseValue:f,model:a,textColorClasses:t,textColorStyles:g,backgroundColorClasses:x,backgroundColorStyles:A,icon:c}}const Se=X()({name:"VSelectionControl",directives:{Ripple:Ue},inheritAttrs:!1,props:Te(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:n,slots:u}=r;const{group:o,densityClasses:f,icon:d,model:a,textColorClasses:t,textColorStyles:g,backgroundColorClasses:x,backgroundColorStyles:A,trueValue:c}=hl(e),V=ke(),k=E(!1),p=E(!1),m=z(),C=y(()=>e.id||`input-${V}`),w=y(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{m.value&&(m.value.checked=a.value)});function O(b){w.value&&(k.value=!0,ve(b.target,":focus-visible")!==!1&&(p.value=!0))}function T(){k.value=!1,p.value=!1}function G(b){b.stopPropagation()}function ee(b){if(!w.value){m.value&&(m.value.checked=a.value);return}e.readonly&&o&&he(()=>o.forceUpdate()),a.value=b.target.checked}return Z(()=>{var q,N;const b=u.label?u.label({label:e.label,props:{for:C.value}}):e.label,[j,H]=He(n),_=s("input",L({ref:m,checked:a.value,disabled:!!e.disabled,id:C.value,onBlur:T,onFocus:O,onInput:ee,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:c.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null);return s("div",L({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":k.value,"v-selection-control--focus-visible":p.value,"v-selection-control--inline":e.inline},f.value,e.class]},j,{style:e.style}),[s("div",{class:["v-selection-control__wrapper",t.value],style:g.value},[(q=u.default)==null?void 0:q.call(u,{backgroundColorClasses:x,backgroundColorStyles:A}),qe(s("div",{class:["v-selection-control__input"]},[((N=u.input)==null?void 0:N.call(u,{model:a,textColorClasses:t,textColorStyles:g,backgroundColorClasses:x,backgroundColorStyles:A,inputNode:_,icon:d.value,props:{onFocus:O,onBlur:T,id:C.value}}))??s(Q,null,[d.value&&s(de,{key:"icon",icon:d.value},null),_])]),[[$e("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),b&&s(De,{for:C.value,onClick:G},{default:()=>[b]})])}),{isFocused:k,input:m}}}),gl=U({indeterminate:Boolean,indeterminateIcon:{type:oe,default:"$checkboxIndeterminate"},...Te({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),yl=X()({name:"VCheckboxBtn",props:gl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:n}=r;const u=Y(e,"indeterminate"),o=Y(e,"modelValue");function f(t){u.value&&(u.value=!1)}const d=y(()=>u.value?e.indeterminateIcon:e.falseIcon),a=y(()=>u.value?e.indeterminateIcon:e.trueIcon);return Z(()=>{const t=we(Se.filterProps(e),["modelValue"]);return s(Se,L(t,{modelValue:o.value,"onUpdate:modelValue":[g=>o.value=g,f],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:d.value,trueIcon:a.value,"aria-checked":u.value?"mixed":void 0}),n)}),{}}}),Vl=U({renderless:Boolean,...ue()},"VVirtualScrollItem"),bl=X()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Vl(),emits:{"update:height":e=>!0},setup(e,r){let{attrs:n,emit:u,slots:o}=r;const{resizeRef:f,contentRect:d}=Ie(void 0,"border");K(()=>{var a;return(a=d.value)==null?void 0:a.height},a=>{a!=null&&u("update:height",a)}),Z(()=>{var a,t;return e.renderless?s(Q,null,[(a=o.default)==null?void 0:a.call(o,{itemRef:f})]):s("div",L({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(t=o.default)==null?void 0:t.call(o)])})}}),pl=-1,Cl=1,ce=100,Sl=U({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function kl(e,r){const n=je(),u=E(0);be(()=>{u.value=parseFloat(e.itemHeight||0)});const o=E(0),f=E(Math.ceil((parseInt(e.height)||n.height.value)/(u.value||16))||1),d=E(0),a=E(0),t=z(),g=z();let x=0;const{resizeRef:A,contentRect:c}=Ie();be(()=>{A.value=t.value});const V=y(()=>{var l;return t.value===document.documentElement?n.height.value:((l=c.value)==null?void 0:l.height)||parseInt(e.height)||0}),k=y(()=>!!(t.value&&g.value&&V.value&&u.value));let p=Array.from({length:r.value.length}),m=Array.from({length:r.value.length});const C=E(0);let w=-1;function O(l){return p[l]||u.value}const T=We(()=>{const l=performance.now();m[0]=0;const i=r.value.length;for(let h=1;h<=i-1;h++)m[h]=(m[h-1]||0)+O(h-1);C.value=Math.max(C.value,performance.now()-l)},C),G=K(k,l=>{l&&(G(),x=g.value.offsetTop,T.immediate(),M(),~w&&he(()=>{fe&&window.requestAnimationFrame(()=>{te(w),w=-1})}))});me(()=>{T.clear()});function ee(l,i){const h=p[l],S=u.value;u.value=S?Math.min(u.value,i):i,(h!==i||S!==u.value)&&(p[l]=i,T())}function b(l){return l=se(l,0,r.value.length-1),m[l]||0}function j(l){return wl(m,l)}let H=0,_=0,q=0;K(V,(l,i)=>{i&&(M(),l<i&&requestAnimationFrame(()=>{_=0,M()}))});function N(){if(!t.value||!g.value)return;const l=t.value.scrollTop,i=performance.now();i-q>500?(_=Math.sign(l-H),x=g.value.offsetTop):_=l-H,H=l,q=i,M()}function W(){!t.value||!g.value||(_=0,q=0,M())}let le=-1;function M(){cancelAnimationFrame(le),le=requestAnimationFrame(ie)}function ie(){if(!t.value||!V.value)return;const l=H-x,i=Math.sign(_),h=Math.max(0,l-ce),S=se(j(h),0,r.value.length),R=l+V.value+ce,v=se(j(R)+1,S+1,r.value.length);if((i!==pl||S<o.value)&&(i!==Cl||v>f.value)){const I=b(o.value)-b(S),P=b(v)-b(f.value);Math.max(I,P)>ce?(o.value=S,f.value=v):(S<=0&&(o.value=S),v>=r.value.length&&(f.value=v))}d.value=b(o.value),a.value=b(r.value.length)-b(f.value)}function te(l){const i=b(l);!t.value||l&&!i?w=l:t.value.scrollTop=i}const re=y(()=>r.value.slice(o.value,f.value).map((l,i)=>({raw:l,index:i+o.value})));return K(r,()=>{p=Array.from({length:r.value.length}),m=Array.from({length:r.value.length}),T.immediate(),M()},{deep:!0}),{calculateVisibleItems:M,containerRef:t,markerRef:g,computedItems:re,paddingTop:d,paddingBottom:a,scrollToIndex:te,handleScroll:N,handleScrollend:W,handleItemResize:ee}}function wl(e,r){let n=e.length-1,u=0,o=0,f=null,d=-1;if(e[n]<r)return n;for(;u<=n;)if(o=u+n>>1,f=e[o],f>r)n=o-1;else if(f<r)d=o,u=o+1;else return f===r?o:u;return d}const Il=U({items:{type:Array,default:()=>[]},renderless:Boolean,...Sl(),...ue(),...Je()},"VVirtualScroll"),xl=X()({name:"VVirtualScroll",props:Il(),setup(e,r){let{slots:n}=r;const u=Qe("VVirtualScroll"),{dimensionStyles:o}=Ye(e),{calculateVisibleItems:f,containerRef:d,markerRef:a,handleScroll:t,handleScrollend:g,handleItemResize:x,scrollToIndex:A,paddingTop:c,paddingBottom:V,computedItems:k}=kl(e,D(e,"items"));return Xe(()=>e.renderless,()=>{function p(){var w,O;const C=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";d.value===document.documentElement?(document[C]("scroll",t,{passive:!0}),document[C]("scrollend",g)):((w=d.value)==null||w[C]("scroll",t,{passive:!0}),(O=d.value)==null||O[C]("scrollend",g))}Ze(()=>{d.value=sl(u.vnode.el,!0),p(!0)}),me(p)}),Z(()=>{const p=k.value.map(m=>s(bl,{key:m.index,renderless:e.renderless,"onUpdate:height":C=>x(m.index,C)},{default:C=>{var w;return(w=n.default)==null?void 0:w.call(n,{item:m.raw,index:m.index,...C})}}));return e.renderless?s(Q,null,[s("div",{ref:a,class:"v-virtual-scroll__spacer",style:{paddingTop:ne(c.value)}},null),p,s("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ne(V.value)}},null)]):s("div",{ref:d,class:["v-virtual-scroll",e.class],onScrollPassive:t,onScrollend:g,style:[o.value,e.style]},[s("div",{ref:a,class:"v-virtual-scroll__container",style:{paddingTop:ne(c.value),paddingBottom:ne(V.value)}},[p])])}),{calculateVisibleItems:f,scrollToIndex:A}}});function Pl(e,r){const n=E(!1);let u;function o(a){cancelAnimationFrame(u),n.value=!0,u=requestAnimationFrame(()=>{u=requestAnimationFrame(()=>{n.value=!1})})}async function f(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(n.value){const t=K(n,()=>{t(),a()})}else a()})}async function d(a){var x,A;if(a.key==="Tab"&&((x=r.value)==null||x.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const t=(A=e.value)==null?void 0:A.$el;if(!t)return;(a.key==="Home"||a.key==="End")&&t.scrollTo({top:a.key==="Home"?0:t.scrollHeight,behavior:"smooth"}),await f();const g=t.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const c=t.getBoundingClientRect().top;for(const V of g)if(V.getBoundingClientRect().top>=c){V.focus();break}}else{const c=t.getBoundingClientRect().bottom;for(const V of[...g].reverse())if(V.getBoundingClientRect().bottom<=c){V.focus();break}}}return{onScrollPassive:o,onKeydown:d}}const Tl=U({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:oe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...ol({itemChildren:!1})},"Select"),Al=U({...Tl(),...we(Re({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...rl({transition:{component:cl}})},"VSelect"),Hl=X()({name:"VSelect",props:Al(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:n}=r;const{t:u}=el(),o=z(),f=z(),d=z(),a=Y(e,"menu"),t=y({get:()=>a.value,set:l=>{var i;a.value&&!l&&((i=f.value)!=null&&i.ΨopenChildren.size)||(a.value=l)}}),{items:g,transformIn:x,transformOut:A}=ul(e),c=Y(e,"modelValue",[],l=>x(l===null?[null]:ae(l)),l=>{const i=A(l);return e.multiple?i:i[0]??null}),V=y(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:c.value.length),k=Fe(e),p=y(()=>c.value.map(l=>l.value)),m=E(!1),C=y(()=>t.value?e.closeText:e.openText);let w="",O;const T=y(()=>e.hideSelected?g.value.filter(l=>!c.value.some(i=>e.valueComparator(i,l))):g.value),G=y(()=>e.hideNoData&&!T.value.length||k.isReadonly.value||k.isDisabled.value),ee=y(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),b=z(),j=Pl(b,o);function H(l){e.openOnClear&&(t.value=!0)}function _(){G.value||(t.value=!t.value)}function q(l){pe(l)&&N(l)}function N(l){var R,v;if(!l.key||k.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(t.value=!0),["Escape","Tab"].includes(l.key)&&(t.value=!1),l.key==="Home"?(R=b.value)==null||R.focus("first"):l.key==="End"&&((v=b.value)==null||v.focus("last"));const i=1e3;if(e.multiple||!pe(l))return;const h=performance.now();h-O>i&&(w=""),w+=l.key.toLowerCase(),O=h;const S=g.value.find(I=>I.title.toLowerCase().startsWith(w));if(S!==void 0){c.value=[S];const I=T.value.indexOf(S);fe&&window.requestAnimationFrame(()=>{var P;I>=0&&((P=d.value)==null||P.scrollToIndex(I))})}}function W(l){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const h=c.value.findIndex(R=>e.valueComparator(R.value,l.value)),S=i??!~h;if(~h){const R=S?[...c.value,l]:[...c.value];R.splice(h,1),c.value=R}else S&&(c.value=[...c.value,l])}else{const h=i!==!1;c.value=h?[l]:[],he(()=>{t.value=!1})}}function le(l){var i;(i=b.value)!=null&&i.$el.contains(l.relatedTarget)||(t.value=!1)}function M(){var l;e.eager&&((l=d.value)==null||l.calculateVisibleItems())}function ie(){var l;m.value&&((l=o.value)==null||l.focus())}function te(l){m.value=!0}function re(l){if(l==null)c.value=[];else if(ve(o.value,":autofill")||ve(o.value,":-webkit-autofill")){const i=g.value.find(h=>h.title===l);i&&W(i)}else o.value&&(o.value.value="")}return K(t,()=>{if(!e.hideSelected&&t.value&&c.value.length){const l=T.value.findIndex(i=>c.value.some(h=>e.valueComparator(h.value,i.value)));fe&&window.requestAnimationFrame(()=>{var i;l>=0&&((i=d.value)==null||i.scrollToIndex(l))})}}),K(()=>e.items,(l,i)=>{t.value||m.value&&!i.length&&l.length&&(t.value=!0)}),Z(()=>{const l=!!(e.chips||n.chip),i=!!(!e.hideNoData||T.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),h=c.value.length>0,S=Ve.filterProps(e),R=h||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return s(Ve,L({ref:o},S,{modelValue:c.value.map(v=>v.props.value).join(", "),"onUpdate:modelValue":re,focused:m.value,"onUpdate:focused":v=>m.value=v,validationValue:c.externalValue,counterValue:V.value,dirty:h,class:["v-select",{"v-select--active-menu":t.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:R,"onClick:clear":H,"onMousedown:control":_,onBlur:le,onKeydown:N,"aria-label":u(C.value),title:u(C.value)}),{...n,default:()=>s(Q,null,[s(dl,L({ref:f,modelValue:t.value,"onUpdate:modelValue":v=>t.value=v,activator:"parent",contentClass:"v-select__content",disabled:G.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:M,onAfterLeave:ie},ee.value),{default:()=>[i&&s(il,L({ref:b,selected:p.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:v=>v.preventDefault(),onKeydown:q,onFocusin:te,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},j,e.listProps),{default:()=>{var v,I,P;return[(v=n["prepend-item"])==null?void 0:v.call(n),!T.value.length&&!e.hideNoData&&(((I=n["no-data"])==null?void 0:I.call(n))??s(Ce,{title:u(e.noDataText)},null)),s(xl,{ref:d,renderless:!0,items:T.value},{default:$=>{var ye;let{item:F,index:J,itemRef:B}=$;const ge=L(F.props,{ref:B,key:J,onClick:()=>W(F,null)});return((ye=n.item)==null?void 0:ye.call(n,{item:F,index:J,props:ge}))??s(Ce,L(ge,{role:"option"}),{prepend:Ae=>{let{isSelected:Be}=Ae;return s(Q,null,[e.multiple&&!e.hideSelected?s(yl,{key:F.value,modelValue:Be,ripple:!1,tabindex:"-1"},null):void 0,F.props.prependAvatar&&s(vl,{image:F.props.prependAvatar},null),F.props.prependIcon&&s(de,{icon:F.props.prependIcon},null)])}})}}),(P=n["append-item"])==null?void 0:P.call(n)]}})]}),c.value.map((v,I)=>{function P(B){B.stopPropagation(),B.preventDefault(),W(v,!1)}const $={"onClick:close":P,onKeydown(B){B.key!=="Enter"&&B.key!==" "||(B.preventDefault(),B.stopPropagation(),P(B))},onMousedown(B){B.preventDefault(),B.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},F=l?!!n.chip:!!n.selection,J=F?ll(l?n.chip({item:v,index:I,props:$}):n.selection({item:v,index:I})):void 0;if(!(F&&!J))return s("div",{key:v.value,class:"v-select__selection"},[l?n.chip?s(tl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:v.title}}},{default:()=>[J]}):s(fl,L({key:"chip",closable:e.closableChips,size:"small",text:v.title,disabled:v.props.disabled},$),null):J??s("span",{class:"v-select__selection-text"},[v.title,e.multiple&&I<c.value.length-1&&s("span",{class:"v-select__selection-comma"},[nl(",")])])])})]),"append-inner":function(){var $;for(var v=arguments.length,I=new Array(v),P=0;P<v;P++)I[P]=arguments[P];return s(Q,null,[($=n["append-inner"])==null?void 0:$.call(n,...I),e.menuIcon?s(de,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),al({isFocused:m,menu:t,select:W},o)}});export{xl as V,yl as a,Te as b,Se as c,Pe as d,Ul as e,gl as f,Hl as g,Tl as m,Pl as u};
