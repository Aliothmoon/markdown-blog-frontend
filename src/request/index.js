import axios from "axios";

const service = axios.create({
    baseURL: '/api/',
    timeout: 10000,
})
service.interceptors.request.use(function (config) {
    return config;
})
export default service;