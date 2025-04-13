import{s as G}from"./statutInfos-Dl5tZIw7.js";import{r as te,V as Oe,$ as J}from"./VForm-BLjPjbmE.js";import{r as d,w as ae,Y as z,c as $,o as p,b as t,F as le,h as ne,f as y,e as l,v as I,x as O,n as e,ak as V,d as o,m as E,ai as F,A as H,aq as re,as as Se,J as Re,$ as ue,s as pe,K as Ce,j as ze,a as He}from"./index-DC-Wnp_v.js";import{_ as Ke,V as Ye,a as Je,b as Qe,c as he,d as Xe,s as Ze}from"./VTabs-AE8l-tmf.js";import{_ as ve}from"./AppTextField-KYzKeVMD.js";import{_ as Ue}from"./AppSelect-Be6KQpw4.js";import{_ as De}from"./AppTextarea-DkraWkeD.js";import{_ as $e,h as et,a as oe,b as me,e as xe,c as tt}from"./constants-DaN6VDFH.js";import{t as M}from"./toast-rl0bCb86.js";import{V as Te}from"./VAlert-BRuEmrqc.js";import{V as P,a as _}from"./VRow-C-Blmbrh.js";import{V as ee,a as Ie}from"./VList-BfJ7xNXe.js";import{_ as Pe}from"./DialogCloseBtn-TZVX7tmj.js";import{V as ce}from"./VCard-ba4N2OJb.js";import{V as ie}from"./VCardText-rLzALaeu.js";import{V as Ae,a as lt}from"./VDataTable-BZm3qX_v.js";import{V as Ne}from"./VChip-BlN3E-V7.js";import{V as fe}from"./VDivider-Caf8hJry.js";import{V as qe}from"./VDialog-DW_OFpV4.js";import{V as at,_ as st,c as ot}from"./VDataTableServer-D25ggilW.js";import{_ as rt}from"./AppAutocomplete-CNqtNHJX.js";import{u as nt}from"./index-BkqFNaQh.js";import{V as ut}from"./VSpacer-BKOtsdPM.js";import{V as it}from"./VMenu-PvYiXdlR.js";import"./VInput-O8_TmnmY.js";import"./VImg-CsBZAcfn.js";import"./forwardRefs-DWGaNmQL.js";import"./VOverlay-B10g4fEc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTextField-CFUFOG3c.js";import"./VSelect-DcS93PjE.js";import"./VAvatar-Cyrz8IHk.js";/* empty css              */import"./filter-EgIwNTEF.js";const dt={__name:"Preparer",props:{item:{type:Object,required:!0},isShowEntrepot:{type:Boolean,required:!0}},emits:["hideEntrepot","getItemData"],setup(Q,{emit:w}){const S=Q,L=w,D=d({}),R=d("");ae(()=>S.item,c=>{D.value=c},{immediate:!0});const U=d(),b=d(!1),s=d([]),C=d([]),h=d([]),k=d(!1),x=d(!1),N=async()=>{const{valid:c}=await U.value.validate();c&&await j()},W=()=>{L("hideEntrepot")},j=c=>{b.value=!0,k.value=!1,k.value=!1,J({method:"POST",url:"/api/scannerPreparer",data:{retour_id:D.value.id,scannedColis:q.value,commonColis:a.value,duplicatedColis:n.value,externeColis:m.value,missingColis:g.value}}).then(async i=>{if(i.status===200){let f=i.data;console.log(f),s.value=f.success,C.value=f.errors,h.value=f.colisError,k.value=!0,x.value=C.value.length==0,C.value.length==0&&L("getItemData")}b.value=!1}).catch(i=>{b.value=!1,i.response&&i.response.status===422?M.error(i.response.data.message):M.error("something wrong")})},T=z(()=>D.value.colis.map(c=>c.code)),q=z(()=>R.value?R.value.split(`
`).map(c=>c.trim()).filter(c=>c.length>0):[]),n=z(()=>q.value.filter((c,i,f)=>f.indexOf(c)!==i)),m=z(()=>{const c=new Set(T.value);let i=q.value.filter(f=>!c.has(f));return i=new Set(i),[...i]}),g=z(()=>{const c=new Set(q.value);return T.value.filter(i=>!c.has(i))}),a=z(()=>{const c=new Set(T.value),i=new Set(q.value);return[...c].filter(f=>i.has(f))});return(c,i)=>{const f=De;return p(),$(le,null,[(p(!0),$(le,null,ne(e(s),(B,K)=>(p(),y(Te,{key:K,modelValue:e(x),"onUpdate:modelValue":i[0]||(i[0]=X=>V(x)?x.value=X:null),color:"success",class:"ma-1"},{default:l(()=>[I(O(B),1)]),_:2},1032,["modelValue"]))),128)),(p(!0),$(le,null,ne(e(C),(B,K)=>(p(),y(Te,{key:K,modelValue:e(k),"onUpdate:modelValue":i[1]||(i[1]=X=>V(k)?k.value=X:null),color:"error",class:"ma-1"},{default:l(()=>[I(O(B),1)]),_:2},1032,["modelValue"]))),128)),t(Oe,{ref_key:"refForm",ref:U,class:"mt-3"},{default:l(()=>[o("div",null,[t(P,{class:"d-flex align-center justify-center"},{default:l(()=>[t(_,{cols:"12"},{default:l(()=>[t(f,{modelValue:e(R),"onUpdate:modelValue":i[2]||(i[2]=B=>V(R)?R.value=B:null),rows:"5","row-height":"20",label:"Scanner",rules:["requiredValidator"in c?c.requiredValidator:e(te)],placeholder:"Select pour scanner"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),t(P,null,{default:l(()=>[e(h).length>0?(p(),y(_,{key:0,cols:"12",md:"3"},{default:l(()=>[i[3]||(i[3]=o("p",{class:"text-error"}," Colis erroné ",-1)),t(ee,{items:e(h),class:"border border-error border-opacity-75"},null,8,["items"])]),_:1})):E("",!0),e(n).length>0?(p(),y(_,{key:1,cols:"12",md:"3"},{default:l(()=>[i[4]||(i[4]=o("p",{class:"text-error"}," Colis dupliqués ",-1)),t(ee,{items:e(n),class:"border border-error border-opacity-75"},null,8,["items"])]),_:1})):E("",!0),t(_,{cols:"12",md:"3"},{default:l(()=>[i[5]||(i[5]=I(" Colis manquant ")),t(ee,{items:e(g)},null,8,["items"])]),_:1}),e(m).length>0?(p(),y(_,{key:2,cols:"12",md:"3"},{default:l(()=>[i[6]||(i[6]=o("p",{class:"text-error"}," Colis externe ",-1)),t(ee,{items:e(m),class:"border border-error border-opacity-75"},null,8,["items"])]),_:1})):E("",!0)]),_:1}),t(P,null,{default:l(()=>[t(_,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:l(()=>[t(F,{color:"secondary",onClick:W},{default:l(()=>i[7]||(i[7]=[I(" retour ")])),_:1}),t(F,{loading:e(b),onClick:N},{default:l(()=>i[8]||(i[8]=[I(" Envoyer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)],64)}}},mt={key:0},pt={key:1},ct={class:"text-center"},ft={key:0},vt={key:1},_t={__name:"actionsRetour",props:{currentStatut:{type:String,required:!0},item:{type:Object,required:!0},id:{type:Number,required:!0}},emits:["getItemData"],setup(Q,{emit:w}){const S=Q,L=w,D=d({}),R=d(""),U=d(!1),b=d(),s=d({id:null,statut:"",nombre_colis_ramasseur:"",commentaire:"",date:"",file:""}),C=()=>{U.value=!1,k.value=!1};ae(()=>S.currentStatut,n=>{R.value=n},{immediate:!0}),ae(()=>S.item,n=>{D.value=n},{immediate:!0});const h=d(""),k=d(!1),x=n=>{U.value=!0,s.value.statut=n,n=="PREPARER"&&(k.value=!0)},N=async()=>{const{valid:n}=await b.value.validate();n&&await W(s.value.statut)},W=async n=>{s.value.statut=n,s.value.id=S.id,h.value=n,J({method:"POST",url:"/api/updateStatutRetour",data:s.value}).then(async m=>{m.status===200&&(M.success(m.data),n!="COMMENTAIRE"&&(R.value=n),U.value=!1,L("getItemData")),h.value=""}).catch(m=>{h.value="",m.response&&m.response.status===422?M.error(m.response.data.message):M.error("something wrong")})},j=H("livreur","action"),T=H("gestionnaire","action"),q=z(()=>{let n=[];return n.push({text:"Commentaire",color:"secondary",statut:"COMMENTAIRE"}),T&&n.push({...G("ANNULE"),statut:"ANNULE"}),R.value=="EN_ATTENTE"?T&&n.push({...G("PREPARER"),statut:"PREPARER"}):(R.value=="PREPARER"||R.value=="REPORTE")&&(j||T)?n.push({statut:"EN_COURS_RETOUR",...G("EN_COURS_RETOUR")}):R.value=="EN_COURS_RETOUR"&&j&&(n.push({statut:"REPORTE",...G("REPORTE")}),n.push({...G("RETOURNER"),statut:"RETOURNER"})),n});return(n,m)=>{const g=dt,a=ve,c=$e,i=De;return e(U)?(p(),$("div",pt,[e(s).statut=="PREPARER"&&e(k)?(p(),y(g,{key:0,"is-show-entrepot":e(k),"onUpdate:isShowEntrepot":m[0]||(m[0]=f=>V(k)?k.value=f:null),"hide-entrepot":"",item:e(D),onHideEntrepot:C,onGetItemData:m[1]||(m[1]=f=>L("getItemData"))},null,8,["is-show-entrepot","item"])):(p(),y(Oe,{key:1,ref_key:"refForm",ref:b,class:"mt-3"},{default:l(()=>[o("p",ct," Statut à envoyer : "+O(("statutInfos"in n?n.statutInfos:e(G))(e(s).statut).text),1),e(s).statut=="RETOURNER"?(p(),$("div",ft,[t(P,{class:"d-flex align-center justify-center"},{default:l(()=>[t(_,{md:"6",cols:"12"},{default:l(()=>[t(a,{modelValue:e(s).nombre_colis_ramasseur,"onUpdate:modelValue":m[2]||(m[2]=f=>e(s).nombre_colis_ramasseur=f),rules:["requiredValidator"in n?n.requiredValidator:e(te)],placeholder:"Nombre de colis",label:"Nombre de colis",type:"number"},null,8,["modelValue","rules"])]),_:1})]),_:1})])):E("",!0),e(s).statut=="REPORTE"?(p(),$("div",vt,[t(P,{class:"d-flex align-center justify-center"},{default:l(()=>[t(_,{md:"6",cols:"12"},{default:l(()=>[t(c,{modelValue:e(s).date,"onUpdate:modelValue":m[3]||(m[3]=f=>e(s).date=f),rules:["requiredValidator"in n?n.requiredValidator:e(te)],label:"Date & TIme",placeholder:"Select date and time",config:{enableTime:!1,dateFormat:"Y-m-d"}},null,8,["modelValue","rules"])]),_:1})]),_:1})])):E("",!0),o("div",null,[t(P,{class:"d-flex align-center justify-center"},{default:l(()=>[t(_,{md:"6",cols:"12"},{default:l(()=>[t(i,{modelValue:e(s).commentaire,"onUpdate:modelValue":m[4]||(m[4]=f=>e(s).commentaire=f),rows:"2","row-height":"20",label:"Commentaire",rules:["COMMENTAIRE","REPORTE","ANNULE"].includes(e(s).statut)?["requiredValidator"in n?n.requiredValidator:e(te)]:[],placeholder:"Commentaire"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),t(P,null,{default:l(()=>[t(_,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:l(()=>[t(F,{color:"secondary",onClick:m[5]||(m[5]=f=>U.value=!1)},{default:l(()=>m[6]||(m[6]=[I(" retour ")])),_:1}),t(F,{loading:e(h)==e(s).statut,onClick:N},{default:l(()=>m[7]||(m[7]=[I(" Envoyer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512))])):(p(),y(P,{key:0,class:"text-center v-row m-0"},{default:l(()=>[(p(!0),$(le,null,ne(e(q),(f,B)=>(p(),y(_,{key:B,cols:"6"},{default:l(()=>[t(F,{color:f.color,loading:e(h)==f.statut,style:{width:"inherit"},onClick:K=>x(f.statut)},{default:l(()=>[I(O(f.text),1)]),_:2},1032,["color","loading","onClick"])]),_:2},1024))),128)),e(q).length==0?(p(),$("div",mt," Aucune action requise ")):E("",!0)]),_:1}))}}},gt={key:0,class:"text-end position-absolute right-0"},yt={class:"text-body-1 mb-2"},bt={class:"text-body-1 mb-2"},Vt={class:"text-body-1 mb-2"},wt={key:0},kt={class:"text-body-1 mb-2"},Et={class:"text-body-1 mb-2"},St={class:"text-body-1 mb-2"},Rt={class:"text-body-1 mb-2"},Ct={class:"text-body-1 mb-2"},ht={class:"text-body-1 mb-2"},xt={__name:"ShowRetour",props:{id:{type:Object,required:!1},isShowItem:{type:Boolean,required:!0}},emits:["update:isShowItem","fetchItems"],async setup(Q,{emit:w}){let S,L;const D=Q,R=w;let U={id:"",nom_vendeur:"",tel_vendeur:"",frais_ramasseur:"",tel_ramasseur:"",tarif_id:"",adresse:"",ramasseur:"",ramasseur_id:"",statut:"",vendeur:"",nombre_colis:"",colis:[],histories:[]};const b=([S,L]=re(()=>J("/api/ramasseurs").then(g=>g.data)),S=await S,L(),S),s=d(structuredClone(Se(U))),C=d(!1),h=async g=>{C.value=!0,await J("/api/retour/"+g).then(async a=>{a.status===200&&(s.value=a.data),C.value=!1}).catch(a=>{C.value=!1,a.response&&a.response.status===422?M.error(a.response.data.message):M.error("something wrong")})};ae(()=>D.id,g=>{h(g)},{immediate:!0});const k=()=>{R("update:isShowItem",!1),R("fetchItems"),s.value=structuredClone(Se(U))},x=d(!1),N=H("gestionnaire","action"),W=H("livreur","action"),j=g=>{x.value=!0,J({method:"POST",url:"/api/parametrerRetour",data:{id:s.value.id,ramasseur_id:s.value.ramasseur_id,frais_ramasseur:s.value.frais_ramasseur}}).then(async a=>{x.value=!1,a.status===200&&M.success(a.data),h(s.value.id),n.value=!1}).catch(a=>{x.value=!1,a.response&&a.response.status===422?M.error(a.response.data.message):M.error("something wrong")})},T=d("Actions"),q=["tabler-adjustments-share","tabler-logs"],n=d(!1),m=[{title:"code",key:"code"},{title:"destination",key:"destination"}];return(g,a)=>{const c=Pe,i=_t,f=Xe,B=Ue,K=ve,X=Ke;return p(),y(qe,{width:g.$vuetify.display.smAndDown?"auto":900,"model-value":D.isShowItem,scrollable:"","onUpdate:modelValue":k},{default:l(()=>[t(c,{onClick:k}),t(X,{title:"Details Retour",loading:e(C),style:{overflow:"scroll","max-height":"90vh"},"no-actions":""},{default:l(()=>[t(ce,null,{default:l(()=>[Re(t(ie,null,{default:l(()=>[e(N)?(p(),$("div",gt,[t(F,{icon:"",class:"rounded-0",onClick:a[0]||(a[0]=A=>n.value=!0)},{default:l(()=>[t(ue,{size:"22",icon:"tabler-settings"})]),_:1})])):E("",!0),t(P,null,{default:l(()=>[t(_,{cols:"12",lg:"6"},{default:l(()=>[t(Ae,{class:"billing-address-table"},{default:l(()=>[o("tr",null,[a[7]||(a[7]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Code : ")],-1)),o("td",null,[o("p",yt,O(e(s).code),1)])]),o("tr",null,[a[8]||(a[8]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Ramasseur : ")],-1)),o("td",null,[o("p",bt,O(e(s).ramasseur),1)])]),o("tr",null,[a[9]||(a[9]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Tel Ramasseur: ")],-1)),o("td",null,[o("p",Vt,O(e(s).tel_ramasseur),1)])]),e(W)?(p(),$("tr",wt,[a[10]||(a[10]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Frais de retour: ")],-1)),o("td",null,[o("p",kt,O(e(s).frais_ramasseur),1)])])):E("",!0),o("tr",null,[a[11]||(a[11]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Destination : ")],-1)),o("td",null,[o("p",Et,O(e(s).destination),1)])]),o("tr",null,[a[12]||(a[12]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Statut: ")],-1)),o("td",null,[o("p",St,[t(Ne,pe(("statutInfos"in g?g.statutInfos:e(G))(e(s).statut),{density:"default",label:"",size:"small"}),null,16)])])])]),_:1})]),_:1}),t(_,{cols:"12",lg:"6"},{default:l(()=>[t(Ae,{class:"billing-address-table"},{default:l(()=>[o("tr",null,[a[13]||(a[13]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Vendeur: ")],-1)),o("td",null,[o("p",Rt,O(e(s).vendeur),1)])]),o("tr",null,[a[14]||(a[14]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Tel Vendeur: ")],-1)),o("td",null,[o("p",Ct,O(e(s).tel_vendeur),1)])]),o("tr",null,[a[15]||(a[15]=o("td",null,[o("h6",{class:"text-h6 text-no-wrap mb-2"}," Colis: ")],-1)),o("td",null,[o("p",ht,O(e(s).nombre_colis),1)])])]),_:1})]),_:1})]),_:1}),t(Ye,{modelValue:e(T),"onUpdate:modelValue":a[1]||(a[1]=A=>V(T)?T.value=A:null),grow:"",class:"disable-tab-transition",stacked:""},{default:l(()=>[(p(),$(le,null,ne(q,(A,_e)=>t(Je,{key:_e},{default:l(()=>[t(ue,{size:"40",icon:A},null,8,["icon"])]),_:2},1024)),64))]),_:1},8,["modelValue"]),t(Qe,{modelValue:e(T),"onUpdate:modelValue":a[3]||(a[3]=A=>V(T)?T.value=A:null),class:"mt-3"},{default:l(()=>[t(he,null,{default:l(()=>[t(i,{id:e(s).id,"current-statut":e(s).statut,item:e(s),onGetItemData:a[2]||(a[2]=A=>h(e(s).id))},null,8,["id","current-statut","item"])]),_:1}),t(he,null,{default:l(()=>[t(f,{histories:e(s).histories},null,8,["histories"])]),_:1})]),_:1},8,["modelValue"]),t(fe,{color:"white",thickness:"1",opacity:"0.2",class:"my-6"}),t(lt,{headers:m,items:e(s).colis,"items-per-page":5},null,8,["items"])]),_:1},512),[[Ce,!e(n)]]),e(N)?Re((p(),y(ie,{key:0},{default:l(()=>[t(P,null,{default:l(()=>[t(_,{md:"6",cols:"12"},{default:l(()=>[t(B,{modelValue:e(s).ramasseur_id,"onUpdate:modelValue":a[4]||(a[4]=A=>e(s).ramasseur_id=A),placeholder:"Ramasseurs",label:"Ramasseurs",items:e(b),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),t(_,{cols:"12",md:"6"},{default:l(()=>[t(K,{modelValue:e(s).frais_ramasseur,"onUpdate:modelValue":a[5]||(a[5]=A=>e(s).frais_ramasseur=A),rules:["requiredValidator"in g?g.requiredValidator:e(te)],label:"Frais de retour",type:"number",placeholder:"Frais de retour"},null,8,["modelValue","rules"])]),_:1})]),_:1}),t(P,null,{default:l(()=>[t(_,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:l(()=>[t(F,{color:"secondary",onClick:a[6]||(a[6]=A=>n.value=!1)},{default:l(()=>a[16]||(a[16]=[I(" retour ")])),_:1}),t(F,{loading:e(x),onClick:j},{default:l(()=>a[17]||(a[17]=[I(" Envoyer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)),[[Ce,e(n)]]):E("",!0)]),_:1})]),_:1},8,["loading"])]),_:1},8,["width","model-value"])}}},Tt={class:"d-flex flex-wrap gap-4 ma-6"},It={class:"d-flex gap-4 flex-wrap align-center"},At={key:1},cl={__name:"index",props:{statut:{type:String,required:!0}},async setup(Q){let w,S;const L=Q,D=d(!1),R=d([{title:"Aujourd'hui",value:"today"},{title:"Hier",value:"yesterday"},{title:"La semaine dernière",value:"lastWeek"},{title:"Ce mois",value:"thisMonth"},{title:"Le mois précédent",value:"lastMonth"},{title:"Personnalisé",value:"custom"}]),U=H("gestionnaire","action"),b=d(),s=d(),C=d("today"),h=()=>{const v=new Date;switch(D.value=C.value==="custom",C.value){case"today":b.value=v.toISOString().split("T")[0],s.value=v.toISOString().split("T")[0];break;case"yesterday":const r=oe(v,-1);b.value=r.toISOString().split("T")[0],s.value=r.toISOString().split("T")[0];break;case"lastWeek":b.value=Ze(oe(v,-7)).toISOString().split("T")[0],s.value=tt(oe(v,-7)).toISOString().split("T")[0];break;case"thisMonth":b.value=me(v).toISOString().split("T")[0],s.value=xe(v).toISOString().split("T")[0];break;case"lastMonth":const Y=oe(me(v),-1);b.value=me(Y).toISOString().split("T")[0],s.value=xe(Y).toISOString().split("T")[0];break}};h();const k=[{title:"code",key:"code",sortable:!1},{title:"Statut",key:"statut",sortable:!1},{title:"destination",key:"destination",sortable:!1},{title:"Nombre de colis",key:"nombre_colis",sortable:!1},{title:"Vendeur",key:"vendeur",sortable:!1},{title:"actions",key:"actions",sortable:!1}],x=d(),N=d(),W=d(),j=d(),T=([w,S]=re(()=>J("/api/ramasseurs").then(v=>v.data)),w=await w,S(),w),q=([w,S]=re(()=>J("/api/vendeurs").then(v=>v.data)),w=await w,S(),w),n=d(!1),m=d(!1),g=d(),a=d(5),c=d(1),i=d(),f=d();ae(()=>L.statut,v=>{N.value=v},{immediate:!0});const B=v=>{m.value=!0,g.value=v},K=async()=>{let v="/api/retour/"+g.value.id;n.value=!0,J({method:"DELETE",url:v}).then(async r=>{r.status===200&&(m.value=!1,M.success(r.data),ge()),n.value=!1}).catch(r=>{n.value=!1})},X=v=>{var r,Y;i.value=(r=v.sortBy[0])==null?void 0:r.key,f.value=(Y=v.sortBy[0])==null?void 0:Y.order},{data:A,error:_e,statusCode:Ot,isFetching:Fe,execute:ge}=([w,S]=re(()=>nt(ot("/api/retour",{query:{livreur_id:W,vendeur_id:j,begin_date:b,end_date:s,code:x,statut:N,page:c,itemsPerPage:a,sortBy:i,orderBy:f}}))),w=await w,S(),w),ye=ze(),je=z(()=>A.value.items),be=z(()=>A.value.total),Z=d(!1),Ve=d(0),we=d(0),Be=v=>{we.value=v.id,Ve.value++,Z.value=!0};return(v,r)=>{const Y=rt,de=Ue,Me=ve,ke=$e,Ee=He("IconBtn"),Le=st,We=Pe,Ge=xt;return p(),$("div",null,[t(ce,{title:"Filtres",class:"mb-6 d-print-none"},{default:l(()=>[t(ie,null,{default:l(()=>[t(P,null,{default:l(()=>[e(U)?(p(),y(_,{key:0,cols:"12",sm:"3"},{default:l(()=>[t(Y,{modelValue:e(j),"onUpdate:modelValue":r[0]||(r[0]=u=>V(j)?j.value=u:null),placeholder:"Vendeurs",items:e(q),clearable:"","clear-icon":"tabler-x",autocomplete:"no-autocompeletse"},null,8,["modelValue","items"])]),_:1})):E("",!0),e(U)?(p(),y(_,{key:1,cols:"12",sm:"3"},{default:l(()=>[t(Y,{modelValue:e(W),"onUpdate:modelValue":r[1]||(r[1]=u=>V(W)?W.value=u:null),placeholder:"Livreurs",items:e(T),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1})):E("",!0),t(_,{cols:"12",sm:"3"},{default:l(()=>[t(de,{modelValue:e(N),"onUpdate:modelValue":r[2]||(r[2]=u=>V(N)?N.value=u:null),placeholder:"Statut",items:e(et),clearable:"","clear-icon":"tabler-x"},{item:l(({item:u,props:se})=>[t(Ie,pe(se,{title:("statutInfos"in v?v.statutInfos:e(G))(u.value).text}),null,16,["title"])]),selection:l(({item:u})=>[I(O(("statutInfos"in v?v.statutInfos:e(G))(u.value).text),1)]),_:1},8,["modelValue","items"])]),_:1}),t(_,{cols:"12",sm:"2"},{default:l(()=>[t(Me,{modelValue:e(x),"onUpdate:modelValue":r[3]||(r[3]=u=>V(x)?x.value=u:null),placeholder:"Code"},null,8,["modelValue"])]),_:1})]),_:1}),t(P,null,{default:l(()=>[t(_,{cols:"12",sm:"3"},{default:l(()=>[t(de,{modelValue:e(C),"onUpdate:modelValue":[r[4]||(r[4]=u=>V(C)?C.value=u:null),h],placeholder:"Plage de dates",items:e(R),label:e(b)+" - "+e(s)},null,8,["modelValue","items","label"])]),_:1}),e(D)?(p(),y(_,{key:0,cols:"12",sm:"3"},{default:l(()=>[t(ke,{modelValue:e(b),"onUpdate:modelValue":r[5]||(r[5]=u=>V(b)?b.value=u:null),label:"Début",placeholder:"date"},null,8,["modelValue"])]),_:1})):E("",!0),e(D)?(p(),y(_,{key:1,cols:"12",sm:"3"},{default:l(()=>[t(ke,{modelValue:e(s),"onUpdate:modelValue":r[6]||(r[6]=u=>V(s)?s.value=u:null),label:"Fin",placeholder:"date"},null,8,["modelValue"])]),_:1})):E("",!0)]),_:1})]),_:1}),t(fe),o("div",Tt,[t(ut),o("div",It,[t(de,{modelValue:e(a),"onUpdate:modelValue":r[7]||(r[7]=u=>V(a)?a.value=u:null),items:[5,10,20,25,50]},null,8,["modelValue"]),e(H)("create","retour")?(p(),y(F,{key:0,color:"primary","prepend-icon":"tabler-plus",onClick:r[8]||(r[8]=u=>e(ye).push({name:"retour-add"}))},{default:l(()=>r[16]||(r[16]=[I(" Ajouter Retour ")])),_:1})):E("",!0)])]),t(fe,{class:"mt-4"}),t(at,{"items-per-page":e(a),"onUpdate:itemsPerPage":r[10]||(r[10]=u=>V(a)?a.value=u:null),page:e(c),"onUpdate:page":r[11]||(r[11]=u=>V(c)?c.value=u:null),loading:e(Fe),headers:k,items:e(je),"items-length":e(be),class:"text-no-wrap",locale:"fr","onUpdate:options":X},{"item.code":l(({item:u})=>[e(H)("show","retour")?(p(),y(F,{key:0,variant:"text",onClick:se=>Be(u)},{default:l(()=>[I(O(u.code),1)]),_:2},1032,["onClick"])):(p(),$("span",At,O(u.code),1))]),"item.statut":l(({item:u})=>[t(Ne,pe(("statutInfos"in v?v.statutInfos:e(G))(u.statut),{density:"default",label:"",size:"small"}),null,16)]),"item.actions":l(({item:u})=>[u.statut=="EN_ATTENTE"&&e(H)("update","retour")?(p(),y(Ee,{key:0,onClick:se=>e(ye).push("/retour/"+u.id)},{default:l(()=>[t(ue,{icon:"tabler-edit"})]),_:2},1032,["onClick"])):E("",!0),u.statut=="EN_ATTENTE"?(p(),y(Ee,{key:1},{default:l(()=>[t(ue,{icon:"tabler-dots-vertical"}),t(it,{activator:"parent"},{default:l(()=>[t(ee,null,{default:l(()=>[e(H)("delete","retour")?(p(),y(Ie,{key:0,value:"delete","prepend-icon":"tabler-trash",onClick:se=>B(u)},{default:l(()=>r[17]||(r[17]=[I(" Delete ")])),_:2},1032,["onClick"])):E("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)):E("",!0)]),bottom:l(()=>[t(Le,{page:e(c),"onUpdate:page":r[9]||(r[9]=u=>V(c)?c.value=u:null),"items-per-page":e(a),"total-items":e(be)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items","items-length"]),t(qe,{modelValue:e(m),"onUpdate:modelValue":r[14]||(r[14]=u=>V(m)?m.value=u:null),persistent:"",class:"v-dialog-sm"},{default:l(()=>[t(We,{onClick:r[12]||(r[12]=u=>m.value=!e(m))}),t(ce,{title:"Êtes-vous sûr de vouloir supprimer le retour "+e(g).code+" ?"},{default:l(()=>[t(ie,{class:"d-flex justify-end gap-3 flex-wrap"},{default:l(()=>[t(F,{color:"secondary",variant:"tonal",onClick:r[13]||(r[13]=u=>m.value=!1)},{default:l(()=>r[18]||(r[18]=[I(" Non ")])),_:1}),t(F,{loading:e(n),onClick:K},{default:l(()=>r[19]||(r[19]=[I(" Oui ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),e(Z)?(p(),y(Ge,{id:e(we),key:e(Ve),"is-show-item":e(Z),"onUpdate:isShowItem":r[15]||(r[15]=u=>V(Z)?Z.value=u:null),onFetchItems:e(ge)},null,8,["id","is-show-item","onFetchItems"])):E("",!0)])}}};export{cl as default};
