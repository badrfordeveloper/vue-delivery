import{s as $}from"./statutInfos-BBtLoj05.js";import{_ as Vt}from"./DialogCloseBtn-hjQAM4Ms.js";import{V as At,_ as Rt,c as St}from"./VDataTableServer-uCDTjm2y.js";import{_ as yt}from"./AppSelect-C0-sczRk.js";import{_ as xt}from"./AppTextField-Ko2bKItW.js";import{V as Ot}from"./VNodeRenderer-DOgKReRu.js";import{c as h,m as k,o as f,d as t,b as e,e as s,n as l,H as pt,x as u,r as m,w as lt,A as j,Y as st,F as wt,h as Ct,f as U,v as I,ai as S,aq as Et,as as ct,J as ft,$ as X,s as at,ak as x,K as _t,j as Pt,a as Ut}from"./index-D7yJXdJy.js";import{Q as Dt}from"./qrcode.vue.esm-DfT8RYq0.js";import{_ as It}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M}from"./VDivider-CS0fj1z-.js";import{V as N,a as g}from"./VRow-CUggEZk2.js";import{V as H}from"./VCard-BzgJ_axc.js";import{r as J,V as Lt,$ as W}from"./VForm-DnlssNIV.js";import{_ as Ft,V as qt,a as jt,b as Bt,c as vt,d as Mt}from"./VTabs-Ecx7Hz-1.js";import{_ as zt}from"./AppTextarea-BYSUsSWJ.js";import{_ as Ht}from"./AppDateTimePicker-BzHRiTQB.js";import{t as D}from"./toast-BvykrbAm.js";import{V as Gt}from"./VFileInput-tseUwLXV.js";import{V as z}from"./VCardText-DG6BKODZ.js";import{V as bt}from"./VDataTable-PwivpTYX.js";import{V as ot}from"./VChip-ft8FN7z7.js";import{V as ht}from"./VDialog-QHPGG0zZ.js";import{u as Kt}from"./index-BSDdKVsK.js";import{V as Qt}from"./VSpacer-Bdz4Ngn8.js";import{V as Wt}from"./VMenu-CpeeX_P2.js";import{V as Yt,a as gt}from"./VList-DiSHM2Z9.js";import"./VInput-9emClv3n.js";import"./VImg-CAZDB8sp.js";import"./forwardRefs-DWGaNmQL.js";import"./VSelect-DgF_GPzl.js";import"./VTextField-DQEf5zjE.js";import"./VOverlay-COMBmcfa.js";import"./VAvatar-BA4myzIO.js";/* empty css              */import"./filter-DdGIDvpm.js";const Jt={key:0},Xt={id:"print-area"},Zt={class:"print-content"},te={class:"props.item-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded"},ee={class:"d-flex align-center app-logo"},le={class:"app-logo-title"},se={class:"d-flex align-center destination"},ae={class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-6"},oe={class:"mb-0"},ne={class:"mb-0"},ie={class:"mb-0"},re={class:"mb-0"},ue={class:"mb-0"},de={class:"mb-0"},me={class:"mb-0"},pe={class:"mb-0"},ce={__name:"printColis",props:{item:{type:Object,required:!0},isPrintColis:{type:Boolean,required:!0}},emits:["update:isPrintColis"],setup(B,{emit:T}){const p=B,L=T;return setTimeout(()=>{window.print()},500),window.onafterprint=function(){L("update:isPrintColis",!1)},(A,b)=>p.isPrintColis?(f(),h("div",Jt,[t("div",Xt,[t("div",Zt,[e(H,{class:"props.item-preview-wrapper"},{default:s(()=>[b[0]||(b[0]=t("div",null,null,-1)),t("div",te,[t("div",null,[t("div",ee,[e(l(Ot),{nodes:l(pt).app.logo},null,8,["nodes"]),t("h6",le,u(l(pt).app.title),1)])]),t("div",se,u(p.item.destination),1)]),e(M,{class:"border-solid"}),e(N,{class:"print-row little-margin"},{default:s(()=>[e(g,{class:"text"},{default:s(()=>[t("div",ae,[t("div",null,[t("p",oe," Code : "+u(p.item.code),1),t("p",ne," Nom : "+u(p.item.nom_client),1),t("p",ie," tel : "+u(p.item.tel_client),1)]),t("div",null,[t("p",re,[e(Dt,{size:"70",value:p.item.code},null,8,["value"])])])]),t("p",ue," Adresse : "+u(p.item.adresse),1)]),_:1})]),_:1}),e(M,{class:"border-solid"}),e(N,{class:"align-right little-margin"},{default:s(()=>[e(g,{cols:"12"},{default:s(()=>[t("p",de," Produits : "+u(p.item.produit),1),t("p",me," Montant : "+u(p.item.montant),1)]),_:1})]),_:1}),e(M,{class:"border-solid"}),e(N,{class:"align-right little-margin"},{default:s(()=>[e(g,{cols:"12"},{default:s(()=>[t("p",pe," essayage : "+u(p.item.essayage?"OUI":"NON")+" | ouvrir : "+u(p.item.ouvrir?"OUI":"NON")+" | echange : "+u(p.item.echange?"OUI":"NON"),1)]),_:1})]),_:1}),e(M,{class:"border-solid"}),b[1]||(b[1]=t("p",{class:"mb-0"},[t("span",null," Remarque: "),t("span",null,"Entrepirse de livraison n'est pas responsable sur vos achat")],-1))]),_:1})])])])):k("",!0)}},fe=It(ce,[["__scopeId","data-v-7f29d1d2"]]),_e={key:0,class:"text-center"},ve={key:0},be={key:1},ge={class:"text-center"},Ve={key:0},ye={key:1},xe={__name:"actionsColis",props:{currentStatut:{type:String,required:!0},item:{type:Object,required:!0},id:{type:Number,required:!0}},emits:["getItemData"],setup(B,{emit:T}){const p=B,L=T,A=m({}),b=m(""),w=m(!1),O=m(),o=m({id:null,statut:"",commentaire:"",date:"",file:""});lt(()=>p.currentStatut,i=>{b.value=i},{immediate:!0}),lt(()=>p.item,i=>{A.value=i},{immediate:!0});const _=m(""),P=i=>{w.value=!0,o.value.statut=i},R=async()=>{const{valid:i}=await O.value.validate();i&&await F(o.value.statut)},F=async i=>{o.value.statut=i,o.value.id=p.id,_.value=i;const d=new FormData;d.append("file",o.value.file),d.append("id",o.value.id),d.append("statut",o.value.statut),d.append("commentaire",o.value.commentaire),d.append("date",o.value.date),W({method:"POST",url:"/api/updateStatutColis",data:d,headers:{"Content-Type":"multipart/form-data"}}).then(async E=>{E.status===200&&(D.success(E.data),i!="COMMENTAIRE"&&(b.value=i),w.value=!1,L("getItemData")),_.value=""}).catch(E=>{_.value="",E.response&&E.response.status===422?D.error(E.response.data.message):D.error("something wrong")})},v=j("livreur","action");j("gestionnaire","action");const C=st(()=>{let i=[];return i.push({text:"Commentaire",color:"secondary",statut:"COMMENTAIRE"}),["ENTREPOT","REPORTE","PAS_REPONSE"].includes(b.value)&&v&&i.push({...$("EN_COURS_LIVRAISON"),statut:"EN_COURS_LIVRAISON"}),["EN_COURS_LIVRAISON"].includes(b.value)&&v&&(i.push({...$("LIVRE"),statut:"LIVRE"}),i.push({...$("LIVRE_PARTIELLEMENT"),statut:"LIVRE_PARTIELLEMENT"}),i.push({...$("PAS_REPONSE"),statut:"PAS_REPONSE"}),i.push({...$("REPORTE"),statut:"REPORTE"}),i.push({...$("ANNULE"),statut:"ANNULE"}),i.push({...$("REFUSE"),statut:"REFUSE"})),i});return(i,d)=>{const E=Ht,c=zt;return l(w)?(f(),h("div",be,[e(Lt,{ref_key:"refForm",ref:O,class:"mt-3"},{default:s(()=>[t("p",ge," Statut à envoyer : "+u(("statutInfos"in i?i.statutInfos:l($))(l(o).statut).text),1),["LIVRE_PARTIELLEMENT","PAS_REPONSE","REPORTE","REFUSE","ANNULE"].includes(l(o).statut)?(f(),h("div",Ve,[e(N,{class:"d-flex align-center justify-center"},{default:s(()=>[e(g,{md:"6",cols:"12"},{default:s(()=>[e(Gt,{modelValue:l(o).file,"onUpdate:modelValue":d[0]||(d[0]=a=>l(o).file=a),rules:["requiredValidator"in i?i.requiredValidator:l(J)],accept:"image/*",label:"File input"},null,8,["modelValue","rules"])]),_:1})]),_:1})])):k("",!0),l(o).statut=="REPORTE"?(f(),h("div",ye,[e(N,{class:"d-flex align-center justify-center"},{default:s(()=>[e(g,{md:"6",cols:"12"},{default:s(()=>[e(E,{modelValue:l(o).date,"onUpdate:modelValue":d[1]||(d[1]=a=>l(o).date=a),rules:["requiredValidator"in i?i.requiredValidator:l(J)],label:"Date & TIme",placeholder:"Select date and time",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue","rules"])]),_:1})]),_:1})])):k("",!0),t("div",null,[e(N,{class:"d-flex align-center justify-center"},{default:s(()=>[e(g,{md:"6",cols:"12"},{default:s(()=>[e(c,{modelValue:l(o).commentaire,"onUpdate:modelValue":d[2]||(d[2]=a=>l(o).commentaire=a),rows:"2","row-height":"20",label:"Commentaire",rules:["COMMENTAIRE"].includes(l(o).statut)?["requiredValidator"in i?i.requiredValidator:l(J)]:[],placeholder:"Commentaire"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),e(N,null,{default:s(()=>[e(g,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:s(()=>[e(S,{color:"secondary",onClick:d[3]||(d[3]=a=>w.value=!1)},{default:s(()=>d[4]||(d[4]=[I(" retour ")])),_:1}),e(S,{loading:l(_)==l(o).statut,onClick:R},{default:s(()=>d[5]||(d[5]=[I(" Envoyer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)])):(f(),h("div",_e,[(f(!0),h(wt,null,Ct(l(C),(a,G)=>(f(),U(S,{key:G,color:a.color,class:"ma-1",loading:l(_)==a.statut,onClick:K=>P(a.statut)},{default:s(()=>[I(u(a.text),1)]),_:2},1032,["color","loading","onClick"]))),128)),l(C).length==0?(f(),h("div",ve," Aucune action requise ")):k("",!0)]))}}},we={key:0,class:"text-end position-absolute right-0 parms-btn"},Ce={class:"text-body-1 mb-2"},Ee={class:"text-body-1 mb-2"},Ie={class:"text-body-1 mb-2"},he={class:"text-body-1 mb-2"},ke={class:"text-body-1 mb-2"},$e={class:"text-body-1 mb-2"},Ne={class:"text-body-1 mb-2"},Te={class:"text-body-1 mb-2"},Ae={class:"text-body-1 mb-2"},Re={class:"text-body-1 mb-2"},Se={class:"text-body-1 mb-2"},Oe={class:"text-body-1 mb-2"},Pe={class:"text-body-1 mb-2"},Ue={class:"text-body-1 mb-2"},De={class:"text-body-1 mb-2"},Le={__name:"showColis",props:{id:{type:Object,required:!1},isShowItem:{type:Boolean,required:!0}},emits:["update:isShowItem","fetchItems"],async setup(B,{emit:T}){let p,L;const A=B,b=T;let w={id:"",nom_vendeur:"",tel_vendeur:"",tarif_id:"",commentaire_vendeur:"",code_ramassage:"",frais_livreur:"",adresse:"",livreur:"",livreur_id:"",tel_livreur:"",statut:"",vendeur:"",colisHistories:[]};const O=([p,L]=Et(()=>W("/api/ramasseurs").then(c=>c.data)),p=await p,L(),p),o=m(structuredClone(ct(w))),_=m(!1),P=async c=>{_.value=!0,await W("/api/colis/"+c).then(async a=>{a.status===200&&(o.value=a.data),_.value=!1}).catch(a=>{_.value=!1,a.response&&a.response.status===422?D.error(a.response.data.message):D.error("something wrong")})};lt(()=>A.id,c=>{P(c)},{immediate:!0});const R=()=>{b("update:isShowItem",!1),b("fetchItems"),o.value=structuredClone(ct(w))},F=j("gestionnaire","action"),v=m("Actions"),C=["tabler-adjustments-share","tabler-logs"],i=m(!1),d=m(!1),E=async()=>{d.value=!0,await W({method:"POST",url:"/api/parametrerColis",data:{id:o.value.id,livreur_id:o.value.livreur_id,frais_livreur:o.value.frais_livreur}}).then(async c=>{c.status===200&&(D.success(c.data),P(o.value.id)),d.value=!1}).catch(c=>{d.value=!1,c.response&&c.response.status===422?D.error(c.response.data.message):D.error("something wrong")})};return(c,a)=>{const G=Vt,K=xe,nt=Mt,it=yt,Z=xt,Y=Ft;return f(),U(ht,{width:c.$vuetify.display.smAndDown?"auto":900,"model-value":A.isShowItem,"onUpdate:modelValue":R},{default:s(()=>[e(G,{onClick:R}),e(Y,{title:"Details Colis",loading:l(_),"no-actions":""},{default:s(()=>[e(H,null,{default:s(()=>[ft(e(z,null,{default:s(()=>[l(F)?(f(),h("div",we,[e(S,{icon:"",class:"rounded-0",onClick:a[0]||(a[0]=V=>i.value=!0)},{default:s(()=>[e(X,{size:"22",icon:"tabler-settings"})]),_:1})])):k("",!0),e(N,null,{default:s(()=>[e(g,{cols:"12",lg:"6"},{default:s(()=>[e(H,{title:"Informations colis"},{default:s(()=>[e(z,null,{default:s(()=>[e(bt,{class:"billing-address-table"},{default:s(()=>[t("tr",null,[a[7]||(a[7]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Code : ")],-1)),t("td",null,[t("p",Ce,u(l(o).code),1)])]),t("tr",null,[a[8]||(a[8]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Livreur : ")],-1)),t("td",null,[t("p",Ee,u(l(o).livreur),1)])]),t("tr",null,[a[9]||(a[9]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Tel Livreur : ")],-1)),t("td",null,[t("p",Ie,u(l(o).tel_livreur),1)])]),t("tr",null,[a[10]||(a[10]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Ramassage : ")],-1)),t("td",null,[t("p",he,u(l(o).code_ramassage),1)])]),t("tr",null,[a[11]||(a[11]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Statut: ")],-1)),t("td",null,[t("p",ke,[e(ot,at(("statutInfos"in c?c.statutInfos:l($))(l(o).statut),{density:"default",label:"",size:"small"}),null,16)])])]),t("tr",null,[a[12]||(a[12]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Prix : ")],-1)),t("td",null,[t("p",$e,u(l(o).montant),1)])]),t("tr",null,[a[13]||(a[13]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Produit : ")],-1)),t("td",null,[t("p",Ne,u(l(o).produit),1)])]),t("tr",null,[a[14]||(a[14]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," essayage : ")],-1)),t("td",null,[t("p",Te,u(l(o).essayage?"OUI":"NON"),1)])]),t("tr",null,[a[15]||(a[15]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," ouvrir : ")],-1)),t("td",null,[t("p",Ae,u(l(o).ouvrir?"OUI":"NON"),1)])]),t("tr",null,[a[16]||(a[16]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," echange : ")],-1)),t("td",null,[t("p",Re,u(l(o).echange?"OUI":"NON"),1)])]),t("tr",null,[a[17]||(a[17]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Commentaire : ")],-1)),t("td",null,[t("p",Se,u(l(o).commentaire_vendeur),1)])])]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{cols:"12",lg:"6"},{default:s(()=>[e(H,{title:"Informations client"},{default:s(()=>[e(z,null,{default:s(()=>[e(bt,{class:"billing-address-table"},{default:s(()=>[t("tr",null,[a[18]||(a[18]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Nom de client : ")],-1)),t("td",null,[t("p",Oe,u(l(o).nom_client),1)])]),t("tr",null,[a[19]||(a[19]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Tel de client : ")],-1)),t("td",null,[t("p",Pe,u(l(o).tel_client),1)])]),t("tr",null,[a[20]||(a[20]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Distination : ")],-1)),t("td",null,[t("p",Ue,u(l(o).destination),1)])]),t("tr",null,[a[21]||(a[21]=t("td",null,[t("h6",{class:"text-h6 text-no-wrap mb-2"}," Adresse : ")],-1)),t("td",null,[t("p",De,u(l(o).adresse),1)])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(qt,{modelValue:l(v),"onUpdate:modelValue":a[1]||(a[1]=V=>x(v)?v.value=V:null),grow:"",class:"disable-tab-transition",stacked:""},{default:s(()=>[(f(),h(wt,null,Ct(C,(V,tt)=>e(jt,{key:tt},{default:s(()=>[e(X,{size:"40",icon:V},null,8,["icon"])]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(Bt,{modelValue:l(v),"onUpdate:modelValue":a[3]||(a[3]=V=>x(v)?v.value=V:null),class:"mt-3"},{default:s(()=>[e(vt,null,{default:s(()=>[e(K,{id:l(o).id,"current-statut":l(o).statut,onGetItemData:a[2]||(a[2]=V=>P(l(o).id))},null,8,["id","current-statut"])]),_:1}),e(vt,null,{default:s(()=>[e(nt,{histories:l(o).colisHistories},null,8,["histories"])]),_:1})]),_:1},8,["modelValue"])]),_:1},512),[[_t,!l(i)]]),l(F)?ft((f(),U(z,{key:0},{default:s(()=>[e(N,null,{default:s(()=>[e(g,{md:"6",cols:"12"},{default:s(()=>[e(it,{modelValue:l(o).livreur_id,"onUpdate:modelValue":a[4]||(a[4]=V=>l(o).livreur_id=V),placeholder:"Livreurs",label:"Livreurs",items:l(O),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","items"])]),_:1}),e(g,{cols:"12",md:"6"},{default:s(()=>[e(Z,{modelValue:l(o).frais_livreur,"onUpdate:modelValue":a[5]||(a[5]=V=>l(o).frais_livreur=V),rules:["requiredValidator"in c?c.requiredValidator:l(J)],label:"Frais de livreur",type:"number",placeholder:"Frais de livreur"},null,8,["modelValue","rules"])]),_:1})]),_:1}),e(N,null,{default:s(()=>[e(g,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:s(()=>[e(S,{color:"secondary",onClick:a[6]||(a[6]=V=>i.value=!1)},{default:s(()=>a[22]||(a[22]=[I(" retour ")])),_:1}),e(S,{loading:l(d),onClick:E},{default:s(()=>a[23]||(a[23]=[I(" Envoyer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)),[[_t,l(i)]]):k("",!0)]),_:1})]),_:1},8,["loading"])]),_:1},8,["width","model-value"])}}},Fe=It(Le,[["__scopeId","data-v-41d42f24"]]),qe={class:"d-flex flex-wrap gap-4 ma-6"},je={class:"d-flex gap-4 flex-wrap align-center"},Be={key:1},Me={key:0},Il={__name:"list",async setup(B){let T,p;const L=[{title:"code",key:"code",sortable:!1},{title:"Statut",key:"statut",sortable:!1},{title:"destination",key:"destination",sortable:!1},{title:"Montant",key:"montant",sortable:!1},{title:"Nom du client",key:"nom_client",sortable:!1},{title:"Tel du client",key:"tel_client",sortable:!1},{title:"Vendeur",key:"vendeur",sortable:!1},{title:"actions",key:"actions",sortable:!1}],A=m(),b=m(),w=m(),O=m(),o=m(!1),_=m(!1),P=m(),R=m(!1),F=m(),v=m(5),C=m(1),i=m(),d=m(),E=y=>{var n,q;i.value=(n=y.sortBy[0])==null?void 0:n.key,d.value=(q=y.sortBy[0])==null?void 0:q.order},c=y=>{R.value=!0,F.value=y},a=y=>{_.value=!0,P.value=y},G=async()=>{let y="/api/colis/"+P.value.id;o.value=!0,W({method:"DELETE",url:y}).then(async n=>{n.status===200&&(_.value=!1,D.success(n.data),Y()),o.value=!1}).catch(n=>{o.value=!1})},{data:K,error:nt,statusCode:it,isFetching:Z,execute:Y}=([T,p]=Et(()=>Kt(St("/api/colis",{query:{code:A,statut:b,nom_client:w,tel_client:O,page:C,itemsPerPage:v,sortBy:i,orderBy:d}}))),T=await T,p(),T),V=Pt(),tt=st(()=>K.value.items),rt=st(()=>K.value.total),Q=m(!1),ut=m(0),dt=m(0),kt=y=>{dt.value=y.id,ut.value++,Q.value=!0};return(y,n)=>{const q=xt,$t=yt,mt=Ut("IconBtn"),Nt=Rt,Tt=Vt;return f(),h("div",null,[e(H,{title:"Filtres",class:"mb-6 d-print-none"},{default:s(()=>[e(z,null,{default:s(()=>[e(N,null,{default:s(()=>[e(g,{cols:"12",sm:"2"},{default:s(()=>[e(q,{modelValue:l(b),"onUpdate:modelValue":n[0]||(n[0]=r=>x(b)?b.value=r:null),placeholder:"Statut"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"2"},{default:s(()=>[e(q,{modelValue:l(A),"onUpdate:modelValue":n[1]||(n[1]=r=>x(A)?A.value=r:null),placeholder:"Code"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"2"},{default:s(()=>[e(q,{modelValue:l(w),"onUpdate:modelValue":n[2]||(n[2]=r=>x(w)?w.value=r:null),placeholder:"Nom du client"},null,8,["modelValue"])]),_:1}),e(g,{cols:"12",sm:"2"},{default:s(()=>[e(q,{modelValue:l(O),"onUpdate:modelValue":n[3]||(n[3]=r=>x(O)?O.value=r:null),placeholder:"Telephone du client"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(M),t("div",qe,[e(Qt),t("div",je,[e($t,{modelValue:l(v),"onUpdate:modelValue":n[4]||(n[4]=r=>x(v)?v.value=r:null),items:[5,10,20,25,50]},null,8,["modelValue"]),l(j)("create","colis")?(f(),U(S,{key:0,color:"primary","prepend-icon":"tabler-plus",onClick:n[5]||(n[5]=r=>l(V).push({name:"colis-add"}))},{default:s(()=>n[14]||(n[14]=[I(" Ajouter Colis ")])),_:1})):k("",!0)])]),e(M,{class:"mt-4"}),e(At,{"items-per-page":l(v),"onUpdate:itemsPerPage":n[7]||(n[7]=r=>x(v)?v.value=r:null),page:l(C),"onUpdate:page":n[8]||(n[8]=r=>x(C)?C.value=r:null),loading:l(Z),headers:L,items:l(tt),"items-length":l(rt),class:"text-no-wrap",locale:"fr","onUpdate:options":E},{"item.code":s(({item:r})=>[l(j)("show","colis")?(f(),U(S,{key:0,variant:"text",onClick:et=>kt(r)},{default:s(()=>[I(u(r.code),1)]),_:2},1032,["onClick"])):(f(),h("span",Be,u(r.code),1))]),"item.statut":s(({item:r})=>[e(ot,at(("statutInfos"in y?y.statutInfos:l($))(r.statut),{density:"default",label:"",size:"small"}),null,16),r.statut_retour?(f(),h("span",Me,[n[15]||(n[15]=I(" - ")),e(ot,at(("statutInfos"in y?y.statutInfos:l($))(r.statut_retour),{density:"default",label:"",size:"small"}),null,16)])):k("",!0)]),"item.actions":s(({item:r})=>[t("div",null,[l(j)("update","colis")&&r.statut=="EN_ATTENTE"?(f(),U(mt,{key:0,onClick:et=>l(V).push("/colis/"+r.id)},{default:s(()=>[e(X,{icon:"tabler-edit"})]),_:2},1032,["onClick"])):k("",!0),e(mt,null,{default:s(()=>[e(X,{icon:"tabler-dots-vertical"}),e(Wt,{activator:"parent"},{default:s(()=>[e(Yt,null,{default:s(()=>[e(gt,{value:"print","prepend-icon":"tabler-text-scan-2",onClick:et=>c(r)},{default:s(()=>n[16]||(n[16]=[I(" Print ")])),_:2},1032,["onClick"]),l(j)("delete","colis")&&r.statut=="EN_ATTENTE"?(f(),U(gt,{key:0,value:"delete","prepend-icon":"tabler-trash",onClick:et=>a(r)},{default:s(()=>n[17]||(n[17]=[I(" Delete ")])),_:2},1032,["onClick"])):k("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),bottom:s(()=>[e(Nt,{page:l(C),"onUpdate:page":n[6]||(n[6]=r=>x(C)?C.value=r:null),"items-per-page":l(v),"total-items":l(rt)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","loading","items","items-length"]),e(ht,{modelValue:l(_),"onUpdate:modelValue":n[11]||(n[11]=r=>x(_)?_.value=r:null),persistent:"",class:"v-dialog-sm"},{default:s(()=>[e(Tt,{onClick:n[9]||(n[9]=r=>_.value=!l(_))}),e(H,{title:"Êtes-vous sûr de vouloir supprimer le colis "+l(P).code+" ?"},{default:s(()=>[e(z,{class:"d-flex justify-end gap-3 flex-wrap"},{default:s(()=>[e(S,{color:"secondary",variant:"tonal",onClick:n[10]||(n[10]=r=>_.value=!1)},{default:s(()=>n[18]||(n[18]=[I(" Non ")])),_:1}),e(S,{loading:l(o),onClick:G},{default:s(()=>n[19]||(n[19]=[I(" Oui ")])),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},8,["modelValue"])]),_:1}),l(R)?(f(),U(fe,{key:0,"is-print-colis":l(R),"onUpdate:isPrintColis":n[12]||(n[12]=r=>x(R)?R.value=r:null),item:l(F)},null,8,["is-print-colis","item"])):k("",!0),l(Q)?(f(),U(Fe,{id:l(dt),key:l(ut),"is-show-item":l(Q),"onUpdate:isShowItem":n[13]||(n[13]=r=>x(Q)?Q.value=r:null),onFetchItems:l(Y)},null,8,["id","is-show-item","onFetchItems"])):k("",!0)])}}};export{Il as default};
