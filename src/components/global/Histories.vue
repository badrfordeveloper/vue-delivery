<script setup>
import { format, parseISO } from 'date-fns'

const props = defineProps({
  histories: {
    type: Object,
    required: false,
  },
})


const resolveIcon = statusMsg => {
  if (statusMsg === "EN_ATTENTE"){
    return {
      "icon": "tabler-circle-check",
      "icon-color": "secondary",
    }
  } 
  else if ( ["EN_COURS_RAMASSAGE", "RAMASSE", "ENTREPOT" ].includes(statusMsg) ){
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
  else if ( ["EN_COURS_RAMASSAGE", "RAMASSE", "ENTREPOT" ].includes(statusMsg) ){
    return {
      "class": "text-info",
    }
  }
  else if ( ["REPORTE", "ANNULE" ].includes(statusMsg) ){
    return {
      "class": "text-error",
    }
  }

    
}

const resolveDate= oldDate => {
  const newDate = parseISO(oldDate) // Parse the ISO string
  
  return format(newDate, 'yyyy-MM-d h:mm:ss a') // Format the date
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
        {{ hisotry.statut }}
      </div>
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
</template>


