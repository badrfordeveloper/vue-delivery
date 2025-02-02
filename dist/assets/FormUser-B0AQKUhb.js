import{r as m,e as k,p as P,_ as T}from"./AppSelect-C8sIiwV2.js";import{$ as y,V as g,_ as F}from"./VForm-E0cdFEXy.js";import{t as q}from"./toast-BdFwRg9f.js";import{V,a as i}from"./VRow-DQmbGlZu.js";import{V as U}from"./VCard-DGGXX4Kw.js";import{V as _}from"./VCardText-paiP_Zt_.js";import{V as j}from"./VSwitch-BS4m1yMJ.js";import{r as b,w as A,at as $,o as B,c as I,d as v,v as R,b as e,e as d,m as l,a2 as O,t as x,F as D}from"./index-Bs2RNO2c.js";const E={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},H={class:"d-flex flex-column justify-center"},L={class:"text-h4 font-weight-medium"},Z={__name:"FormUser",props:{method:{type:String,required:!0},user:{type:Object,required:!1},identity:{type:String,required:!1}},async setup(N){let p,w;const u=N,c=b(),o=b({lastName:"",firstName:"",email:"",password:"Badr123@",active:0,phone:"",store_name:"",role:null,ville:"",address:"",bank_name:"",rib:""});A(()=>u.user,r=>{u.method=="PUT"&&(o.value={...r},o.value.active=o.value.active==1)},{immediate:!0});const h=([p,w]=$(()=>y("/api/rolesList").then(r=>r.data)),p=await p,w(),p),S=async()=>{console.log(o.value);const{valid:r}=await c.value.validate();if(r){let a="/api/users";u.method=="PUT"&&(a="/api/users/"+u.identity),y({method:u.method,url:a,data:o.value}).then(async s=>{var n;s.status===200&&(q.success(s.data),u.method=="POST"&&((n=c.value)==null||n.reset()))}).catch(s=>{if(s.response&&s.response.status===422){const n=s.response.data.errors;for(let t in n)q.error(`${t}: ${n[t].join(", ")}`)}})}},C=r=>{if(r===1||r===!0)return"Active";if(r===0||r===!1)return"Inactive"},f=b(!1);return(r,a)=>{const s=F,n=T;return B(),I(D,null,[v("div",E,[v("div",H,[v("h4",L,R(u.method=="POST"?"Ajouter Utilisateur":"Modifier Utilisateur"),1)])]),e(g,{ref_key:"refForm",ref:c,class:"mt-3"},{default:d(()=>[e(V,null,{default:d(()=>[e(i,{cols:"12"},{default:d(()=>[e(U,null,{default:d(()=>[e(_,{class:"pt-2"},{default:d(()=>[e(V,null,{default:d(()=>[e(i,{md:"6",cols:"12"},{default:d(()=>[e(s,{modelValue:l(o).lastName,"onUpdate:modelValue":a[0]||(a[0]=t=>l(o).lastName=t),rules:["requiredValidator"in r?r.requiredValidator:l(m)],placeholder:"Nom",label:"Nom"},null,8,["modelValue","rules"])]),_:1}),e(i,{md:"6",cols:"12"},{default:d(()=>[e(s,{modelValue:l(o).firstName,"onUpdate:modelValue":a[1]||(a[1]=t=>l(o).firstName=t),rules:["requiredValidator"in r?r.requiredValidator:l(m)],placeholder:"Prenom",label:"Prenom"},null,8,["modelValue","rules"])]),_:1}),e(i,{md:"6",cols:"12"},{default:d(()=>[e(n,{modelValue:l(o).role,"onUpdate:modelValue":a[2]||(a[2]=t=>l(o).role=t),rules:["requiredValidator"in r?r.requiredValidator:l(m)],placeholder:"Role",label:"Role",items:l(h),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","rules","items"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).email,"onUpdate:modelValue":a[3]||(a[3]=t=>l(o).email=t),rules:["requiredValidator"in r?r.requiredValidator:l(m),"emailValidator"in r?r.emailValidator:l(k)],label:"E-mail",placeholder:"example@gmail.com",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).phone,"onUpdate:modelValue":a[4]||(a[4]=t=>l(o).phone=t),rules:["requiredValidator"in r?r.requiredValidator:l(m)],label:"Telephone",placeholder:"0655554747"},null,8,["modelValue","rules"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).store_name,"onUpdate:modelValue":a[5]||(a[5]=t=>l(o).store_name=t),label:"Nom de store",placeholder:"Nom de store"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).address,"onUpdate:modelValue":a[6]||(a[6]=t=>l(o).address=t),label:"Address",placeholder:"Address"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).password,"onUpdate:modelValue":a[7]||(a[7]=t=>l(o).password=t),rules:u.method=="POST"?["requiredValidator"in r?r.requiredValidator:l(m),"passwordValidator"in r?r.passwordValidator:l(P)]:[],type:l(f)?"text":"password","append-inner-icon":l(f)?"tabler-eye-off":"tabler-eye",label:"Current Password",autocomplete:"on",placeholder:"············","onClick:appendInner":a[8]||(a[8]=t=>f.value=!l(f))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(i,{cols:"12",md:"12"},{default:d(()=>[e(j,{modelValue:l(o).active,"onUpdate:modelValue":a[9]||(a[9]=t=>l(o).active=t),color:"success","base-color":"error",label:C(l(o).active)},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{cols:"12"},{default:d(()=>[e(U,{title:"Informations de paiement"},{default:d(()=>[e(_,null,{default:d(()=>[e(V,null,{default:d(()=>[e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).bank_name,"onUpdate:modelValue":a[10]||(a[10]=t=>l(o).bank_name=t),label:"Nom de bank",placeholder:"CIH"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:d(()=>[e(s,{modelValue:l(o).rib,"onUpdate:modelValue":a[11]||(a[11]=t=>l(o).rib=t),label:"RIB",placeholder:"FR3333785451"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(V,null,{default:d(()=>[e(i,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:d(()=>[e(O,{onClick:S},{default:d(()=>a[12]||(a[12]=[x(" Save changes ")])),_:1})]),_:1})]),_:1})]),_:1},512)],64)}}};export{Z as _};
