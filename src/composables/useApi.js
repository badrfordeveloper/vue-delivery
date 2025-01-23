import { ability } from '@/plugins/casl/ability';
import { createFetch } from '@vueuse/core';
import { destr } from 'destr';

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json',
    },
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      const accessToken = useCookie('accessToken').value
      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        }
      }
      
      return { options }
    },
    afterFetch(ctx) {
      const { data, response } = ctx

      console.log("response")
      console.log(response)

      // Parse data if it's JSON
      let parsedData = null
      try {
        parsedData = destr(data)
      }
      catch (error) {
        console.error(error)
      }
      
      return { data: parsedData, response }
    },
    onFetchError(ctx) {
      const { data, response } = ctx      
      if (response.status === 401) {
        useCookie('userData').value = {};
        useCookie('accessToken').value = '';
        useCookie('userAbilityRules').value = [];
        ability.update([]);
        window.location.href = '/login';
      } else if (response.status === 500) {
        toast.error('Server error');
      }
      // Return the error context
      return ctx
    },
  },
})
