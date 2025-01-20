import { ability } from '@/plugins/casl/ability'
import { ofetch } from 'ofetch'



export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  retry: 0,
  async onRequest({ options }) {
    const accessToken = useCookie('accessToken').value
    if (accessToken)
      options.headers.append('Authorization', `Bearer ${accessToken}`)
  },
  async onResponse({ request, response, options }) {   
  },
  async onResponseError({  response }) {
    if(response.status == 401){
      useCookie('userData').value = {}
      useCookie('accessToken').value = ""
      useCookie('userAbilityRules').value = []
      ability.update([])
      window.location.href='/login'
    }

    // Log error
    if(response.status == 500){
      toast.error("server error")
    }
  },
  
})
