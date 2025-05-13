import { router } from '@/plugins/1.router/index'
import { ability } from '@/plugins/casl/ability'
import axios from 'axios'

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // Optional: Set a timeout for requests
})

// Request Interceptor
$api.interceptors.request.use(
  config => {
    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// Response Interceptor
$api.interceptors.response.use(
  response => {    
    return response
  },
  error => {
    const { response, request } = error
    if (response) {
      if (response.status === 401 || response.status === 403 ) {
        // clear user data and permissions 
        useCookie('userData').value = {}
        useCookie('accessToken').value = ''
        useCookie('userAbilityRules').value = []
        ability.update([])

        // show not authhorized page if we are not in login page
        if(router.currentRoute.value.name != "login" ){
          router.push('not-authorized')
        }
      } else if (response.status === 500) {
        toast.error('Server error')
      }
    }else if(request){
      toast.error('Server error')
    }
    
    return Promise.reject(error)
  },
)

export { $api }

