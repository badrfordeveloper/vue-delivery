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
    if(response.status == 401){
      window.location.href='/login'
    }
  },
  async onResponseError({  response }) {
    // Log error
    if(response.status == 500){
      toast.error("server error")
    }
  },
  
})
