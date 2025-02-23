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
      color: 'primary',
    }
  }
  else if (statut === "EN_COURS_LIVRAISON"){
    return {
      text: 'En cours de livraison',
      color: 'info',
    }
  } 
  else if (statut === "LIVRE_PARTIELLEMENT"){
    return {
      text: 'livré partiellement',
      color: 'info',
    }
  }  
  else if (statut === "LIVRE"){
    return {
      text: 'Livré',
      color: 'info',
    }
  } 
  else if (statut === "PAS_REPONSE"){
    return {
      text: 'Pas de reponse',
      color: 'error',
    }
  }  
  else if (statut === "REFUSE"){
    return {
      text: 'Refuser',
      color: 'error',
    }
  }
  
  return object
}
