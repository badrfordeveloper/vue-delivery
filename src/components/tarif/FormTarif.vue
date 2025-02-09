<script setup>
const props = defineProps({

  method: {
    type: String,
    required: true,
  }, 
  item: {
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
    subject: 'tarif',
    action: 'list',
  },
})

const refForm = ref()

const itemData = ref({
  destination: '',
  tarif: '',
  delai_livraison: '',
  prefix: '',
})

watch(
  () => props.item, 
  newVal => {
    if(props.method == "PUT"){
      itemData.value = { ...newVal } 
    }
  }, { immediate: true }, // Trigger the watcher immediately
)



const onSubmit = async () => {
  console.log(itemData.value)

  const { valid } = await refForm.value.validate()
  if (valid) {
    let url = "/api/tarifs"

    if (props.method == "PUT") {
      url = "/api/tarifs/" + props.identity
    }
    $api({
      method: props.method,
      url,
      data: itemData.value,
    })
      .then(async response => {
        if (response.status === 200) {
          toast.success(response.data)

          /*   emit('fetchRoles')
          emit('update:isDialogVisible', false) */
          if (props.method == "POST"){
            refForm.value?.reset()
          }else{
            router.push({ name: 'tarif-list' })
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
</script>

<template>
  <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
    <div class="d-flex flex-column justify-center">
      <h4 class="text-h4 font-weight-medium">
        {{ props.method == "POST" ? "Ajouter Tarif":"Modifier Tarif" }} 
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
                  v-model="itemData.destination"
                  :rules="[requiredValidator]"
                  placeholder="Destination"
                  label="Destination"
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.tarif"
                  :rules="[requiredValidator]"
                  placeholder="tarif"
                  label="tarif"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.prefix"
                  :rules="[requiredValidator]"
                  placeholder="ex : CAZN"
                  label="Prefix"
                />
              </VCol>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.delai_livraison"
                  :rules="[requiredValidator]"
                  placeholder="ex : 24h"
                  label="délai de livraison"
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
