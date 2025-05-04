<script setup>
import { listHoraires } from '@/utils/constants'

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
    subject: 'zone',
    action: 'list',
  },
})

const refForm = ref()

const itemData = ref({
  ville_id: 1,
  zone: '',
  prefix: 'ca',
  delai_livraison: '',
  horaires: [],
  pricings: [
    {
      poids: "1kg_6kg",
      frais_livraison: "",
      frais_livreur: "",
    }, 
    {
      poids: "7kg_11kg",
      frais_livraison: "",
      frais_livreur: "",
    }, 
    {
      poids: "12kg_20kg",
      frais_livraison: "",
      frais_livreur: "",
    },
  ],
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
    let url = "/api/zones"

    if (props.method == "PUT") {
      url = "/api/zones/" + props.identity
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
          /* if (props.method == "POST"){
            refForm.value?.reset()
          }else{ */
          router.push({ name: 'zone-list' })

          /*  } */
           
           
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
        {{ props.method == "POST" ? "Ajouter zone":"Modifier zone" }} 
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
              <VCol cols="12">
                Ville : casablanca
              </VCol>
              <!-- 👉 First Name -->
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.zone"
                  :rules="[requiredValidator]"
                  placeholder="Zone"
                  label="Zone"
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
              
              <VCol
                md="6"
                cols="12"
              >
                <VLabel>Horaires</VLabel>
                <div class="demo-space-x">
                  <VCheckbox
                    v-for="horaire in listHoraires"
                    :key="horaire.value"
                    v-model="itemData.horaires"
                    :value="horaire.value"
                    :label="horaire.label"
                  />
                </div>
              </VCol>
            </VRow>

            <VTable class="text-no-wrap">
              <thead>
                <tr>
                  <th>
                    Poids
                  </th>
                  <th>
                    Frais livraison
                  </th>
                  <th>
                    Frais livreur
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="pricing in itemData.pricings"
                  :key="pricing.poids"
                >
                  <td>
                    {{ getPoidsLabel(pricing.poids) }}
                  </td>
                  <td>
                    <AppTextField
                      v-model="pricing.frais_livraison"
                      :rules="[requiredValidator]"
                    />
                  </td>
                  <td>
                    <AppTextField
                      v-model="pricing.frais_livreur"
                      :rules="[requiredValidator]"
                    />
                  </td>
                </tr>
              </tbody>
            </VTable>
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
