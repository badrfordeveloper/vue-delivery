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


const refForm = ref()
const selectedPricing = ref()
const zones = ref([])
const zoneHoraires = ref([])
const loadingSubmit = ref(false)

zones.value = await $api('/api/zones').then(response => response.data.items)

let defaultItem = {
  nom_client: '',
  tel_client: '',
  zone_id: '',
  pricing_id: '',
  horaire: "",
  poids: "1kg_6kg",
  frais_livraison: '',
  adresse: '',
  produit: "",
  montant: '',
  commentaire_vendeur: '',
  essayage: 1,
  ouvrir: 1,
  echange: 0,
}


const itemData = ref(structuredClone(toRaw(defaultItem)))

watch(
  () => props.item, 
  newVal => {
    if(props.method == "PUT"){
      itemData.value = { ...newVal } 
    }
  }, { immediate: true }, // Trigger the watcher immediately
)

watch(() => itemData.value.zone_id, newId => {

  const selectedZone = zones.value.find(t => t.id === newId)

  zoneHoraires.value = selectedZone ? selectedZone.horaires : []

  if(selectedZone && itemData.value.poids){
    
    selectedPricing.value = selectedZone.pricings.find(t => t.poids === itemData.value.poids)

    itemData.value.frais_livraison = selectedPricing.value ? selectedPricing.value.frais_livraison+' DH à '+selectedZone.delai_livraison :''
    itemData.value.pricing_id = selectedPricing.value ? selectedPricing.value.id: null

  }

}, { immediate: true })

watch(() => itemData.value.poids, newPoid => {

  if(itemData.value.zone_id){
  
    const selectedZone = zones.value.find(t => t.id === itemData.value.zone_id)

    selectedPricing.value = selectedZone.pricings.find(t => t.poids === newPoid)

    itemData.value.frais_livraison = selectedPricing.value ? selectedPricing.value.frais_livraison+' DH à '+selectedZone.delai_livraison :''
    itemData.value.pricing_id = selectedPricing.value ? selectedPricing.value.id: null

  }

}, { immediate: true })

const onSubmit = async () => {

  const { valid } = await refForm.value.validate()
  if (valid) {
    let url = "/api/colis"

    if (props.method == "PUT") {
      url = "/api/colis/" + props.identity
    }
    loadingSubmit.value = true
    $api({
      method: props.method,
      url,
      data: itemData.value,
    })
      .then(async response => {
        if (response.status === 200) {
          toast.success(response.data)

          if (props.method == "POST") {
            refForm.value?.reset()
            itemData.value = structuredClone(toRaw(defaultItem))

          }else{
            router.push({ name: 'colis-list' })
          }
         
        }
        loadingSubmit.value = false
      }).catch(error => {
        loadingSubmit.value = false

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
        {{ props.method == "POST" ? "Ajouter Colis":"Modifier Colis" }} 
      </h4>
    </div>
  </div>
  <VForm
    ref="refForm"
    class="mt-3"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VCol
          cols="12"
          class="pa-0"
        >
          <VCard title="Informations du client">
            <VCardText>
              <!-- 👉 Form -->
              <VRow>
                <VCol
                  md="6"
                  cols="12"
                >
                  <AppTextField
                    v-model="itemData.nom_client"
                    :rules="[requiredValidator]"
                    placeholder="Nom"
                    label="Nom"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="itemData.tel_client"
                    :rules="[requiredValidator,PhoneValidator]"
                    label="Telephone"
                    size="10"
                    placeholder="0655554747"
                  />
                </VCol>
                <VCol cols="12">
                  <AppTextField
                    v-model="itemData.adresse"
                    prepend-inner-icon="tabler-map-pin"
                    :rules="[requiredValidator]"
                    label="Adresse"
                    placeholder="Adresse"
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>

        <VCol
          cols="12"
          class="px-0"
        >
          <VCard title="Informations d'adresse">
            <VCardText>
              <VRow>
                <VCol
                  md="6"
                  cols="12"
                >
                  <AppAutocomplete
                    v-model="itemData.zone_id"
                    :rules="[requiredValidator]"
                    label="Destination"
                    :items="zones"
                    item-title="zone"
                    item-value="id"
                    placeholder="Select State"
                    autocomplete="off"
                  />
                </VCol>

              


                <VCol
                  cols="12"
                  class="app-text-field"
                >
                  <VLabel
                    text="Les horaires auxquelles il sera disponible"
                    class="mb-1 text-body-2 text-wrap "
                  />
                  <VRadioGroup
                    v-model="itemData.horaire"
                    :rules="[requiredValidator]"
                    inline
                  >
                    <VRadio
                      v-for="horaire in zoneHoraires"
                      :key="horaire"
                      :label="getHorairesLabel(horaire)"
                      :value="horaire"
                      density="compact"
                    />
                  </VRadioGroup>
                </VCol>

                <VCol
                  cols="12"
                  class="app-text-field"
                >
                  <VLabel
                    text="Poids"
                    class="mb-1 text-body-2 text-wrap "
                  />
                  <VRadioGroup
                    v-model="itemData.poids"
                    :rules="[requiredValidator]"
                    inline
                  >
                    <VRadio
                      v-for="poid in listPoids"
                      :key="poid.value"
                      :label="poid.label"
                      :value="poid.value"
                      density="compact"
                    />
                  </VRadioGroup>
                </VCol>
              
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="itemData.frais_livraison"
                    disabled
                    label="Frais de livraison"
                    placeholder=""
                  />
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <!-- 👉 Delete Account -->
        <VCard title="Informations des produits">
          <VCardText>
            <VRow>
              <VCol cols="12">
                <AppTextField
                  v-model="itemData.produit"
                  :rules="[requiredValidator]"
                  label="Produits"
                  placeholder="Produits"
                />
              </VCol>     
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="itemData.montant"
                  :rules="[requiredValidator]"
                  type="number"
                  label="Montant Total"
                  placeholder="Montant Total"
                />
              </VCol>    
             
              <VCol
                cols="12"
                md="6"
                class="app-text-field"
              >
                <VLabel
                  text="Essayage"
                  class="mb-1 text-body-2 text-wrap "
                />
                <VRadioGroup
                  v-model="itemData.essayage"
                  :rules="[requiredValidator]"
                  inline
                >
                  <VRadio
                    label="Non"
                    :value="0"
                    density="compact"
                  />
                  <VRadio
                    label="Oui"
                    :value="1"
                    density="compact"
                  />
                </VRadioGroup>
              </VCol>
              <VCol
                cols="12"
                md="6"
                class="app-text-field"
              >
                <VLabel
                  text="Ouvrir"
                  class="mb-1 text-body-2 text-wrap "
                />
                <VRadioGroup
                  v-model="itemData.ouvrir"
                  :rules="[requiredValidator]"
                  inline
                >
                  <VRadio
                    label="Non"
                    :value="0"
                    density="compact"
                  />
                  <VRadio
                    label="Oui"
                    :value="1"
                    density="compact"
                  />
                </VRadioGroup>
              </VCol>
              <VCol
                cols="12"
                md="6"
                class="app-text-field"
              >
                <VLabel
                  text="Echange"
                  class="mb-1 text-body-2 text-wrap "
                />
                <VRadioGroup
                  v-model="itemData.echange"
                  :rules="[requiredValidator]"
                  inline
                >
                  <VRadio
                    label="Non"
                    :value="0"
                    density="compact"
                  />
                  <VRadio
                    label="Oui"
                    :value="1"
                    density="compact"
                  />
                </VRadioGroup>
              </VCol>
              <VCol cols="12">
                <AppTextarea
                  v-model="itemData.commentaire_vendeur"
                  label="Commentaire"
                  placeholder="Commentaire"
                  rows="2"
                  row-height="20"
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
        <VBtn
          :loading="loadingSubmit"
          @click="onSubmit"
        >
          Enregistrer 
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
