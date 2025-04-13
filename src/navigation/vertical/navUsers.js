export default [

  {
    title: 'Gestion des utilisateurs',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Livreurs',
        to: { name: 'user-list-role', params: { role: 'livreur' } },
        action: 'list',
        subject: 'user',
      },
      {
        title: 'Vendeurs',
        to: { name: 'user-list-role', params: { role: 'vendeur' } },
        action: 'list',
        subject: 'user',
      },
      {
        title: 'Gestionnaires',
        to: { name: 'user-list-role', params: { role: 'gestionnaire' } },
        action: 'list',
        subject: 'user',
      },
    ],
  },
]
