

import gestionColis from './navColis'
import gestionFacturesLivreur from './navFactureLivreur'
import gestionFacturesVendeur from './navFactureVendeur'
import gestionRamasage from './navRamassage'
import gestionRetour from './navRetour'
import gestionUsers from './navUsers'


export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'tabler-smart-home' },
  },

  ...gestionColis,
  ...gestionRamasage,
  ...gestionRetour,
  ...gestionUsers,
  ...gestionFacturesVendeur,
  ...gestionFacturesLivreur,


  {
    title: 'Gestion roles',
    to: { name: 'role-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'role',
  },

  {
    title: 'Liste des tarifs',
    to: { name: 'tarif-list' },
    icon: { icon: 'tabler-smart-home' },
    action: 'list',
    subject: 'tarif',
  },
]
