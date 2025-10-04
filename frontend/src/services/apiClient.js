import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
    baseURL,
    timeout: 15000
})

export default api