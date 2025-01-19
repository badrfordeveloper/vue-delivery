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
    title: 'Second page',
    to: { name: 'second-page' },
    icon: { icon: 'tabler-file' },
    action: 'ok',
    subject: 'subject',
  },
]
