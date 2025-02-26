import{$,r as f,P as M,V as z}from"./VForm-CJaJdYDY.js";import{_ as H}from"./AppTextarea-BPzQHCZZ.js";import{_ as L}from"./AppAutocomplete-NsgYkxNv.js";import{_ as Y}from"./AppTextField-DK30dysE.js";import{a1 as j,a2 as G,a9 as D,b as e,s as T,am as J,Y as K,al as Q,ar as W,F as B,ag as x,an as X,j as Z,r as P,aq as ee,as as O,w as k,c as le,o as ae,d as I,x as te,e as o,n as a,ai as oe,v as re}from"./index-fsRyKtKg.js";import{t as F}from"./toast-DS4ULJxE.js";import{V as g,a as u}from"./VRow-4KV1s1En.js";import{V as U}from"./VCard-DomSwUkk.js";import{V as S}from"./VCardText-DqluLgVN.js";import{V as N,a as h,m as se}from"./VInput-Bk9SxLVM.js";import{V as A,m as de,a as ie,b as ue}from"./VSelect-DAmpojO8.js";const ne=G({...de({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),_=j()({name:"VRadio",props:ne(),setup(i,p){let{slots:c}=p;return D(()=>{const n=A.filterProps(i);return e(A,T(n,{class:["v-radio",i.class],style:i.style,type:"radio"}),c)}),{}}}),me=G({height:{type:[Number,String],default:"auto"},...se(),...X(ue(),["multiple"]),trueIcon:{type:x,default:"$radioOn"},falseIcon:{type:x,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),R=j()({name:"VRadioGroup",inheritAttrs:!1,props:me(),emits:{"update:modelValue":i=>!0},setup(i,p){let{attrs:c,slots:n}=p;const C=J(),v=K(()=>i.id||`radio-group-${C}`),V=Q(i,"modelValue");return D(()=>{const[y,q]=W(c),r=N.filterProps(i),w=A.filterProps(i),t=n.label?n.label({label:i.label,props:{for:v.value}}):i.label;return e(N,T({class:["v-radio-group",i.class],style:i.style},y,r,{modelValue:V.value,"onUpdate:modelValue":l=>V.value=l,id:v.value}),{...n,default:l=>{let{id:d,messagesId:m,isDisabled:b,isReadonly:s}=l;return e(B,null,[t&&e(h,{id:d.value},{default:()=>[t]}),e(ie,T(w,{id:d.value,"aria-describedby":m.value,defaultsTarget:"VRadio",trueIcon:i.trueIcon,falseIcon:i.falseIcon,type:i.type,disabled:b.value,readonly:s.value,"aria-labelledby":t?d.value:void 0,multiple:!1},q,{modelValue:V.value,"onUpdate:modelValue":E=>V.value=E}),n)])}})}),{}}}),fe={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},pe={class:"d-flex flex-column justify-center"},Ve={class:"text-h4 font-weight-medium"},Ie={__name:"FormColis",props:{method:{type:String,required:!0},item:{type:Object,required:!1},identity:{type:String,required:!1}},async setup(i){let p,c;const n=i,C=Z(),v=P(),V=P([]),y=P(!1);V.value=([p,c]=ee(()=>$("/api/tarifs").then(t=>t.data.items)),p=await p,c(),p);let q={nom_client:"",tel_client:"",tarif_id:"",frais_livraison:"",adresse:"",produit:"",montant:"",commentaire_vendeur:"",essayage:0,ouvrir:0,echange:0};const r=P(structuredClone(O(q)));k(()=>n.item,t=>{n.method=="PUT"&&(r.value={...t})},{immediate:!0}),k(()=>r.value.tarif_id,t=>{const l=V.value.find(d=>d.id===t);r.value.frais_livraison=l?l.tarif+"DH à "+l.delai_livraison:""},{immediate:!0});const w=async()=>{const{valid:t}=await v.value.validate();if(t){let l="/api/colis";n.method=="PUT"&&(l="/api/colis/"+n.identity),y.value=!0,$({method:n.method,url:l,data:r.value}).then(async d=>{var m;d.status===200&&(F.success(d.data),n.method=="POST"?((m=v.value)==null||m.reset(),r.value=structuredClone(O(q))):C.push({name:"colis-list"})),y.value=!1}).catch(d=>{if(y.value=!1,d.response&&d.response.status===422){const m=d.response.data.errors;for(let b in m)F.error(`${b}: ${m[b].join(", ")}`)}})}};return(t,l)=>{const d=Y,m=L,b=H;return ae(),le(B,null,[I("div",fe,[I("div",pe,[I("h4",Ve,te(n.method=="POST"?"Ajouter Colis":"Modifier Colis"),1)])]),e(z,{ref_key:"refForm",ref:v,class:"mt-3"},{default:o(()=>[e(g,null,{default:o(()=>[e(u,{cols:"12",md:"6"},{default:o(()=>[e(u,{cols:"12",class:"pa-0"},{default:o(()=>[e(U,{title:"Informations du client"},{default:o(()=>[e(S,null,{default:o(()=>[e(g,null,{default:o(()=>[e(u,{md:"6",cols:"12"},{default:o(()=>[e(d,{modelValue:a(r).nom_client,"onUpdate:modelValue":l[0]||(l[0]=s=>a(r).nom_client=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],placeholder:"Nom",label:"Nom"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a(r).tel_client,"onUpdate:modelValue":l[1]||(l[1]=s=>a(r).tel_client=s),rules:["requiredValidator"in t?t.requiredValidator:a(f),"PhoneValidator"in t?t.PhoneValidator:a(M)],label:"Telephone",size:"10",placeholder:"0655554747"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",class:"px-0"},{default:o(()=>[e(U,{title:"Informations d'adresse"},{default:o(()=>[e(S,null,{default:o(()=>[e(g,null,{default:o(()=>[e(u,{md:"6",cols:"12"},{default:o(()=>[e(m,{modelValue:a(r).tarif_id,"onUpdate:modelValue":l[2]||(l[2]=s=>a(r).tarif_id=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],label:"Destination",items:a(V),"item-title":"destination","item-value":"id",placeholder:"Select State"},null,8,["modelValue","rules","items"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a(r).frais_livraison,"onUpdate:modelValue":l[3]||(l[3]=s=>a(r).frais_livraison=s),disabled:"",label:"Frais de livraison",placeholder:""},null,8,["modelValue"])]),_:1}),e(u,{cols:"12"},{default:o(()=>[e(d,{modelValue:a(r).adresse,"onUpdate:modelValue":l[4]||(l[4]=s=>a(r).adresse=s),"prepend-inner-icon":"tabler-map-pin",rules:["requiredValidator"in t?t.requiredValidator:a(f)],label:"Adresse",placeholder:"Adresse"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(U,{title:"Informations des produits"},{default:o(()=>[e(S,null,{default:o(()=>[e(g,null,{default:o(()=>[e(u,{cols:"12"},{default:o(()=>[e(d,{modelValue:a(r).produit,"onUpdate:modelValue":l[5]||(l[5]=s=>a(r).produit=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],label:"Produits",placeholder:"Produits"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:o(()=>[e(d,{modelValue:a(r).montant,"onUpdate:modelValue":l[6]||(l[6]=s=>a(r).montant=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],type:"number",label:"Montant Total",placeholder:"Montant Total"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6",class:"app-text-field"},{default:o(()=>[e(h,{text:"Essayage",class:"mb-1 text-body-2 text-wrap"}),e(R,{modelValue:a(r).essayage,"onUpdate:modelValue":l[7]||(l[7]=s=>a(r).essayage=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],inline:""},{default:o(()=>[e(_,{label:"Non",value:0,density:"compact"}),e(_,{label:"Oui",value:1,density:"compact"})]),_:1},8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6",class:"app-text-field"},{default:o(()=>[e(h,{text:"Ouvrir",class:"mb-1 text-body-2 text-wrap"}),e(R,{modelValue:a(r).ouvrir,"onUpdate:modelValue":l[8]||(l[8]=s=>a(r).ouvrir=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],inline:""},{default:o(()=>[e(_,{label:"Non",value:0,density:"compact"}),e(_,{label:"Oui",value:1,density:"compact"})]),_:1},8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6",class:"app-text-field"},{default:o(()=>[e(h,{text:"Echange",class:"mb-1 text-body-2 text-wrap"}),e(R,{modelValue:a(r).echange,"onUpdate:modelValue":l[9]||(l[9]=s=>a(r).echange=s),rules:["requiredValidator"in t?t.requiredValidator:a(f)],inline:""},{default:o(()=>[e(_,{label:"Non",value:0,density:"compact"}),e(_,{label:"Oui",value:1,density:"compact"})]),_:1},8,["modelValue","rules"])]),_:1}),e(u,{cols:"12"},{default:o(()=>[e(b,{modelValue:a(r).commentaire_vendeur,"onUpdate:modelValue":l[10]||(l[10]=s=>a(r).commentaire_vendeur=s),label:"Commentaire",placeholder:"Commentaire",rows:"2","row-height":"20"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(u,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:o(()=>[e(oe,{loading:a(y),onClick:w},{default:o(()=>l[11]||(l[11]=[re(" Enregistrer ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)],64)}}};export{Ie as _};
