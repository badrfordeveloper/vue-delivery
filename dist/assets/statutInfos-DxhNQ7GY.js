const o=e=>{let r={text:e,color:"secondary"};if(e=="EN_ATTENTE")r={text:"En attente",color:"warning"};else{if(e==="EN_COURS_RAMASSAGE")return{text:"En cours ramassage",color:"info"};if(e==="REPORTE")return{text:"Reporté",color:"error"};if(e==="ANNULE")return{text:"Annule",color:"error"};if(e==="RAMASSE")return{text:"Ramassé",color:"info"};if(e==="ENTREPOT")return{text:"Entrepot",color:"primary"};if(e==="EN_COURS_LIVRAISON")return{text:"En cours de livraison",color:"info"};if(e==="LIVRE_PARTIELLEMENT")return{text:"livré partiellement",color:"info"};if(e==="LIVRE")return{text:"Livré",color:"info"};if(e==="PAS_REPONSE")return{text:"Pas de reponse",color:"error"};if(e==="REFUSE")return{text:"Refuser",color:"error"};if(e==="EN_ATTENTE_RETOUR")return{text:"En attente de retour",color:"error"};if(e==="RETOURNE_ENTREPOT")return{text:"Retournée à l'entrepot",color:"info"};if(e==="RETOURNE_AU_VENDEUR")return{text:"Retourner au vendeur",color:"info"};if(e==="PREPARER")return{text:"Préparer",color:"info"};if(e==="EN_COURS_RETOUR")return{text:"En cours de livraison ",color:"info"};if(e==="RETOURNER")return{text:"Retourner",color:"info"}}return r};export{o as s};
