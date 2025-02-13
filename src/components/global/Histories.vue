<script setup>
import { format, parseISO } from 'date-fns';
const props = defineProps({
  histories: {
    type: Object,
    required: false,
  }
})


const resolveIcon = statusMsg => {
  if (statusMsg === "EN_ATTENTE"){
    return {
     "icon":"tabler-circle-check",
     "icon-color":"secondary"
    }
  } 
  else if (statusMsg === "EN_COURS_RAMASSAGE"){
    return {
     "icon":"tabler-circle-check",
     "icon-color":"info"
    }
  }
  else if (statusMsg === "RAMASSE"){
    return {
     "icon":"tabler-circle-check",
     "icon-color":"info"
    }
  }
    
}
const resolveClass= statusMsg => {
  if (statusMsg === "EN_ATTENTE"){
    return {
     "class":"text-secondary"
    }
  }
  else if (statusMsg === "EN_COURS_RAMASSAGE"){
    return {
     "class":"text-info"
    }
  }
  else if (statusMsg === "REPORTE"){
    return {
     "class":"text-error"
    }
  }
  else if (statusMsg === "ANNULE"){
    return {
     "class":"text-error"
    }
  }
  else if (statusMsg === "RAMASSE"){
    return {
     "class":"text-info"
    }
  }
  else if (statusMsg === "ENTREPOT"){
    return {
     "class":"text-info"
    }
  }
    
}

const resolveDate= oldDate => {
  const newDate = parseISO(oldDate); // Parse the ISO string
  return format(newDate, 'yyyy/MM/d h:mm:ss a'); // Format the date
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
              <VTimelineItem v-for="hisotry in props.histories" :key="hisotry.id" 
              v-bind="resolveIcon(hisotry.statut)"
                dot-color="rgba(var(--v-theme-surface))"
                size="20"
              >
                <div class="text-body-2 text-uppercase " v-bind="resolveClass(hisotry.statut)">
                  {{ hisotry.statut}}
                </div>
                <p v-if="hisotry.nombre_colis_ramasseur" class="mb-0"> Colis : {{ hisotry.nombre_colis_ramasseur}}</p>
                <div class="app-timeline-title">
                  {{ resolveDate(hisotry.created_at)}}
                </div>
              </VTimelineItem>
            </VTimeline>
</template>

<style lang="scss">
</style>
