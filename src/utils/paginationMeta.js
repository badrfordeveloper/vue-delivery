export const paginationMeta = (options, total) => {
  const start = (options.page - 1) * options.itemsPerPage + 1
  const end = Math.min(options.page * options.itemsPerPage, total)
  
  return `Affichage de  ${total === 0 ? 0 : start} à ${end} sur  ${total} entrées`
}
