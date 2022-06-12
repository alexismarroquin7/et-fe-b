import axios from "axios";

export const axiosInstance = () => {
  return axios.create({
    baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:4000/api`
    : `https://<production_link>/api`
  })
}

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:4000/api`
    : `https://<production_link>/api`,
    withCredentials: true
  })
}