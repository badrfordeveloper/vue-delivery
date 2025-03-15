import{s as se}from"./statutInfos-BBtLoj05.js";import{P as oe,_ as le}from"./printRamassage-RUJET6Aq.js";import{_ as ne}from"./DialogCloseBtn-hjQAM4Ms.js";import{V as re,_ as ie,c as me}from"./VDataTableServer-uCDTjm2y.js";import{_ as ue}from"./AppSelect-C0-sczRk.js";import{_ as pe}from"./AppTextField-Ko2bKItW.js";import{r as l,aq as de,j as fe,Y as R,a as ce,c as j,o as r,b as s,f as d,m as f,e as o,d as F,ak as i,n as a,A as b,ai as I,v,$ as O,s as ge,x as L}from"./index-D7yJXdJy.js";import{$ as ve}from"./VForm-DnlssNIV.js";import{t as Ve}from"./toast-BvykrbAm.js";import{u as _e}from"./index-BSDdKVsK.js";import{V as q}from"./VCardText-DG6BKODZ.js";import{V as ye,a as h}from"./VRow-CUggEZk2.js";import{V as z}from"./VDivider-CS0fj1z-.js";import{V as ke}from"./VSpacer-Bdz4Ngn8.js";import{V as Ce}from"./VMenu-CpeeX_P2.js";import{V as be,a as Ie}from"./VList-DiSHM2Z9.js";import{V as we}from"./VChip-ft8FN7z7.js";import{V as xe}from"./VDialog-QHPGG0zZ.js";import{V as K}from"./VCard-BzgJ_axc.js";import"./VTabs-Ecx7Hz-1.js";import"./VOverlay-COMBmcfa.js";import"./forwardRefs-DWGaNmQL.js";import"./VImg-CAZDB8sp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./AppTextarea-BYSUsSWJ.js";import"./VInput-9emClv3n.js";import"./AppDateTimePicker-BzHRiTQB.js";import"./VAlert-BZSlD2K2.js";import"./VAvatar-BA4myzIO.js";import"./VDataTable-PwivpTYX.js";import"./VSelect-DgF_GPzl.js";import"./VTextField-DQEf5zjE.js";import"./filter-DdGIDvpm.js";import"./VNodeRenderer-DOgKReRu.js";import"./qrcode.vue.esm-DfT8RYq0.js";/* empty css              */const $e={class:"d-flex flex-wrap gap-4 ma-6"},Be={class:"d-flex gap-4 flex-wrap align-center"},De={key:1},ct={__name:"list",async setup(Te){let V,x;const M=[{title:"code",key:"code",sortable:!1},{title:"Statut",key:"statut",sortable:!1},{title:"destination",key:"destination",sortable:!1},{title:"Nombre de colis",key:"nombre_colis",sortable:!1},{title:"Vendeur",key:"vendeur",sortable:!1},{title:"actions",key:"actions",sortable:!1}],_=l(),y=l(),k=l(!1),m=l(!1),w=l(),C=l(!1),Y=l(),u=l(5),p=l(1),$=l(),B=l(),G=n=>{m.value=!0,w.value=n},H=async()=>{let n="/api/ramassage/"+w.value.id;k.value=!0,ve({method:"DELETE",url:n}).then(async e=>{e.status===200&&(m.value=!1,Ve.success(e.data),T()),k.value=!1}).catch(e=>{k.value=!1})},J=n=>{var e,g;$.value=(e=n.sortBy[0])==null?void 0:e.key,B.value=(g=n.sortBy[0])==null?void 0:g.order},{data:D,error:Ue,statusCode:Ee,isFetching:Q,execute:T}=([V,x]=de(()=>_e(me("/api/ramassage",{query:{code:_,statut:y,page:p,itemsPerPage:u,sortBy:$,orderBy:B}}))),V=await V,x(),V),U=fe(),W=R(()=>D.value.items),E=R(()=>D.value.total),c=l(!1),N=l(0),P=l(0),X=n=>{P.value=n.id,N.value++,c.value=!0};return(n,e)=>{const g=pe,Z=ue,S=ce("IconBtn"),ee=ie,te=ne,ae=le;return r(),j("div",null,[s(K,{title:"Filtres",class:"mb-6 d-print-none"},{default:o(()=>[s(q,null,{default:o(()=>[s(ye,null,{default:o(()=>[s(h,{cols:"12",sm:"2"},{default:o(()=>[s(g,{modelValue:a(y),"onUpdate:modelValue":e[0]||(e[0]=t=>i(y)?y.value=t:null),placeholder:"Statut"},null,8,["modelValue"])]),_:1}),s(h,{cols:"12",sm:"2"},{default:o(()=>[s(g,{modelValue:a(_),"onUpdate:modelValue":e[1]||(e[1]=t=>i(_)?_.value=t:null),placeholder:"Code"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),s(z),F("div",$e,[s(ke),F("div",Be,[s(Z,{modelValue:a(u),"onUpdate:modelValue":e[2]||(e[2]=t=>i(u)?u.value=t:null),items:[5,10,20,25,50]},null,8,["modelValue"]),a(b)("create","ramassage")?(r(),d(I,{key:0,color:"primary","prepend-icon":"tabler-plus",onClick:e[3]||(e[3]=t=>a(U).push({name:"ramassage-add"}))},{default:o(()=>e[12]||(e[12]=[v(" Ajouter Ramassage ")])),_:1})):f("",!0)])]),s(z,{class:"mt-4"}),s(re,{"items-per-page":a(u),"onUpdate:itemsPerPage":e[5]||(e[5]=t=>i(u)?u.value=t:null),page:a(p),"onUpdate:page":e[6]||(e[6]=t=>i(p)?p.value=t:null),loading:a(Q),headers:M,items:a(W),"items-length":a(E),class:"text-no-wrap",locale:"fr","onUpdate:options":J},{"item.code":o(({item:t})=>[a(b)("show","ramassage")?(r(),d(I,{key:0,variant:"text",onClick:A=>X(t)},{default:o(()=>[v(L(t.code),1)]),_:2},1032,["onClick"])):(r(),j("span",De,L(t.code),1))]),"item.statut":o(({item:t})=>[s(we,ge(("statutInfos"in n?n.statutInfos:a(se))(t.statut),{density:"default",label:"",size:"small"}),null,16)]),"item.actions":o(({item:t})=>[t.statut=="EN_ATTENTE"&&a(b)("update","ramassage")?(r(),d(S,{key:0,onClick:A=>a(U).push("/ramassage/"+t.id)},{default:o(()=>[s(O,{icon:"tabler-edit"})]),_:2},1032,["onClick"])):f("",!0),t.statut=="EN_ATTENTE"?(r(),d(S,{key:1},{default:o(()=>[s(O,{icon:"tabler-dots-vertical"}),s(Ce,{activator:"parent"},{default:o(()=>[s(be,null,{default:o(()=>[a(b)("delete","ramassage")?(r(),d(Ie,{key:0,value:"delete","prepend-icon":"tabler-trash",onClick:A=>G(t)},{default:o(()=>e[13]||(e[13]=[v(" Delete ")])),_:2},1032,["onClick"])):f("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)):f("",!0)]),bottom:o(()=>[s(ee,{page:a(p),"onUpdate:page":e[4]||(e[4]=t=>i(p)?p.value=t:null),"items-per-page":a(u),"total-items":a(E)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items","items-length"]),s(xe,{modelValue:a(m),"onUpdate:modelValue":e[9]||(e[9]=t=>i(m)?m.value=t:null),persistent:"",class:"v-dialog-sm"},{default:o(()=>[s(te,{onClick:e[7]||(e[7]=t=>m.value=!a(m))}),s(K,{title:"Êtes-vous sûr de vouloir supprimer le ramassage "+a(w).code+" ?"},{default:o(()=>[s(q,{class:"d-flex justify-end gap-3 flex-wrap"},{default:o(()=>[s(I,{color:"secondary",variant:"tonal",onClick:e[8]||(e[8]=t=>m.value=!1)},{default:o(()=>e[14]||(e[14]=[v(" Non ")])),_:1}),s(I,{loading:a(k),onClick:H},{default:o(()=>e[15]||(e[15]=[v(" Oui ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),a(C)?(r(),d(oe,{key:0,"is-print-ramassage":a(C),"onUpdate:isPrintRamassage":e[10]||(e[10]=t=>i(C)?C.value=t:null),item:a(Y)},null,8,["is-print-ramassage","item"])):f("",!0),a(c)?(r(),d(ae,{id:a(P),key:a(N),"is-show-item":a(c),"onUpdate:isShowItem":e[11]||(e[11]=t=>i(c)?c.value=t:null),onFetchItems:a(T)},null,8,["id","is-show-item","onFetchItems"])):f("",!0)])}}};export{ct as default};
