import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    withXSRFToken: true,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
})

apiInstance.interceptors.response.use(res => res.data)

export default apiInstance

