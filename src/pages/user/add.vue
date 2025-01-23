<script setup>
definePage({
  meta: {
    action: 'list',
    subject: 'user',
  },
})
const refForm = ref()
const method = ref('POST')
const userData = ref({
  lastName: '',
  firstName: '',
  email: '',
  active: '',
  phone: '',
  store_name: '',
  ville: '',
  address: '',
  bank_name: '',
  rib: ''
})


const onSubmit = async () => {
  const { valid } = await refForm.value.validate()
  if (valid) {
    let url = "/api/users"
/*     if (method.value == "PUT") {
      url = "/api/users/" + props.rolePermissions.id
    } */
    $api({
      method : method.value,
      url,
      data: userData.value,
    })
    .then(async (response) => {
        if (response.status === 200) {
          toast.success(response.data)
        /*   emit('fetchRoles')
          emit('update:isDialogVisible', false) */
          refForm.value?.reset()
        }
     })
  

  }
}


</script>

<template>
      <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
      <div class="d-flex flex-column justify-center">
        <h4 class="text-h4 font-weight-medium">
          Ajouter Utilisateur
        </h4>
      </div>
    </div>
    <VForm ref="refForm" class="mt-3">

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
                  placeholder="John"
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
                  placeholder="Doe"
                  label="Prenom"
                />
              </VCol>

              <!-- 👉 Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.email"
                  label="E-mail"
                  placeholder="johndoe@gmail.com"
                  type="email"
                />
              </VCol>

              <!-- 👉 Organization -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.store_name"
                  label="Organization"
                  placeholder="Pixinvent"
                />
              </VCol>

              <!-- 👉 Phone -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="userData.phone"
                  label="Phone Number"
                  placeholder="0655554747"
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
                  placeholder="123 Main St, New York, NY 10001"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
              <VSwitch :model-value="userData.active ? true : false" label="active" />
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
                <VBtn  @click="onSubmit">Save changes</VBtn>
                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                >
                  Cancel
                </VBtn>
              </VCol>
  </VRow>
</VForm>
</template>
