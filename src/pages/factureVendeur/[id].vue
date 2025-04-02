<script setup>
import { can } from '@layouts/plugins/casl'
import { format, parseISO } from 'date-fns'

const props = defineProps({
  id: {
    type: Object,
    required: false,

  },

})

const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
])

definePage({
  meta: {
    action: 'show',
    subject: 'factureVendeur',
  },
})

const route = useRoute()
let defaultItem = {
  id: '',
  nom_vendeur: '',
  tel_vendeur: '',
  tarif_id: '',
  commentaire_vendeur: '',
  code_ramassage: '',
  frais_vendeur: '',
  adresse: '',
  vendeur: '',
  vendeur_id: '',
  tel_vendeur: '',
  statut: '',
  vendeur: '',
  created_at: '',
  colisHistories: [],
}

const vendeurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))

const loadingItem = ref(false)

const getItemData = async () => {
  loadingItem.value = true
  await $api("/api/factureVendeur/"+route.params.id)
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

getItemData()







const isActionGestionnaire = can('gestionnaire', 'action')





const currentTab = ref('Actions')
const currentTabTABLE = ref('COLIS')

const tabsData = [
  "tabler-adjustments-share",
  "tabler-logs",
]

const resolveDate= oldDate => {
  if(oldDate == "")
    return oldDate
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-dd') // Format the date
}

const printFacture= () => {
  window.print()
}

const loadingUpdate = ref(false)



const headersColis = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_livraison', sortable: false },
  { title: 'Montant', key: 'montant', sortable: false },
]

const headersRamassages = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_ramasseur', sortable: false },
]

const headersRetours = [
  { title: 'Code', key: 'code', sortable: false  },
  { title: 'Statut', key: 'statut', sortable: false },
  { title: 'frais', key: 'frais_ramasseur', sortable: false },
]
</script>

<template>
  <AppCardActions
   
    :loading="loadingItem"
    no-actions
  >
    <VRow class="row-print">
      <VCol
        cols="12"
        lg="2"
        class="d-print-none text-center"
      >
        <VBtn
          color="info"
          width="150px"
          @click="printFacture"
        >
          Print
        </VBtn>
      </VCol>
      <VCol
        cols="12"
        lg="12"
        class="col-print"
      >
        <VCard>
          <VCardText class="print-area">
            <VRow>
              <VCol cols="12">
                <VCard title="Informations Facture">
                  <VCardText>
                    <VRow>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Code : <span class="text-body-1 mb-2">
                            {{ itemData.code }}
                          </span>
                        </h6>
                      </VCol>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Vendeur : <span class="text-body-1 mb-2">
                            {{ itemData.vendeur }} 
                          </span>
                        </h6>
                      </VCol>
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Tel Vendeur  : <span class="text-body-1 mb-2">
                            {{ itemData.tel_vendeur }}
                          </span>
                        </h6>
                      </VCol> 
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Statut : <span class="text-body-1 mb-2">
                            <VChip
                              v-bind="statutInfos(itemData.statut)"
                              density="default"
                              label
                              size="small"
                            />
                          </span>
                        </h6>
                      </VCol> 
                      <VCol
                        cols="12"
                        lg="4"
                      >
                        <h6 class="text-h6 text-no-wrap mb-2">
                          Date : <span class="text-body-1 mb-2">
                            {{ resolveDate(itemData.created_at ) }}
                          </span>
                        </h6>
                      </VCol>
                    </VRow>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
            <VRow>
              <VCol
                cols="12"
                lg="6"
              >
                <VCard title="Nombres">
                  <VCardText>
                    <VTable class="billing-address-table">
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre Total : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_total }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis livrés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_livre }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis livrés partiellement : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_livre_partiellement }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis refusés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_refuse }}
                          </p>
                        </td>
                      </tr> 
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des colis annulés : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_annule }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des ramassages : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_ramassage }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Nombre des retours :
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.nombre_retour }}
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
                <VCard title="Montants">
                  <VCardText>
                    <VTable class="billing-address-table">
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Mantant facturé : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.montant_facture }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Mantant encaissé : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.montant_encaisse }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais Total: 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_total }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais des colis : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_colis }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais de ramassage : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_ramassage }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 class="text-h6 text-no-wrap mb-2">
                            Frais de retour : 
                          </h6>
                        </td>
                        <td>
                          <p class="text-body-1 mb-2">
                            {{ itemData.frais_retour }}
                          </p>
                        </td>
                      </tr>
                    </VTable>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>
          <!-- actions and history -->
          <VCardText class="d-print-none">
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
                <ActionsVendeurFacture
                  :id="itemData.id"
                  :current-statut="itemData.statut"
                  @get-item-data="getItemData(itemData.id)"
                />
              </VWindowItem>

              <VWindowItem>
                <Histories :histories="itemData.histories" />
              </VWindowItem>
            </VWindow>
          </VCardText>
          <!-- TABLES COLIS RAMMASAGES RETOURS  -->
          <VCardText class="d-print-none">
            <VTabs
              v-model="currentTabTABLE"
              grow
              class="disable-tab-transition"
              stacked
            >
              <VTab>
                Colis
              </VTab>
              <VTab>
                ramassages
              </VTab>
              <VTab>
                retours
              </VTab>
            </VTabs>
            <VWindow
              v-model="currentTabTABLE"
              disabled
              class="mt-3"
            >
              <VWindowItem>
                <VDataTable
                  :headers="headersColis"
                  :items="itemData.colis_vendeur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                    <span v-if="item.statut_retour"> -
                      <VChip
                        v-bind="statutInfos(item.statut_retour)"
                        density="default"
                        label
                        size="small"
                      />
                    </span>
                  </template>
                  <template #item.frais_livraison="{ item }">
                    <span v-if="['REFUSE','ANNULE'].includes(item.statut)">
                      0
                    </span>
                    <span v-else>
                      {{ item.frais_livraison }}
                    </span>
                  </template>
                </VDataTable>
              </VWindowItem>

              <VWindowItem>
                <VDataTable
                  :headers="headersRamassages"
                  :items="itemData.ramassages_vendeur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                  </template>
                  <template #item.frais_ramasseur="">
                    0
                  </template>
                </VDataTable>
              </VWindowItem> 
              <VWindowItem>
                <VDataTable
                  :headers="headersRetours"
                  :items="itemData.retours_vendeur"
                  :items-per-page="10"
                >
                  <template #item.statut="{ item }">
                    <VChip
                      v-bind="statutInfos(item.statut)"
                      density="default"
                      label
                      size="small"
                    />
                  </template>
                  <template #item.frais_ramasseur="">
                    0
                  </template>
                </VDataTable>
              </VWindowItem>
            </VWindow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </appcardactions>
</template>

<style>
.row-print {
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .print-area {
    padding: 0;
  }

  .col-print {
    width: 100%;
    padding: 0;
  }

  .row-print {
    width: auto;
  }
}

@media print {
  .row-print {
    display: block;
  }

  .col-print {
    max-width: 100%;
  }

  .v-col-12 {
    padding: 6px;
  }

  @page {
    margin: 0;
    size: a4;

    /* Each page is exactly 100mm */
  }

  body * {
    visibility: hidden;
  }

  /* Ensure print content fits exactly into a page */
  .print-content {
    display: block;
    overflow: hidden;
    width: 100mm;
    height: 100mm; /* Fixes size */
    page-break-before: always; /* Ensures each section starts on a new page */
  }

  .print-area * {
    visibility: visible;
  }

  .layout-page-content {
    padding: 0;
  }

  .v-card-item {
    padding: 0;
  }

  .v-card-content .v-card-item {
    padding: 24px;
  }
}
</style>


