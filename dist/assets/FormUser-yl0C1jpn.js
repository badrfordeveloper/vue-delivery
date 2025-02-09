import{r as b,e as J,P as Q,p as ee,V as le}from"./VForm-Cy5hsHMQ.js";import{_ as ae}from"./AppSelect-y6FoQWxb.js";import{_ as te}from"./AppTextField-CmS8k3i0.js";import{a1 as oe,a8 as se,am as T,aW as re,r as _,aK as de,Y as R,an as ie,af as ne,aU as ue,b as e,q as $,F as L,aF as me,aX as ce,$ as fe,aY as Ve,aZ as pe,j as ve,w as be,aq as he,o as we,c as ye,d as B,v as ke,e as d,m as l,ai as ge,t as Ce}from"./index-DPEARWyz.js";import{$ as j}from"./api-DhWGbEVG.js";import{t as x}from"./toast-qMdeGvQh.js";import{V as C,a as u}from"./VRow-Dfw-41Up.js";import{V as D}from"./VCard-B2jYeW2D.js";import{V as O}from"./VCardText-f7-Kcvw5.js";import{b as _e,d as Pe,c as E}from"./VTextField-euNnZfEI.js";import{b as Se,c as z}from"./VSelect-CBQXVdf1.js";const Ue=oe({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},..._e(),...Se()},"VSwitch"),qe=se()({name:"VSwitch",inheritAttrs:!1,props:Ue(),emits:{"update:focused":r=>!0,"update:modelValue":r=>!0,"update:indeterminate":r=>!0},setup(r,p){let{attrs:w,slots:i}=p;const v=T(r,"indeterminate"),m=T(r,"modelValue"),{loaderClasses:o}=re(r),{isFocused:P,focus:S,blur:U}=Pe(r),V=_(),a=de&&window.matchMedia("(forced-colors: active)").matches,t=R(()=>typeof r.loading=="string"&&r.loading!==""?r.loading:r.color),n=ie(),c=R(()=>r.id||`switch-${n}`);function s(){v.value&&(v.value=!1)}function W(y){var k,g;y.stopPropagation(),y.preventDefault(),(g=(k=V.value)==null?void 0:k.input)==null||g.click()}return ne(()=>{const[y,k]=ue(w),g=E.filterProps(r),Y=z.filterProps(r);return e(E,$({class:["v-switch",{"v-switch--flat":r.flat},{"v-switch--inset":r.inset},{"v-switch--indeterminate":v.value},o.value,r.class]},y,g,{modelValue:m.value,"onUpdate:modelValue":q=>m.value=q,id:c.value,focused:P.value,style:r.style}),{...i,default:q=>{let{id:H,messagesId:K,isDisabled:M,isReadonly:X,isValid:I}=q;const N={model:m,isValid:I};return e(z,$({ref:V},Y,{modelValue:m.value,"onUpdate:modelValue":[h=>m.value=h,s],id:H.value,"aria-describedby":K.value,type:"checkbox","aria-checked":v.value?"mixed":void 0,disabled:M.value,readonly:X.value,onFocus:S,onBlur:U},k),{...i,default:h=>{let{backgroundColorClasses:F,backgroundColorStyles:f}=h;return e("div",{class:["v-switch__track",a?void 0:F.value],style:f.value,onClick:W},[i["track-true"]&&e("div",{key:"prepend",class:"v-switch__track-true"},[i["track-true"](N)]),i["track-false"]&&e("div",{key:"append",class:"v-switch__track-false"},[i["track-false"](N)])])},input:h=>{let{inputNode:F,icon:f,backgroundColorClasses:Z,backgroundColorStyles:G}=h;return e(L,null,[F,e("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":f||r.loading},r.inset||a?void 0:Z.value],style:r.inset?void 0:G.value},[i.thumb?e(me,{defaults:{VIcon:{icon:f,size:"x-small"}}},{default:()=>[i.thumb({...N,icon:f})]}):e(ce,null,{default:()=>[r.loading?e(Ve,{name:"v-switch",active:!0,color:I.value===!1?void 0:t.value},{default:A=>i.loader?i.loader(A):e(pe,{active:A.isActive,color:A.color,indeterminate:!0,size:"16",width:"2"},null)}):f&&e(fe,{key:String(f),icon:f,size:"x-small"},null)]})])])}})}})}),{}}}),Ne={class:"d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"},Fe={class:"d-flex flex-column justify-center"},Ae={class:"text-h4 font-weight-medium"},Le={__name:"FormUser",props:{method:{type:String,required:!0},user:{type:Object,required:!1},identity:{type:String,required:!1}},async setup(r){let p,w;const i=r,v=ve(),m=_(),o=_({lastName:"",firstName:"",email:"",password:"Badr123@",active:0,phone:"",store_name:"",role:null,ville:"",address:"",bank_name:"",rib:""});be(()=>i.user,a=>{i.method=="PUT"&&(o.value={...a},o.value.active=o.value.active==1)},{immediate:!0});const P=([p,w]=he(()=>j("/api/rolesList").then(a=>a.data)),p=await p,w(),p),S=async()=>{console.log(o.value);const{valid:a}=await m.value.validate();if(a){let t="/api/users";i.method=="PUT"&&(t="/api/users/"+i.identity),j({method:i.method,url:t,data:o.value}).then(async n=>{var c;n.status===200&&(x.success(n.data),i.method=="POST"?(c=m.value)==null||c.reset():v.push({name:"user-list"}))}).catch(n=>{if(n.response&&n.response.status===422){const c=n.response.data.errors;for(let s in c)x.error(`${s}: ${c[s].join(", ")}`)}})}},U=a=>{if(a===1||a===!0)return"Active";if(a===0||a===!1)return"Inactive"},V=_(!1);return(a,t)=>{const n=te,c=ae;return we(),ye(L,null,[B("div",Ne,[B("div",Fe,[B("h4",Ae,ke(i.method=="POST"?"Ajouter Utilisateur":"Modifier Utilisateur"),1)])]),e(le,{ref_key:"refForm",ref:m,class:"mt-3"},{default:d(()=>[e(C,null,{default:d(()=>[e(u,{cols:"12"},{default:d(()=>[e(D,null,{default:d(()=>[e(O,{class:"pt-2"},{default:d(()=>[e(C,null,{default:d(()=>[e(u,{md:"6",cols:"12"},{default:d(()=>[e(n,{modelValue:l(o).lastName,"onUpdate:modelValue":t[0]||(t[0]=s=>l(o).lastName=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Nom",label:"Nom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(n,{modelValue:l(o).firstName,"onUpdate:modelValue":t[1]||(t[1]=s=>l(o).firstName=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Prenom",label:"Prenom"},null,8,["modelValue","rules"])]),_:1}),e(u,{md:"6",cols:"12"},{default:d(()=>[e(c,{modelValue:l(o).role,"onUpdate:modelValue":t[2]||(t[2]=s=>l(o).role=s),rules:["requiredValidator"in a?a.requiredValidator:l(b)],placeholder:"Role",label:"Role",items:l(P),clearable:"","clear-icon":"tabler-x"},null,8,["modelValue","rules","items"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).email,"onUpdate:modelValue":t[3]||(t[3]=s=>l(o).email=s),rules:["requiredValidator"in a?a.requiredValidator:l(b),"emailValidator"in a?a.emailValidator:l(J)],label:"E-mail",placeholder:"example@gmail.com",type:"email"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).phone,"onUpdate:modelValue":t[4]||(t[4]=s=>l(o).phone=s),rules:["requiredValidator"in a?a.requiredValidator:l(b),"PhoneValidator"in a?a.PhoneValidator:l(Q)],label:"Telephone",placeholder:"0655554747"},null,8,["modelValue","rules"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).store_name,"onUpdate:modelValue":t[5]||(t[5]=s=>l(o).store_name=s),label:"Nom de store",placeholder:"Nom de store"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).address,"onUpdate:modelValue":t[6]||(t[6]=s=>l(o).address=s),label:"Address",placeholder:"Address"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).password,"onUpdate:modelValue":t[7]||(t[7]=s=>l(o).password=s),rules:i.method=="POST"?["requiredValidator"in a?a.requiredValidator:l(b),"passwordValidator"in a?a.passwordValidator:l(ee)]:[],type:l(V)?"text":"password","append-inner-icon":l(V)?"tabler-eye-off":"tabler-eye",label:"Current Password",autocomplete:"on",placeholder:"············","onClick:appendInner":t[8]||(t[8]=s=>V.value=!l(V))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(u,{cols:"12",md:"12"},{default:d(()=>[e(qe,{modelValue:l(o).active,"onUpdate:modelValue":t[9]||(t[9]=s=>l(o).active=s),color:"success","base-color":"error",label:U(l(o).active)},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{cols:"12"},{default:d(()=>[e(D,{title:"Informations de paiement"},{default:d(()=>[e(O,null,{default:d(()=>[e(C,null,{default:d(()=>[e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).bank_name,"onUpdate:modelValue":t[10]||(t[10]=s=>l(o).bank_name=s),label:"Nom de bank",placeholder:"CIH"},null,8,["modelValue"])]),_:1}),e(u,{cols:"12",md:"6"},{default:d(()=>[e(n,{modelValue:l(o).rib,"onUpdate:modelValue":t[11]||(t[11]=s=>l(o).rib=s),label:"RIB",placeholder:"FR3333785451"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(C,null,{default:d(()=>[e(u,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:d(()=>[e(ge,{onClick:S},{default:d(()=>t[12]||(t[12]=[Ce(" Enregistrer ")])),_:1})]),_:1})]),_:1})]),_:1},512)],64)}}};export{Le as _};
