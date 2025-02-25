<script setup>


const itemData = ref({
  colis:[]
})
const scanString = ref("")



definePage({
  meta: {
    action: 'scan',
    subject: 'retour',
  },
})

const refForm = ref()


const loadingEntrepot = ref(false)
const alertSuccess = ref([])
const alertError = ref([])
const colisErrone = ref([])
const isAlertErrorsVisible = ref(false)
const isAlertSuccessVisible = ref(false)

const validateSendEntrepot= async () => {
  const { valid } = await refForm.value.validate()
  if (valid) {
    await updateEntrepot()
  }
}


const updateEntrepot = async  => {
  loadingEntrepot.value = true
  isAlertErrorsVisible.value = false
  isAlertErrorsVisible.value = false
  $api({
    method: "POST",
    url: "/api/scannerRetourEntrepot",
    data: {
      scannedColis: scannedColis.value,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        let data = response.data
        console.log(data)
        alertSuccess.value = data.success
        alertError.value = data.errors
        colisErrone.value = data.colisError
        isAlertErrorsVisible.value = true
        isAlertSuccessVisible.value = alertError.value.length == 0
      }
      loadingEntrepot.value = false
    })
    .catch(error => {
      loadingEntrepot.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}

const colis = computed(() => {
  return itemData.value.colis.map(item => item.code)
})

const scannedColis = computed(() => {
  if (!scanString.value) return []
  
  return scanString.value.split('\n').map(line => line.trim()).filter(line => line.length > 0)
})

const duplicatedColis = computed(() => {
  // array is scannedColis
  return scannedColis.value.filter((myColis, index, array) => array.indexOf(myColis) !== index)
})



</script>

<template>
  <VAlert
    v-for="alert,index in alertSuccess"
    :key="index"
    v-model="isAlertSuccessVisible"
    color="success"
    class="ma-1"
  >
    {{ alert }}
  </VAlert>

  <VAlert
    v-for="alert,index in alertError"
    :key="index"
    v-model="isAlertErrorsVisible"
    color="error"
    class="ma-1"
  >
    {{ alert }}
  </VAlert>

  <VForm
    ref="refForm"
    class="mt-3"
  >
    <div>
      <VRow class="d-flex align-center justify-center">
        <VCol cols="12">
          <AppTextarea
            v-model="scanString"
            rows="5"
            row-height="20"
            label="Scanner"
            :rules="[requiredValidator]"
            placeholder="Select pour scanner"
          />
        </VCol>
      </VRow>
    </div>

    <VRow>
      <VCol
        v-if="colisErrone.length>0"
        cols="12"
        md="3"
      >
        <p class="text-error">
          Colis erroné
        </p>
        <VList
          :items="colisErrone"
          class="border border-error border-opacity-75"
        />
        <!--
          -----
          <VList :items="commonColis" /> 
        -->
      </VCol>

      <VCol
        v-if="duplicatedColis.length > 0"
        cols="12"
        md="3"
      >
        <p class="text-error">
          Colis dupliqués
        </p>
        <VList
          :items="duplicatedColis"
          class="border border-error border-opacity-75"
        />
      </VCol>


    </VRow>

    <VRow>
      <!-- 👉 Form Actions -->
      <VCol
        cols="12"
        class="d-flex flex-wrap justify-center gap-4"
      >
        <VBtn
          :loading="loadingEntrepot"
          @click="validateSendEntrepot"
        >
          Envoyer 
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss">
.v-list {
  max-height: 200px;
}
</style>


