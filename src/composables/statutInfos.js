export const statutInfos = statut => {

  let object = {
    text: statut,
    color: "secondary",
  }
  if(statut == "EN_ATTENTE"){
    object =  {
      text: "En attente",
      color: "en-attente",
    }
  }else if (statut === "EN_COURS_RAMASSAGE"){
    return {
      text: 'En cours ramassage',
      color: 'en-cours-ramassage',
    }
  }
  else if (statut === "REPORTE"){
    return {
      text: 'Reporté',
      color: 'reporte',
    }
  }
  else if (statut === "ANNULE"){
    return {
      text: 'Annule',
      color: 'annule',
    }
  }
  else if (statut === "RAMASSE"){
    return {
      text: 'Ramassé',
      color: 'ramasse',
    }
  }
  else if (statut === "ENTREPOT"){
    return {
      text: 'Entrepot',
      color: 'entrepot',
    }
  }
  else if (statut === "EN_COURS_LIVRAISON"){
    return {
      text: 'En cours de livraison',
      color: 'en-cours-de-livraison',
    }
  } 
  else if (statut === "LIVRE_PARTIELLEMENT"){
    return {
      text: 'Livré partiel',
      color: 'livre-partiellement',
    }
  }  
  else if (statut === "LIVRE"){
    return {
      text: 'Livré',
      color: 'livre',
    }
  } 
  else if (statut === "PAS_REPONSE"){
    return {
      text: 'Pas de reponse',
      color: 'pas-reponse',
    }
  }  
  else if (statut === "REFUSE"){
    return {
      text: 'Refuser',
      color: 'refuse',
    }
  }
  else if (statut === "EN_ATTENTE_RETOUR"){
    return {
      text: 'En attente de retour',
      color: 'en-attente-retour',
    }
  }
  else if (statut === "RETOURNE_ENTREPOT"){
    return {
      text: 'Retournée à l\'entrepot',
      color: 'retourne-entrepot',
    }
  }
  else if (statut === "RETOURNE_AU_VENDEUR"){
    return {
      text: 'Retourner au vendeur',
      color: 'retourne-au-vendeur',
    }
  }
  else if (statut === "PREPARER"){
    return {
      text: 'Préparer',
      color: 'preparer',
    }
  }
  else if (statut === "EN_COURS_RETOUR"){
    return {
      text: 'En cours de livraison ',
      color: 'en-cours-retour',
    }
  }
  else if (statut === "RETOURNER"){
    return {
      text: 'Retourner',
      color: 'retourner',
    }
  }else if (statut === "FACTURE"){
    return {
      text: 'Facturée',
      color: 'facture',
    }
  }else if (statut === "VALIDE"){
    return {
      text: 'Valide',
      color: 'valide',
    }
  }
  else if (statut === "EN_COURS"){
    return {
      text: 'En cours',
      color: 'en-cours',
    }
  }
  else if (statut === "PAYE"){
    return {
      text: 'Payée',
      color: 'paye',
    }
  }
  
  return object
}
