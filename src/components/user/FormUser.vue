<script setup>
const props = defineProps({

  method: {
    type: String,
    required: true,
  }, 
  user: {
    type: Object,
    required: false,

  },
  identity: {
    type: String,
    required: false,
  },
})

const router = useRouter()

definePage({
  meta: {
    subject: 'user',
    action: 'list',
  },
})

const refForm = ref()

const userData = ref({
  lastName: '',
  firstName: '',
  cin: '',
  email: '',
  password: '',
  active: 0,
  phone: '',
  store: '',
  role: null,
  ville: '',
  address: '',
  bank_name: '',
  rib: '',
})

watch(
  () => props.user, 
  newVal => {
    if(props.method == "PUT"){
      userData.value = { ...newVal } 
      userData.value.active = userData.value.active==1
    }
      
  }, { immediate: true }, // Trigger the watcher immediately
)

const roles = await $api('/api/rolesList').then(response => response.data)


const onSubmit = async () => {
  console.log(userData.value)

  const { valid } = await refForm.value.validate()
  if (valid) {
    let url = "/api/users"

    if (props.method == "PUT") {
      url = "/api/users/" + props.identity
    }
    $api({
      method: props.method,
      url,
      data: userData.value,
    })
      .then(async response => {
        if (response.status === 200) {
          toast.success(response.data)

          /*   emit('fetchRoles')
          emit('update:isDialogVisible', false) */
          if (props.method == "POST") {
            refForm.value?.reset()
          }else{
            router.push({ name: 'user-list' })
          }
           
        }
      }).catch(error => {
        // Check if there are validation errors
        if (error.response && error.response.status === 422) {
          // Laravel validation errors are typically in the `data.errors` object
          const errors = error.response.data.errors

          // Loop through the errors and show each in a toast
          for (let field in errors) {
            toast.error(`${field}: ${errors[field].join(', ')}`)
          }
        }
      })
  

  }
}

const resolveStatus = statusMsg => {
  if (statusMsg === 1 || statusMsg === true)
    return "Active"
  if (statusMsg === 0 || statusMsg === false)
    return "Inactive"
}

const isCurrentPasswordVisible = ref(false)
</script>

<template>
  <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
    <div class="d-flex flex-column justify-center">
      <h4 class="text-h4 font-weight-medium">
        {{ props.method == "POST" ? "Ajouter Utilisateur":"Modifier Utilisateur" }} 
      </h4>
    </div>
  </div>
  <VForm
    ref="refForm"
    class="mt-3"
  >
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardText class="pt-2">
            <!-- 👉 Form -->
            <VRow>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="userData.lastName"
                  :rules="[requiredValidator]"
                  placeholder="Nom"
                  label="Nom"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="userData.firstName"
                  :rules="[requiredValidator]"
                  placeholder="Prenom"
                  label="Prenom"
                />
              </VCol>
              <!-- 👉 CIN -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="userData.cin"
                  :rules="[requiredValidator]"
                  placeholder="N° CIN"
                  label="N° CIN"
                />
              </VCol>

              <!-- roles -->
              <VCol
                md="6"
                cols="12"
              >
                <AppSelect
                  v-model="userData.role"
                  :rules="[requiredValidator]"
                  placeholder="Role"
                  label="Role"
                  :items="roles"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
              

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.email"
                  :rules="[requiredValidator,emailValidator]"
                  label="E-mail"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </VCol>

              <!-- 👉 Phone -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.phone"
                  :rules="[requiredValidator,PhoneValidator]"
                  label="Telephone"
                  placeholder="0655554747"
                />
              </VCol>


              <!-- 👉 Organization -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.store"
                  :rules="[requiredValidator]"
                  label="Nom de store"
                  placeholder="Nom de store"
                />
              </VCol>
              <!-- 👉 ville -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.ville"
                  label="Ville"
                  placeholder="Ville"
                />
              </VCol>    
              <!-- 👉 Address -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.address"
                  label="Address"
                  placeholder="Address"
                />
              </VCol>        
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.password"
                  :rules="props.method == 'POST' ? [requiredValidator,passwordValidator] : [] "
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  label="Current Password"
                  autocomplete="on"
                  placeholder="············"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
              
              <VCol
                cols="12"
                md="12"
              >
                <VSwitch
                  v-model="userData.active"
                  color="success"
                  base-color="error"
                  :label="resolveStatus(userData.active)"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <!-- 👉 Delete Account -->
        <VCard title="Informations de paiement">
          <VCardText>
            <VRow>
              <!-- 👉 Address -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.bank_name"
                  label="Nom de bank"
                  placeholder="CIH"
                />
              </VCol>
              <!-- 👉 Address -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.rib"
                  label="RIB"
                  placeholder="FR3333785451"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow>
      <!-- 👉 Form Actions -->
      <VCol
        cols="12"
        class="d-flex flex-wrap justify-center gap-4"
      >
        <VBtn @click="onSubmit">
          Enregistrer 
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
