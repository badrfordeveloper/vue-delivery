import{$ as T,r as b,e as X,P as Z,p as ee,V as le}from"./VForm-KvLnv-Uh.js";import{_ as ae}from"./AppSelect-dD7y6n_z.js";import{_ as te}from"./AppTextField-D8fU3XDA.js";import{a1 as oe,a2 as se,al as R,bf as re,r as _,ay as de,Y as $,am as ie,a9 as ne,ar as ue,b as e,s as j,F as z,aB as me,bg as ce,$ as fe,bh as Ve,aL as pe,j as ve,w as be,aq as he,c as we,o as ye,d as F,x as ke,e as d,n as l,ai as ge,v as Ce}from"./index-zlWi7S3f.js";import{t as x}from"./toast-DyK4obtI.js";import{V as C,a as u}from"./VRow-szZqHLmm.js";import{V as D}from"./VCard-BLwT3Pm5.js";import{V as O}from"./VCardText-BQSQr54H.js";import{g as _e,V as E,m as Pe}from"./VTextField-DqeBEujr.js";import{V as L,m as Se}from"./VSelect-njk6i2eQ.js";const Ue=se({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Pe(),...Se()},"VSwitch"),qe=oe()({name:"VSwitch",inheritAttrs:!1,props:Ue(),emits:{"update:focused":r=>!0,"update:modelValue":r=>!0,"update:indeterminate":r=>!0},setup(r,p){let{attrs:w,slots:i}=p;const v=R(r,"indeterminate"),m=R(r,"modelValue"),{loaderClasses:o}=re(r),{isFocused:P,focus:S,blur:U}=_e(r),V=_(),a=de&&window.matchMedia("(forced-colors: active)").matches,t=$(()=>typeof r.loading=="string"&&r.loading!==""?r.loading:r.color),n=ie(),c=$(()=>r.id||`switch-${n}`);function s(){v.value&&(v.value=!1)}function H(y){var k,g;y.stopPropagation(),y.preventDefault(),(g=(k=V.value)==null?void 0:k.input)==null||g.click()}return ne(()=>{const[y,k]=ue(w),g=E.filterProps(r),M=L.filterProps(r);return e(E,j({class:["v-switch",{"v-switch--flat":r.flat},{"v-switch--inset":r.inset},{"v-switch--indeterminate":v.value},o.value,r.class]},y,g,{modelValue:m.value,"onUpdate:modelValue":q=>m.value=q,id:c.value,focused:P.value,style:r.style}),{...i,default:q=>{let{id:W,messagesId:Y,isDisabled:G,isReadonly:J,isValid:I}=q;const N={model:m,isValid:I};return e(L,j({ref:V},M,{modelValue:m.value,"onUpdate:modelValue":[h=>m.value=h,s],id:W.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":v.value?"mixed":void 0,disabled:G.value,readonly:J.value,onFocus:S,onBlur:U},k),{...i,default:h=>{let{backgroundColorClasses:A,backgroundColorStyles:f}=h;return e("div",{class:["v-switch__track",a?void 0:A.value],style:f.value,onClick:H},[i["track-true"]&&e("div",{key:"prepend",class:"v-switch__track-true"},[i["track-true"](N)]),i["track-false"]&&e("div",{key:"append",class:"v-switch__track-false"},[i["track-false"](N)])])},input:h=>{let{inputNode:A,icon:f,backgroundColorClasses:K,backgroundColorStyles:Q}=h;return e(z,null,[A,e("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":f||r.loading},r.inset||a?void 0:K.value],style:r.inset?void 0:Q.value},[i.thumb?e(me,{defaults:{VIcon:{icon:f,size:"x-small"}}},{default:()=>[i.thumb({...N,icon:f})]}):e(ce,null,{default:()=>[r.loading?e(Ve,{name:"v-switch",active:!0,color:I.value===!1?void 0:t.value},{default:B=>i.loader?i.loader(B):e(pe,{active:B.isActive,color:B.color,indeterminate:!0,size:"16",width:"2"},null)}):f&&e(fe,{key:String(f),icon:f,size:"x-small"},null)]})])])}})}})}),{}}}),Ne={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},Ae={class:"d-flex flex-column justify-center"},Be={class:"text-h4 font-weight-medium"},Le={__name:"FormUser",props:{method:{type:String,required:!0},user:{type:Object,required:!1},identity:{type:String,required:!1}},async setup(r){let p,w;const i=r,v=ve(),m=_(),o=_({lastName:"",firstName:"",email:"",password:"Badr123@",active:0,phone:"",store_name:"",role:null,ville:"",address:"",bank_name:"",rib:""});be(()=>i.user,a=>{i.method=="PUT"&&(o.value={...a},o.value.active=o.value.active==1)},{immediate:!0});const P=([p,w]=he(()=>T("/api/rolesList").then(a=>a.data)),p=await p,w(),p),S=async()=>{console.log(o.value);const{valid:a}=await m.value.validate();if(a){let t="/api/users";i.method=="PUT"&&(t="/api/users/"+i.identity),T({method:i.method,url:t,data:o.value}).then(async n=>{var c;n.status===200&&(x.success(n.data),i.method=="POST"?(c=m.value)==null||c.reset():v.push({name:"user-list"}))}).catch(n=>{if(n.response&&n.response.status===422){const c=n.response.data.errors;for(let s in c)x.error(`${s}: ${c[s].join(", ")}`)}})}},U=a=>{if(a===1||a===!0)return"Active";if(a===0||a===!1)return"Inactive"},V=_(!1);return(a,t)=>{const n=te,c=ae;return ye(),we(z,null,[F("div",Ne,[F("div",Ae,[F("h4",Be,ke(i.method=="POST"?"Ajouter Utilisateur":"Modifier Utilisateur"),1)])]),e(le,{ref_key:"refForm",ref:m,class:"mt-3"},{default:d(()=>[e(C,null,{default:d(()=>[e(u,{cols:"12"},{default:d(()=>[e(D,null,{default:d(()=>[e(O,{class:"pt-2"},{default:d(()=>[e(C,null,{default:d(()=>[e(u,{md:"6",cols:"12"},{default:d(()=>[e(n,{modelValue:l(o).lastName,"onUpdate:modelValue":t[0]||(t[0]=s=>l(o).lastName=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Nom",label:"Nom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(n,{modelValue:l(o).firstName,"onUpdate:modelValue":t[1]||(t[1]=s=>l(o).firstName=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Prenom",label:"Prenom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(c,{modelValue:l(o).role,"onUpdate:modelValue":t[2]||(t[2]=s=>l(o).role=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Role",label:"Role",items:l(P),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","rules","items"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).email,"onUpdate:modelValue":t[3]||(t[3]=s=>l(o).email=s),rules:["requiredValidator"in a?a.requiredValidator:l(b),"emailValidator"in a?a.emailValidator:l(X)],label:"E-mail",placeholder:"example@gmail.com",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).phone,"onUpdate:modelValue":t[4]||(t[4]=s=>l(o).phone=s),rules:["requiredValidator"in a?a.requiredValidator:l(b),"PhoneValidator"in a?a.PhoneValidator:l(Z)],label:"Telephone",placeholder:"0655554747"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).store_name,"onUpdate:modelValue":t[5]||(t[5]=s=>l(o).store_name=s),label:"Nom de store",placeholder:"Nom de store"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).address,"onUpdate:modelValue":t[6]||(t[6]=s=>l(o).address=s),label:"Address",placeholder:"Address"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).password,"onUpdate:modelValue":t[7]||(t[7]=s=>l(o).password=s),rules:i.method=="POST"?["requiredValidator"in a?a.requiredValidator:l(b),"passwordValidator"in a?a.passwordValidator:l(ee)]:[],type:l(V)?"text":"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye",label:"Current Password",autocomplete:"on",placeholder:"············","onClick:appendInner":t[8]||(t[8]=s=>V.value=!l(V))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(u,{cols:"12",md:"12"},{default:d(()=>[e(qe,{modelValue:l(o).active,"onUpdate:modelValue":t[9]||(t[9]=s=>l(o).active=s),color:"success","base-color":"error",label:U(l(o).active)},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{cols:"12"},{default:d(()=>[e(D,{title:"Informations de paiement"},{default:d(()=>[e(O,null,{default:d(()=>[e(C,null,{default:d(()=>[e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).bank_name,"onUpdate:modelValue":t[10]||(t[10]=s=>l(o).bank_name=s),label:"Nom de bank",placeholder:"CIH"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).rib,"onUpdate:modelValue":t[11]||(t[11]=s=>l(o).rib=s),label:"RIB",placeholder:"FR3333785451"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(C,null,{default:d(()=>[e(u,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:d(()=>[e(ge,{onClick:S},{default:d(()=>t[12]||(t[12]=[Ce(" Enregistrer ")])),_:1})]),_:1})]),_:1})]),_:1},512)],64)}}};export{Le as _};
