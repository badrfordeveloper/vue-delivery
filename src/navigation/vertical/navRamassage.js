export default [

  {
    title: 'Gestion de  ramassage',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'En attente',
        to: { name: 'ramassage-list-statut', params: { statut: 'EN_ATTENTE' } },
        action: 'list',
        subject: 'ramassage',
      },
      {
        title: 'En cours ramassage',
        to: { name: 'ramassage-list-statut', params: { statut: 'EN_COURS_RAMASSAGE' } },
        action: 'list',
        subject: 'ramassage',
      },
      {
        title: 'Ramassé',
        to: { name: 'ramassage-list-statut', params: { statut: 'RAMASSE' } },
        action: 'list',
        subject: 'ramassage',
      },
      {
        title: 'Entrepot',
        to: { name: 'ramassage-list-statut', params: { statut: 'ENTREPOT' } },
        action: 'list',
        subject: 'ramassage',
      },

      {
        title: 'Programmée',
        to: { name: 'ramassage-list-statut', params: { statut: 'REPORTE' } },
        action: 'list',
        subject: 'ramassage',
      },
   
    ],
  },
]
