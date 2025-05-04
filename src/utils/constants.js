export const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60

export const listHoraires = [
  {
    label: 'Normale',
    value: 'normale',
  }, 
  {
    label: 'Matin',
    value: 'matin',
  }, 
  {
    label: 'Après midi',
    value: 'apres_midi',
  }, 
  {
    label: 'Soirée',
    value: 'soiree',
  },
]
export const listPoids = [
  {
    label: "1kg  jusqu'à 6 kg",
    value: '1kg_6kg',
  }, 
  {
    label: "7kg  jusqu'à 11 kg",
    value: '7kg_11kg',
  }, 
  {
    label: "12kg  jusqu'à 20kg",
    value: '12kg_20kg',
  }, 
]
export function getHorairesLabel(value) {
  const found = listHoraires.find(item => item.value === value)
  
  return found ? found.label : ''
}
export function getPoidsLabel(value) {
  const found = listPoids.find(item => item.value === value)
  
  return found ? found.label : ''
}

export const statusColis = [
  "EN_ATTENTE",
  "ENTREPOT",
  "REPORTE",
  "PAS_REPONSE",
  "EN_COURS_LIVRAISON", 
  "LIVRE", 
  "LIVRE_PARTIELLEMENT", 
  "REFUSE", 
  "ANNULE",
  "EN_COURS_RAMASSAGE",
]

      
    
export const statusRamassage = [
  "EN_ATTENTE",
  "REPORTE",
  "EN_COURS_RAMASSAGE",
  "RAMASSE", 
  "ANNULE", 
  "ENTREPOT",
]

export const statusRetour = [
  "EN_ATTENTE",
  "PREPARER",
  "EN_COURS_RETOUR",
  "REPORTE", 
  "RETOURNER",
]

export const statusFactureLivreur = [
  "EN_ATTENTE",
  "FACTURE",
  "VALIDE",
]

export const statusFactureVendeur = [
  "EN_ATTENTE",
  "EN_COURS",
  "PAYE",
]
  