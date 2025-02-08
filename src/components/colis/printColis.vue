<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import QrcodeVue from 'qrcode.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isPrintColis: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isPrintColis',
  'update:rolePermissions',
  'fetchItems',
])







const onPrint =  () => {
  window.print()
}

const onReset = () => {
  emit('update:isPrintColis', false)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 400"
    :model-value="props.isPrintColis"

    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn
      class="d-print-none"
      @click="onReset"
    />
    <VRow>
      <VCol
        class="d-print-none"
        cols="12"
        md="12"
      >
        <VBtn
          color="primary"
          class="flex-grow-1"
          @click="onPrint"
        >
          Print
        </VBtn>
      </VCol>
      <VCol
        cols="12"
        md="12"
        class="ticket"
      >
        <VCard class="props.item-preview-wrapper">
          <!-- SECTION Header -->
          <div class="props.item-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded ">
            <!-- 👉 Left Content -->
            <div>
              <div class="d-flex align-center app-logo ">
                <!-- 👉 Logo -->
                <VNodeRenderer :nodes="themeConfig.app.logo" />

                <!-- 👉 Title -->
                <h6 class="app-logo-title">
                  {{ themeConfig.app.title }}
                </h6>
              </div>
            </div>

            <!-- 👉 Right Content -->
            <div class="d-flex align-center ">
              <!--  Code : {{  }} -->
              {{ props.item.destination }}
            </div>
          </div>
          <!-- !SECTION -->

          <VDivider class=" border-solid" />
          <!-- 👉 Payment Details -->
          <VRow class="print-row mb-1">
            <VCol class="text-no-wrap">
              <div class="d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-6">
                <div>
                  <p class="mb-0">
                    Code : {{ props.item.code }}
                  </p><p class="mb-0">
                    Nom : {{ props.item.nom_client }}
                  </p>
                  <p class="mb-0">
                    tel :  {{ props.item.tel_client }}
                  </p>
                </div>
                <div>
                  <p class="mb-0">
                    <QrcodeVue
                      size="70"
                      :value="props.item.code"
                    />
                  </p>
                </div>
              </div>
              <p class="mb-0">
                Adresse : {{ props.item.adresse }}
              </p>
            </VCol>
          </VRow>
          <VDivider class=" border-solid" />
          <!-- 👉 props.item Table -->
          <VTable class="props.item-preview-table border text-high-emphasis overflow-hidden mb-1">
            <thead>
              <tr>
                <th scope="col">
                  Produits
                </th>
                <th scope="col">
                  Montant
                </th>
              </tr>
            </thead>

            <tbody class="text-base">
              <tr>
                <td class="text-no-wrap">
                  {{ props.item.produit }}
                </td>
                <td class="text-no-wrap">
                  {{ props.item.montant }}
                </td>
              </tr>
            </tbody>
          </VTable>
          <VDivider class=" border-solid" />
          <VRow class="align-right">
            <VCol cols="12">
              <p class="mb-0">
                essayage :  {{ props.item.essayage ? 'OUI' : 'NON' }} | ouvrir :  {{ props.item.ouvrir ? 'OUI' : 'NON' }} | echange :    {{ props.item.echange ? 'OUI' : 'NON' }}
              </p>
            </Vcol>
          </VRow>
          <!-- 👉 props.item Table -->

          <VDivider class=" border-solid" />

          <p class="mb-0">
            <span class="text-high-emphasis font-weight-medium me-1">
              Remarque:
            </span>
            <span>Entrepirse de livraison n'est pas responsable sur vos achat</span>
          </p>
        </VCard>
      </VCol>
    </VRow>
  </VDialog>
</template>

<style lang="scss" scoped>
.props.item-preview-table {
  --v-table-header-color: var(--v-theme-surface);

  &.v-table .v-table__wrapper table thead tr th {
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
  }
}

/* Set the ticket width to 10cm and remove margins */
.ticket {
  box-sizing: border-box; /* Include padding and border in the width */
  padding: 10px !important;
  border: 1px solid #000; /* Optional: Add a border for visual clarity */
  margin: 0 !important; /* Remove margin */
  inline-size: 10cm !important; /* Force full width */
}

@media print {
  th,
  td {
    height: 0 !important;
  }

  .v-divider {
    border: 1px solid black !important;
    opacity: 1;
  }

  p {
    color: #000;
    font-size: 14px;
  }

  @page {
    margin: 0;
    size: 100mm 100mm;
  }

  body,
  html {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Set the ticket width to 10cm and remove margins */
  .ticket {
    box-sizing: border-box; /* Include padding and border in the width */
    padding: 10px !important; /* Remove padding */
    border: 1px solid #000; /* Optional: Add a border for visual clarity */
    margin: 0 !important; /* Remove margin */
    inline-size: 10cm !important; /* Force full width */
    page-break-inside: avoid;
  }

  .v-theme--dark {
    --v-theme-surface: 255, 255, 255;
    --v-theme-on-surface: 47, 43, 61;
    --v-theme-on-background: 47, 43, 61;
  }

  body {
    background: none !important;
  }

  .props.item-header-preview,
  .props.item-preview-wrapper {
    padding: 0 !important;
  }

  .product-buy-now {
    display: none;
  }

  .v-navigation-drawer,
  .layout-vertical-nav,
  .app-customizer-toggler,
  .layout-footer,
  .layout-navbar,
  .layout-navbar-and-nav-container {
    display: none;
  }

  .v-card {
    box-shadow: none !important;

    .print-row {
      flex-direction: row !important;
    }
  }

  .layout-content-wrapper {
    padding-inline-start: 0 !important;
  }

  .v-table__wrapper {
    overflow: hidden !important;
  }

  .vue-devtools__anchor {
    display: none;
  }
}
</style>
