import{a5 as K,ba as P,aI as N,ai as U,a7 as j,aj as q,Z as z,bb as E,bv as M,aD as J,al as O,Y as Q,a_ as X,aa as Y,b as s,q as Z,bS as G,r as x,w as C,o as f,f as H,e as n,m as d,a4 as W,bT as B,d as c,$ as w,J as S,z as h,K as _,c as D,F as L,h as $,t as ee,v as A,y as R}from"./index-Bs2RNO2c.js";import{C as ae}from"./vue3-perfect-scrollbar-cRfN59Vv.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as se}from"./VCard-DGGXX4Kw.js";import{V as T}from"./VCardText-paiP_Zt_.js";import{c as ie}from"./VTextField-u0xzw2dW.js";import{V as re}from"./VDivider-aTOdqVjr.js";import{V as le,a as oe}from"./VList-B2D3WP8O.js";import{V as ne}from"./VDialog-DVaoMeUy.js";import"./VAvatar-B0jp4-Bf.js";import"./VImg-ChlwgMlx.js";import"./forwardRefs-DWGaNmQL.js";import"./VOverlay-CFu6OK1m.js";const de={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ce(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[i])}function F(e){const[i,t]=e.split("@");return Array.from({length:t}).map(()=>v(i))}function v(e){let i=[];if(!e)return i;const t=de[e];if(e!==t){if(e.includes(","))return I(e);if(e.includes("@"))return F(e);t.includes(",")?i=I(t):t.includes("@")?i=F(t):t&&i.push(v(t))}return[ce(e,i)]}function I(e){return e.replace(/\s/g,"").split(",").map(v)}const ue=K({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...P(),...N(),...U()},"VSkeletonLoader"),pe=j()({name:"VSkeletonLoader",props:ue(),setup(e,i){let{slots:t}=i;const{backgroundColorClasses:p,backgroundColorStyles:b}=q(z(e,"color")),{dimensionStyles:y}=E(e),{elevationClasses:m}=M(e),{themeClasses:k}=J(e),{t:r}=O(),u=Q(()=>v(X(e.type).join(",")));return Y(()=>{var a;const g=!t.default||e.loading,V=e.boilerplate||!g?{}:{ariaLive:"polite",ariaLabel:r(e.loadingText),role:"alert"};return s("div",Z({class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},k.value,p.value,m.value],style:[b.value,g?y.value:{}]},V),[g?u.value:(a=t.default)==null?void 0:a.call(t)])}),{}}}),me={class:"d-flex align-center text-high-emphasis me-1"},ge={class:"d-flex align-start"},fe={class:"h-100"},he={class:"h-100"},ve={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis pa-12"},be={class:"d-flex align-center flex-wrap justify-center gap-2 text-h5 mt-3"},ye={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchResults:{type:Array,required:!0},isLoading:{type:Boolean,required:!1}},emits:["update:isDialogVisible","search"],setup(e,{emit:i}){const t=e,p=i,{ctrl_k:b,meta_k:y}=G({passive:!1,onEventFired(a){a.ctrlKey&&a.key==="k"&&a.type==="keydown"&&a.preventDefault()}}),m=x(),k=x(),r=x("");C([b,y],()=>{p("update:isDialogVisible",!0)});const u=()=>{r.value="",p("update:isDialogVisible",!1)},g=a=>{var o,l;a.key==="ArrowDown"?(a.preventDefault(),(o=m.value)==null||o.focus("next")):a.key==="ArrowUp"&&(a.preventDefault(),(l=m.value)==null||l.focus("prev"))},V=a=>{r.value="",p("update:isDialogVisible",a)};return C(()=>t.isDialogVisible,()=>{r.value=""}),(a,o)=>(f(),H(ne,{"max-width":"600","model-value":t.isDialogVisible,height:a.$vuetify.display.smAndUp?"531":"100%",fullscreen:a.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":V,onKeyup:B(u,["esc"])},{default:n(()=>[s(se,{height:"100%",width:"100%",class:"position-relative"},{default:n(()=>[s(T,{class:"px-4",style:{"padding-block":"1rem 1.2rem"}},{default:n(()=>[s(ie,{ref_key:"refSearchInput",ref:k,modelValue:d(r),"onUpdate:modelValue":[o[0]||(o[0]=l=>W(r)?r.value=l:null),o[1]||(o[1]=l=>a.$emit("search",d(r)))],autofocus:"",density:"compact",variant:"plain",class:"app-bar-search-input",onKeyup:B(u,["esc"]),onKeydown:g},{"prepend-inner":n(()=>[c("div",me,[s(w,{size:"24",icon:"tabler-search"})])]),"append-inner":n(()=>[c("div",ge,[c("div",{class:"text-base text-disabled cursor-pointer me-3",onClick:u}," [esc] "),s(w,{icon:"tabler-x",size:"24",onClick:u})])]),_:1},8,["modelValue"])]),_:1}),s(re),s(d(ae),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:n(()=>[S(c("div",fe,[h(a.$slots,"suggestions",{},void 0,!0)],512),[[_,!!t.searchResults&&!d(r)&&a.$slots.suggestions]]),e.isLoading?R("",!0):(f(),D(L,{key:0},[S(s(d(le),{ref_key:"refSearchList",ref:m,density:"compact",class:"app-bar-search-list py-0"},{default:n(()=>[(f(!0),D(L,null,$(t.searchResults,l=>h(a.$slots,"searchResult",{key:l,item:l},()=>[s(d(oe),null,{default:n(()=>[ee(A(l),1)]),_:2},1024)],!0)),128))]),_:3},512),[[_,d(r).length&&!!t.searchResults.length]]),S(c("div",he,[h(a.$slots,"noData",{},()=>[s(T,{class:"h-100"},{default:n(()=>[c("div",ve,[s(w,{size:"64",icon:"tabler-file-alert"}),c("div",be,[o[2]||(o[2]=c("span",null,"No Result For ",-1)),c("span",null,'"'+A(d(r))+'"',1)]),h(a.$slots,"noDataSuggestion",{},void 0,!0)])]),_:3})],!0)],512),[[_,!t.searchResults.length&&d(r).length]])],64)),e.isLoading?(f(),D(L,{key:1},$(3,l=>s(pe,{key:l,type:"list-item-two-line"})),64)):R("",!0)]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen"]))}},Te=te(ye,[["__scopeId","data-v-7f0121e3"]]);export{Te as default};
