
<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import QrcodeVue from 'qrcode.vue'

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  isPrintGroupColis: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isPrintGroupColis',
])

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

/* nextTick(() => {
    window.print();
  }); */

setTimeout(() => {
  window.print()
}, 500)

window.onafterprint = function () {
  emit('update:isPrintGroupColis', false)
}
</script>

<template>
  <div v-if="props.isPrintGroupColis">
    <!--   <button onclick="window.print()"  class="d-print-none">Print</button> -->

    <div id="print-area">
      <!-- Page 1 -->
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="print-content"
      >
        <VCard class="props.item-preview-wrapper">
          <!-- SECTION Header -->
          <div />
          <div class="item-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded ">
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
            <div class="d-flex align-center destination">
              <!--  Code : {{  }} -->
              {{ item.destination }}
            </div>
          </div>
          <!-- !SECTION -->

          <VDivider class=" border-solid" />
          <!-- 👉 Payment Details -->
          <VRow class="print-row little-margin ">
            <VCol class="text">
              <div class="d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-6">
                <div>
                  <p class="mb-0">
                    Code : {{ item.code }}
                  </p><p class="mb-0">
                    Nom : {{ item.nom_client }}
                  </p>
                  <p class="mb-0">
                    tel :  {{ item.tel_client }}
                  </p>
                </div>
                <div>
                  <p class="mb-0">
                    <QrcodeVue
                      size="70"
                      :value="item.code"
                    />
                  </p>
                </div>
              </div>
              <p class="mb-0">
                Adresse : {{ item.adresse }}
              </p>
            </VCol>
          </VRow>
          <VDivider class=" border-solid" />
          <!-- 👉 item Table -->


          <VRow class="align-right little-margin">
            <VCol cols="12">
              <p class="mb-0">
                Produits :  {{ item.produit }}
              </p>
              <p class="mb-0">
                Montant :  {{ item.montant }}
              </p>
            </Vcol>
          </VRow>

          <VDivider class=" border-solid" />
          <VRow class="align-right little-margin">
            <VCol cols="12">
              <p class="mb-0">
                Essayage :  {{ item.essayage ? 'OUI' : 'NON' }} | Ouvrir :  {{ item.ouvrir ? 'OUI' : 'NON' }} | Echange :    {{ item.echange ? 'OUI' : 'NON' }}
              </p>
            </Vcol>
          </VRow>
          <!-- 👉 item Table -->

          <VDivider class=" border-solid" />

          <p class="mb-0">
            <span>
              Remarque:
            </span>
            <span>Entrepirse de livraison n'est pas responsable sur vos achat</span>
          </p>
        </VCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.print-content {
  display: none;
}

.v-table{

}

@media print {
  .little-margin {
    margin: 0;
  }

  th,
  td {
    height: 0 !important;
  }

  @page {
    margin: 0;
    size: 100mm 100mm; /* Each page is exactly 100mm */
  }

  .v-divider {
    border: 1px solid black !important;
    opacity: 1;
  }

  p {
    color: #000;
    font-size: 14px;
  }

  .v-card {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  h6 {
    color: #000;
  }

  .destination {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }

  /* Ensure print content fits exactly into a page */
  .print-content {
    display: block;
    overflow: hidden;
    width: 100mm;
    height: 100mm; /* Fixes size */
    page-break-before: always; /* Ensures each section starts on a new page */
  }

  /* Hide everything except the print content */
  body * {
    visibility: hidden;
  }

  #print-area,
  #print-area * {
    visibility: visible;
  }

  #print-area {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
