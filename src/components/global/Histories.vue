<script setup>
import { statutInfos } from '@/composables/statutInfos'
import { format, parseISO } from 'date-fns'

const props = defineProps({
  histories: {
    type: Object,
    required: false,
  },
})


const resolveIcon = statusMsg => {
  if (statusMsg === "EN_ATTENTE" || statusMsg === "COMMENTAIRE" ){
    return {
      "icon": "tabler-circle-check",
      "icon-color": "secondary",
    }
  } 
  else if ( ["EN_COURS_RAMASSAGE", "RAMASSE", "ENTREPOT", "EN_COURS_LIVRAISON", "LIVRE", "LIVRE_PARTIELLEMENT" ].includes(statusMsg) ){
    return {
      "icon": "tabler-circle-check",
      
    }
  }
  else if ( ["REPORTE", "ANNULE", "PAS_REPONSE",  "REFUSE"].includes(statusMsg) ){
    return {
      "icon": "tabler-circle-check",
    }
  }

}



const resolveDate= oldDate => {
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-d h:mm:ss a') // Format the date
}

const resolveDateReporte= oldDate => {
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-d') // Format the date
}

const isDialogImgVisible = ref(false)
const imgSrc = ref("")

const showImage = src => {
  isDialogImgVisible.value = true
  imgSrc.value = src
}
</script>

<template>
  <VTimeline 
    align="start"
    truncate-line="both"
    side="end"
    density="compact"
    line-thickness="1"
    class="v-timeline--variant-outlined"
  >
    <VTimelineItem
      v-for="history in props.histories"
      :key="history.id" 
      v-bind="resolveIcon(history.statut)"
      :icon-color="statutInfos(history.statut).color"
      icon="tabler-circle-check"
      dot-color="rgba(var(--v-theme-surface))"
      size="20"
    >
      <div :class="'text-body-2 text-uppercase' + ' text-'+statutInfos(history.statut).color">
        {{ statutInfos(history.statut).text }}  <span class="creator-name text-secondary"> par {{ history.creator_name }} </span>
      </div>
      <p
        v-if="history.commentaire"
        class="mb-0"
      >
        {{ history.commentaire }}
      </p>
      <p
        v-if="history.file_path"
        class="mb-0"
      >
        <VBtn
          class="py-0"
          color="secondary"
          size="small"
          variant="tonal"
          @click="showImage(history.file_path)"
        >
          <VIcon
            start
            icon="tabler-eye"
          />
          Afficher
        </VBtn>
      </p>
      <p
        v-if="history.nombre_colis_ramasseur"
        class="mb-0"
      >
        Colis : {{ history.nombre_colis_ramasseur }}
      </p>
      <p
        v-if="history.montant"
        class="mb-0"
      >
        Montant : {{ history.montant }}
      </p>
      <p
        v-if="history.date"
        class="mb-0"
      >
        Reporté : {{ resolveDateReporte(history.date ) }}
      </p>
      <div class="app-timeline-title">
        {{ resolveDate(history.created_at) }}
      </div>
    </VTimelineItem>
  </VTimeline>

  <VDialog
    v-model="isDialogImgVisible"
    width="auto"
    max-width="90vw"
    scrollable 
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogImgVisible = !isDialogImgVisible" />

    <!-- Dialog Content -->
    <VCard class="pa-2">
      <VCardText class="pa-1 text-center">
        <img :src="imgSrc">
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped>
.creator-name {
  text-transform: lowercase;
}

.v-dialog {
  max-height: 95vh;
}
</style>

