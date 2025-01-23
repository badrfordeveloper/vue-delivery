import { ability } from '@/plugins/casl/ability';
import axios from 'axios';

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000, // Optional: Set a timeout for requests
});

// Request Interceptor
$api.interceptors.request.use(
  (config) => {
    const accessToken = useCookie('accessToken').value;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (response) {
      if (response.status === 401) {
        useCookie('userData').value = {};
        useCookie('accessToken').value = '';
        useCookie('userAbilityRules').value = [];
        ability.update([]);
        window.location.href = '/login';
      } else if (response.status === 500) {
        toast.error('Server error');
      }
    }
    return Promise.reject(error);
  }
);

export { $api };
