export const COOKIE_MAX_AGE_1_YEAR = 365 * 24 * 60 * 60

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
  