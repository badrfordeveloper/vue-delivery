export default [
  {
    title: 'Factures Vendeur',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'liste des factures',
        to: { name: 'facture-vendeur-list' },
        action: 'list',
        subject: 'factureVendeur',
      },
      {
        title: 'En cours de paiement',
        to: { name: 'facture-vendeur-list-statut', params: { statut: 'EN_COURS' } },
        action: 'list',
        subject: 'factureVendeur',
      },
      {
        title: 'Payé',
        to: { name: 'facture-vendeur-list-statut', params: { statut: 'PAYE' } },
        action: 'list',
        subject: 'factureVendeur',
      },
    ],
  },
]
