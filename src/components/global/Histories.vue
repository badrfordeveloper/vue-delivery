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
      "icon-color": "info",
    }
  }
  else if ( ["REPORTE", "ANNULE" ].includes(statusMsg) ){
    return {
      "icon": "tabler-circle-check",
      "icon-color": "error",
    }
  }

}

const resolveClass= statusMsg => {
  if (statusMsg === "EN_ATTENTE"){
    return {
      "class": "text-secondary",
    }
  }
  else if ( ["EN_COURS_RAMASSAGE", "RAMASSE", "ENTREPOT", "EN_COURS_LIVRAISON", "LIVRE_PARTIELLEMENT"].includes(statusMsg) ){
    return {
      "class": "text-info",
    }
  }
  else if ( ["REPORTE", "ANNULE", "REFUSE", "PAS_REPONSE" ].includes(statusMsg) ){
    return {
      "class": "text-error",
    }
  }

    
}

const resolveDate= oldDate => {
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-d h:mm:ss a') // Format the date
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
      v-for="hisotry in props.histories"
      :key="hisotry.id" 
      v-bind="resolveIcon(hisotry.statut)"
      dot-color="rgba(var(--v-theme-surface))"
      size="20"
    >
      <div
        class="text-body-2 text-uppercase "
        v-bind="resolveClass(hisotry.statut)"
      >
        {{ statutInfos(hisotry.statut).text }}  <span class="creator-name text-secondary"> par {{ hisotry.creator_name }} </span>
      </div>
      <p
        v-if="hisotry.commentaire"
        class="mb-0"
      >
        {{ hisotry.commentaire }}
      </p>
      <p
        v-if="hisotry.file_path"
        class="mb-0"
      >
        <VBtn
          class="py-0"
          color="secondary"
          size="small"
          variant="tonal"
          @click="showImage(hisotry.file_path)"
        >
          <VIcon
            start
            icon="tabler-eye"
          />
          Afficher
        </VBtn>
      </p>
      <p
        v-if="hisotry.nombre_colis_ramasseur"
        class="mb-0"
      >
        Colis : {{ hisotry.nombre_colis_ramasseur }}
      </p>
      <p
        v-if="hisotry.date"
        class="mb-0"
      >
        Reporté : {{ resolveDate(hisotry.date ) }}
      </p>
      <div class="app-timeline-title">
        {{ resolveDate(hisotry.created_at) }}
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

