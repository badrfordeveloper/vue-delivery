<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  id: {
    type: Object,
    required: false,

  },
  isShowItem: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
])


let defaultItem = {
  id: '',
  nom_vendeur: '',
  tel_vendeur: '',
  tarif_id: '',
  commentaire_vendeur: '',
  code_ramassage: '',
  frais_livreur: '',
  adresse: '',
  livreur: '',
  livreur_id: '',
  tel_livreur: '',
  statut: '',
  vendeur: '',
  colisHistories: [],
}

const livreurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))

const loadingItem = ref(false)

const getItemData = async id => {
  loadingItem.value = true
  await $api("/api/colis/"+id)
    .then(async response => {
      if (response.status === 200) {
        itemData.value = response.data
      }

      loadingItem.value = false
    })
    .catch(error => {
      loadingItem.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}

watch(
  () => props.id, 
  newVal => {
    getItemData(newVal)
  }, { immediate: true }, // Trigger the watcher immediately
)





const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  itemData.value = structuredClone(toRaw(defaultItem))
}

const isActionGestionnaire = can('gestionnaire', 'action')





const currentTab = ref('Actions')

const tabsData = [
  "tabler-adjustments-share",
  "tabler-logs",
]


const showParams = ref(false)
const loadingUpdate = ref(false)

const parametrerColis = async () => {
  loadingUpdate.value = true
  await $api({
    method: "POST",
    url: "/api/parametrerColis",
    data: {
      id: itemData.value.id,
      livreur_id: itemData.value.livreur_id,
      frais_livreur: itemData.value.frais_livreur,
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        getItemData(itemData.value.id)
      }
      loadingUpdate.value = false
    })
    .catch(error => {
      loadingUpdate.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
   
    :model-value="props.isShowItem"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />


    <!-- 👉 Billing Address -->
    <AppCardActions
      title="Details Colis"
      style="overflow: scroll;max-height: 90vh;"
      :loading="loadingItem"
      no-actions
    >
      <VCard>
        <VCardText v-show="!showParams">
          <div
            v-if="isActionGestionnaire"
            class="text-end position-absolute right-0 parms-btn"
          >
            <VBtn
              icon
              class="rounded-0"
              @click="showParams = true"
            >
              <VIcon
                size="22"
                icon="tabler-settings"
              />
            </VBtn>
          </div>
          
          <VRow>
            <VCol
              cols="12"
              lg="6"
            >
              <VCard title="Informations colis">
                <VCardText>
                  <VTable class="billing-address-table">
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Code : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.code }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Livreur : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.livreur }} 
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Tel Livreur : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.tel_livreur }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Ramassage : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.code_ramassage }} 
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Statut:
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          <VChip
                            v-bind="statutInfos(itemData.statut)"
                            density="default"
                            label
                            size="small"
                          />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Prix : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.montant }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Produit : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.produit }}
                        </p>
                      </td>
                    </tr> 
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Essayage : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.essayage ? "OUI" : "NON" }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Ouvrir : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.ouvrir ? "OUI" : "NON" }}
                        </p>
                      </td>
                    </tr> 
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Echange : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.echange ? "OUI" : "NON" }}
                        </p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Commentaire : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.commentaire_vendeur }} 
                        </p>
                      </td>
                    </tr>
                  </VTable>
                </VCardText>
              </VCard>
            </VCol>

            <VCol
              cols="12"
              lg="6"
            >
              <VCard title="Informations client">
                <VCardText>
                  <VTable class="billing-address-table">
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Nom de client : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.nom_client }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Tel de client : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.tel_client }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Distination : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.destination }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Adresse : 
                        </h6>
                      </td>
                      <td>
                        <p class="text-body-1 mb-2">
                          {{ itemData.adresse }}
                        </p>
                      </td>
                    </tr>
                  </VTable>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>

          <VTabs
            v-model="currentTab"
            grow
            class="disable-tab-transition"
            stacked
          >
            <VTab
              v-for="(tab, index) in tabsData"
              :key="index"
            >
              <VIcon
                size="40"
                :icon="tab"
              />
            </VTab>
          </VTabs>
          <VWindow
            v-model="currentTab"
            class="mt-3"
          >
            <VWindowItem>
              <ActionsColis
                :id="itemData.id"
                :current-statut="itemData.statut"
                @get-item-data="getItemData(itemData.id)"
              />
            </VWindowItem>

            <VWindowItem>
              <Histories :histories="itemData.colisHistories" />
            </VWindowItem>
          </VWindow>
        </VCardText>
        <VCardText
          v-show="showParams"
          v-if="isActionGestionnaire"
        >
          <VRow>  
            <VCol
              md="6"
              cols="12"
            >
              <AppSelect
                v-model="itemData.livreur_id"
                placeholder="Livreurs"
                label="Livreurs"
                :items="livreurs"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                v-model="itemData.frais_livreur"
                :rules="[requiredValidator]"
                label="Frais de livreur"
                type="number"
                placeholder="Frais de livreur"
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
                color="secondary"
                @click="showParams = false"
              >
                retour 
              </VBtn>
              <VBtn
                :loading="loadingUpdate"
                @click="parametrerColis"
              >
                Envoyer 
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </appcardactions>
  </VDialog>
</template>

<style scoped>
.parms-btn {
  z-index: 2;
}
</style>


