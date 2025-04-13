export default [
  {
    title: 'Factures livreur',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'liste des factures',
        to: { name: 'facture-livreur-list' },
        action: 'list',
        subject: 'factureLivreur',
      },
      {
        title: 'Facturé',
        to: { name: 'facture-livreur-list-statut', params: { statut: 'FACTURE' } },
        action: 'list',
        subject: 'factureLivreur',
      },
      {
        title: 'Validé',
        to: { name: 'facture-livreur-list-statut', params: { statut: 'VALIDE' } },
        action: 'list',
        subject: 'factureLivreur',
      },
    ],
  },
]
