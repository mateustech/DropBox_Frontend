import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-dropb.herokuapp.com'
})

export default api