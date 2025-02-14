<script setup>
import Histories from '@/components/global/histories.vue'

const props = defineProps({
  item: {
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
  adresse: '',
  ramasseur: '',
  vendeur: '',
  nombre_colis: '',
  colis: [],
  histories: [],
}


const itemData = ref(structuredClone(toRaw(defaultItem)))

watch(
  () => props.item, 
  newVal => {

    itemData.value = { ...newVal } 
  }, { immediate: true }, // Trigger the watcher immediately
)

const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  itemData.value = structuredClone(toRaw(defaultItem))
}


const currentTab = ref('Actions')

const tabsData = [
  'Actions',
  'Historique',
]
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
    <VCard title="Billing Address">
      <VCardText>
        <VRow>
          <VCol
            cols="12"
            lg="6"
          >
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
                    Ramasseur :
                  </h6>
                </td>
                <td>
                  <p class="text-body-1 mb-2">
                    {{ itemData.ramasseur }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 class="text-h6 text-no-wrap mb-2">
                    Destination :
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
            </VTable>
          </VCol>

          <VCol
            cols="12"
            lg="6"
          >
            <VTable class="billing-address-table">
              <tr>
                <td>
                  <h6 class="text-h6 text-no-wrap mb-2">
                    Vendeur:
                  </h6>
                </td>
                <td>
                  <p class="text-body-1 mb-2">
                    {{ itemData.vendeur }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 class="text-h6 text-no-wrap mb-2">
                    Colis:
                  </h6>
                </td>
                <td>
                  <p class="text-body-1 mb-2">
                    {{ itemData.nombre_colis }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 class="text-h6 text-no-wrap mb-2">
                    Facturation:
                  </h6>
                </td>
                <td>
                  <p class="text-body-1 mb-2">
                    xxx
                  </p>
                </td>
              </tr>
            </VTable>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard>
      <VTabs
        v-model="currentTab"
        grow
        class="disable-tab-transition"
      >
        <VTab
          v-for="(tab, index) in tabsData"
          :key="index"
        >
          {{ tab }}
        </VTab>
      </VTabs>


      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <Actions
              :id="itemData.id"
              :current-statut="itemData.statut"
            />
          </VWindowItem>

          <VWindowItem>
            <Histories :histories="itemData.histories" />
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </VDialog>
</template>


