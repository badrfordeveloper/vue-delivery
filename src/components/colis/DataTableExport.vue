<template>
  <VListItem
    value="print"
    prepend-icon="tabler-file-excel"
    @click="exportToExcel"
  >
    Export to Excel
  </VListItem>
</template>

<script setup>
import * as XLSX from 'xlsx'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  fileName: {
    type: String,
    default: 'export',
  },
})

const exportToExcel = () => {
  // Prepare worksheet data
  const wsData = [
    // Header row
    props.headers.map(header => header.title),

    // Data rows
    ...props.items.map(item => {
      return props.headers.map(header => {
        // Handle nested properties if needed (e.g., 'user.name')
        return header.key.split('.').reduce((obj, key) => obj?.[key], item)
      })
    }),
  ]

  // Create worksheet
  const ws = XLSX.utils.aoa_to_sheet(wsData)

  // Create workbook
  const wb = XLSX.utils.book_new()

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

  // Generate file and trigger download
  XLSX.writeFile(wb, `${props.fileName}.xlsx`)
}
</script>
