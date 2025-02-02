import{_ as A,r as m,e as F,p as $}from"./AppSelect-C8sIiwV2.js";import{V as j,$ as w,_ as B}from"./VForm-E0cdFEXy.js";import{t as y}from"./toast-BdFwRg9f.js";import{V as f,a as u}from"./VRow-DQmbGlZu.js";import{V as N}from"./VCard-DGGXX4Kw.js";import{V as q}from"./VCardText-paiP_Zt_.js";import{V as S}from"./VSwitch-BS4m1yMJ.js";import{r as V,at as I,o as P,c as R,d as c,b as e,e as d,m as l,a2 as T,t as g,F as x}from"./index-Bs2RNO2c.js";import"./VTextField-u0xzw2dW.js";import"./VImg-ChlwgMlx.js";import"./forwardRefs-DWGaNmQL.js";import"./VList-B2D3WP8O.js";import"./VAvatar-B0jp4-Bf.js";import"./VDivider-aTOdqVjr.js";import"./VOverlay-CFu6OK1m.js";import"./VMenu-cvVSA9oS.js";import"./VChip-DtIQVCrE.js";/* empty css              */const oe={__name:"addxx",async setup(E){let n,v;const b=V(),U=V("POST"),t=V({lastName:"",firstName:"",email:"",password:"Badr123@",active:0,phone:"",store_name:"",role:null,ville:"",address:"",bank_name:"",rib:""}),C=([n,v]=I(()=>w("/api/rolesList").then(o=>o.data)),n=await n,v(),n),k=async()=>{const{valid:o}=await b.value.validate();o&&w({method:U.value,url:"/api/users",data:t.value}).then(async s=>{var i;s.status===200&&(y.success(s.data),(i=b.value)==null||i.reset())}).catch(s=>{if(s.response&&s.response.status===422){const i=s.response.data.errors;for(let r in i)y.error(`${r}: ${i[r].join(", ")}`)}})},_=o=>{if(o===1||o===!0)return"Active";if(o===0||o===!1)return"Inactive"},p=V(!1);return(o,a)=>{const s=B,i=A;return P(),R(x,null,[a[13]||(a[13]=c("div",{class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},[c("div",{class:"d-flex flex-column justify-center"},[c("h4",{class:"text-h4 font-weight-medium"}," Ajouter Utilisateur ")])],-1)),e(j,{ref_key:"refForm",ref:b,class:"mt-3"},{default:d(()=>[e(f,null,{default:d(()=>[e(u,{cols:"12"},{default:d(()=>[e(N,null,{default:d(()=>[e(q,{class:"pt-2"},{default:d(()=>[e(f,null,{default:d(()=>[e(u,{md:"6",cols:"12"},{default:d(()=>[e(s,{modelValue:l(t).lastName,"onUpdate:modelValue":a[0]||(a[0]=r=>l(t).lastName=r),rules:["requiredValidator"in o?o.requiredValidator:l(m)],placeholder:"Nom",label:"Nom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(s,{modelValue:l(t).firstName,"onUpdate:modelValue":a[1]||(a[1]=r=>l(t).firstName=r),rules:["requiredValidator"in o?o.requiredValidator:l(m)],placeholder:"Prenom",label:"Prenom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(i,{modelValue:l(t).role,"onUpdate:modelValue":a[2]||(a[2]=r=>l(t).role=r),rules:["requiredValidator"in o?o.requiredValidator:l(m)],placeholder:"Role",label:"Role",items:l(C),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","rules","items"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).email,"onUpdate:modelValue":a[3]||(a[3]=r=>l(t).email=r),rules:["requiredValidator"in o?o.requiredValidator:l(m),"emailValidator"in o?o.emailValidator:l(F)],label:"E-mail",placeholder:"example@gmail.com",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).phone,"onUpdate:modelValue":a[4]||(a[4]=r=>l(t).phone=r),rules:["requiredValidator"in o?o.requiredValidator:l(m)],label:"Telephone",placeholder:"0655554747"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).store_name,"onUpdate:modelValue":a[5]||(a[5]=r=>l(t).store_name=r),label:"Nom de store",placeholder:"Nom de store"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).address,"onUpdate:modelValue":a[6]||(a[6]=r=>l(t).address=r),label:"Address",placeholder:"Address"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).password,"onUpdate:modelValue":a[7]||(a[7]=r=>l(t).password=r),rules:["requiredValidator"in o?o.requiredValidator:l(m),"passwordValidator"in o?o.passwordValidator:l($)],type:l(p)?"text":"password","append-inner-icon":l(p)?"tabler-eye-off":"tabler-eye",label:"Current Password",autocomplete:"on",placeholder:"············","onClick:appendInner":a[8]||(a[8]=r=>p.value=!l(p))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(u,{cols:"12",md:"12"},{default:d(()=>[e(S,{modelValue:l(t).active,"onUpdate:modelValue":a[9]||(a[9]=r=>l(t).active=r),color:"success","base-color":"error",label:_(l(t).active)},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{cols:"12"},{default:d(()=>[e(N,{title:"Informations de paiement"},{default:d(()=>[e(q,null,{default:d(()=>[e(f,null,{default:d(()=>[e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).bank_name,"onUpdate:modelValue":a[10]||(a[10]=r=>l(t).bank_name=r),label:"Nom de bank",placeholder:"CIH"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(t).rib,"onUpdate:modelValue":a[11]||(a[11]=r=>l(t).rib=r),label:"RIB",placeholder:"FR3333785451"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,null,{default:d(()=>[e(u,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:d(()=>[e(T,{onClick:k},{default:d(()=>a[12]||(a[12]=[g(" Save changes ")])),_:1})]),_:1})]),_:1})]),_:1},512)],64)}}};export{oe as default};
