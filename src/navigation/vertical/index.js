export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Roles',
    to: { name: 'role-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'role',
  },
  {
    title: 'Utilisateurs',
    to: { name: 'user-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'user',
  },
  {
    title: 'Tarifs des villes',
    to: { name: 'tarif-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'tarif',
  },
  {
    title: 'Gestion Colis',
    to: { name: 'colis-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'colis',
  },

  {
    title: 'Gestion Ramassage',
    to: { name: 'ramassage-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'ramassage',
  },
  {
    title: 'Gestion Retours',
    to: { name: 'retour-list' },
    icon: { icon: 'tabler-smart-home' },
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
  {
    title: 'Factures par livreur',
    to: { name: 'facture-livreur-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'factureLivreur',
  },
]
