export default [

  {
    title: 'Gestion de colis',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'En attente',
        to: { name: 'colis-list-statut', params: { statut: 'EN_ATTENTE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Ramassé',
        to: { name: 'colis-list-statut', params: { statut: 'RAMASSE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Entrepot',
        to: { name: 'colis-list-statut', params: { statut: 'ENTREPOT' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'En cours de livraison',
        to: { name: 'colis-list-statut', params: { statut: 'EN_COURS_LIVRAISON' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Pas de reponse',
        to: { name: 'colis-list-statut', params: { statut: 'PAS_REPONSE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Reporté',
        to: { name: 'colis-list-statut', params: { statut: 'REPORTE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Livré',
        to: { name: 'colis-list-statut', params: { statut: 'LIVRE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Livré partiel',
        to: { name: 'colis-list-statut', params: { statut: 'LIVRE_PARTIELLEMENT' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Refusé',
        to: { name: 'colis-list-statut', params: { statut: 'REFUSE' } },
        action: 'list',
        subject: 'colis',
      },
      {
        title: 'Annuler',
        to: { name: 'colis-list-statut', params: { statut: 'ANNULE' } },
        action: 'list',
        subject: 'colis',
      },
    ],
  },
]
