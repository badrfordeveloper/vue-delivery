export const statutInfos = statut => {

  let object = {
    text: statut,
    color: "secondary",
  }
  if(statut == "EN_ATTENTE"){
    object =  {
      text: "En attente",
      color: "warning",
    }
  }else if (statut === "EN_COURS_RAMASSAGE"){
    return {
      text: 'En cours ramassage',
      color: 'info',
    }
  }
  else if (statut === "REPORTE"){
    return {
      text: 'Reporté',
      color: 'error',
    }
  }
  else if (statut === "ANNULE"){
    return {
      text: 'Annule',
      color: 'error',
    }
  }
  else if (statut === "RAMASSE"){
    return {
      text: 'Ramassé',
      color: 'info',
    }
  }
  else if (statut === "ENTREPOT"){
    return {
      text: 'Entrepot',
      color: 'info',
    }
  }
  
  return object
}
