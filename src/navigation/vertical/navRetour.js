export default [

  {
    title: 'Gestion de Retour',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'RTR',
        to: { name: 'retour-list-statut', params: { statut: 'RETOURNER' } },
        action: 'list',
        subject: 'retour',
      },
      {
        title: 'En attente',
        to: { name: 'retour-list-statut', params: { statut: 'EN_ATTENTE' } },
        action: 'list',
        subject: 'retour',
      },
      {
        title: 'préparé',
        to: { name: 'retour-list-statut', params: { statut: 'PREPARER' } },
        action: 'list',
        subject: 'retour',
      },
      {
        title: 'En cours de livraison',
        to: { name: 'retour-list-statut', params: { statut: 'EN_COURS_RETOUR' } },
        action: 'list',
        subject: 'retour',
      },
      {
        title: 'Reporter',
        to: { name: 'retour-list-statut', params: { statut: 'REPORTE' } },
        action: 'list',
        subject: 'retour',
      },   
      {
        title: 'Scanner retours',
        to: { name: 'retour-scan' },
        icon: { icon: 'tabler-smart-home' },
        action: 'scan',
        subject: 'retour',
      },
    ],
  },
]
