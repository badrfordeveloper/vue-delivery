<script setup>
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const isPasswordVisible = ref(false)
const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
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

const form = ref({
  email: 'admin@gmail.com',
  password: 'admin@gmail.com',
  remember: false,
})



const refVForm = ref()
const errorMessage = ref(false)
const isError = ref(false)
const loadingLogin = ref(false)




const login = async () => {
  try {
    isError.value= false
    loadingLogin.value= true
    $api
      .post('/api/auth/login', {
        email: form.value.email,
        password: form.value.password,
      }).then(async res => { 
          const { accessToken, userData, userAbilityRules } = res.data
          useCookie('userAbilityRules').value = userAbilityRules
          ability.update(userAbilityRules)
          useCookie('userData').value = userData
          useCookie('accessToken').value = accessToken
          isError.value=false
          await nextTick(() => {
            router.replace(route.query.to ? String(route.query.to) : '/')
          })
      })
      .catch(err => { 
        if (err.status === 403) {
          errorMessage.value=err.response.data.message
          isError.value=true
        }
        else if (err.status === 422) {
          errorMessage.value="Email ou mot de passe est incorrect"
          isError.value=true
        }
        console.log('error login')
      }).then(() => { 
        // always executed
        loadingLogin.value= false
       }) 




  
  } catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
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
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-6"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            Login
          </h4>
        </VCardText>



        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>

              <!-- email -->
                <VAlert
                  v-if="isError"
                  :title="errorMessage"
                  type="error"
                />
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Mot de passe"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
                <div class="my-5" />              
                <VBtn
                :loading="loadingLogin"
                  block
                  type="submit"
                >
                  Login
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
