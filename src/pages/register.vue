<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const ability = useAbility()
const route = useRoute()
const router = useRouter()




definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})




const userData = ref({
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  phone: '',
  store: '',
  role: null,
  ville: '',
})


const refVForm = ref()
const registerSuccess = ref(false)
const isError = ref(false)
const loadingRegister = ref(false)

const isCurrentPasswordVisible = ref(false)


const register = async () => {
  try {
    isError.value= false
    loadingRegister.value= true
    $api
      .post('/api/auth/register', userData.value).then(async response => { 
        if (response.status === 200) {
          registerSuccess.value=true
        }

      })
      .catch(error => { 
        // Check if there are validation errors
        if (error.response && error.response.status === 422) {
          // Laravel validation errors are typically in the `data.errors` object
          const errors = error.response.data.errors

          // Loop through the errors and show each in a toast
          for (let field in errors) {
            toast.error(`${field}: ${errors[field].join(', ')}`)
          }
        }
        console.log('error register')
      }).then(() => { 
        // always executed
        loadingRegister.value= false
      }) 




  
  } catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      register()
  })
}
</script>

<template>
  <a href="javascript:void(0)">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </a>

  <VRow
    no-gutters
    class="auth-wrapper bg-surface"
  >
    <VCol
      md="8"
      class="d-none d-md-flex"
    >
      <div class="position-relative bg-background w-100 me-0">
        <img
          class="auth-footer-mask flip-in-rtl"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        >
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard
        v-if="registerSuccess"
        flat
        :max-width="600"
        class="mt-12 mt-sm-0 pa-6"
      >
        <div class="text-center mb-3">
          <!-- Success Icon (Using Vuexy's check icon) -->
          <FeatherIcon
            icon="CheckCircleIcon"
            size="64"
            class="text-success"
          />
        </div>
        <div class="text-center mb-2">
          <VIcon
            style="font-size: 60px;"
            icon="tabler-circle-dashed-check"
            color="success"
          />
        </div>
        

        <!-- Title -->
        <h4 class="text-center mb-2">
          Inscription confirmée avec succès !
        </h4>

        <!-- Message -->
        <VCardText class="text-center mb-2">
          Merci pour votre inscription. Notre équipe vous contactera très prochainement pour la suite du processus.
        </VCardText>

        <!-- Back Button -->
         
        <div class=" mt-2 text-center">
          <VBtn
            color="success"
            tag="a"
            href="https://site.dropit.ma/"
          >
            Retour à l'accueil
          </VBtn>
        </div>
      </VCard>
        
      <VCard
        v-else
        flat
        :max-width="600"
        class="mt-12 mt-sm-0 pa-6"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            S'inscrire
          </h4>
        </VCardText>



        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol
                cols="12"
                
                class="app-text-field"
              >
                <VLabel
                  text="Nature de service"
                  class="mb-1 text-body-2 text-wrap "
                />
                <VRadioGroup
                  v-model="userData.role"
                  :rules="[requiredValidator]"
                  inline
                >
                  <VRadio
                    label="Vendeur"
                    value="vendeur"
                    density="compact"
                  />
                  <VRadio
                    label="Livreur"
                    value="livreur"
                    density="compact"
                  />
                </VRadioGroup>
              </VCol>

              <!-- 👉 Organization -->
              <VCol
                v-if="userData.role == 'vendeur'"
                cols="12"
              >
                <AppTextField
                  v-model="userData.store"
                  :rules="[requiredValidator]"
                  label="Nom de store"
                  placeholder="Nom de store"
                />
              </VCol>

              <!-- 👉 First Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="userData.lastName"
                  :rules="[requiredValidator]"
                  placeholder="Nom"
                  label="Votre Nom"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol cols="12">
                <AppTextField
                  v-model="userData.firstName"
                  :rules="[requiredValidator]"
                  placeholder="Prenom"
                  label="Votre Prenom"
                />
              </VCol>


              <!-- 👉 Email -->
              <VCol cols="12">
                <AppTextField
                  v-model="userData.email"
                  :rules="[requiredValidator,emailValidator]"
                  label="E-mail"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="userData.password"
                  :rules=" [requiredValidator,passwordValidator] "
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  label="Mot de passe"
                  autocomplete="on"
                  placeholder="············"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>

              <!-- 👉 Phone -->
              <VCol cols="12">
                <AppTextField
                  v-model="userData.phone"
                  :rules="[requiredValidator,PhoneValidator]"
                  label="Telephone"
                  placeholder="0655554747"
                />
              </VCol>
              <!-- 👉 ville -->
              <VCol cols="12">
                <AppTextField
                  v-model="userData.ville"
                  :rules="[requiredValidator]"
                  label="Ville"
                  placeholder="Ville"
                />
              </VCol>    
     
              
              
              <!-- password -->
              <VCol cols="12">
                <div class="my-5" />              
                <VBtn
                  :loading="loadingRegister"
                  block
                  type="submit"
                >
                  S'inscrire
                </VBtn>
              </VCol>



              <VCol
                cols="12"
                class="d-flex align-center"
              >
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol
                cols="12"
                class="text-center"
              >
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
