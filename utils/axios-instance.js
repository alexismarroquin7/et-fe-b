import axios from "axios";

export const axiosInstance = () => {
  console.log(process.env.NEXT_PUBLIC_PRODUCTION_API_URL)
  return axios.create({
    baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:4000/api`
    : process.env.NEXT_PUBLIC_PRODUCTION_API_URL
  })
}

export const axiosWithAuth = () => {
  console.log(process.env.NEXT_PUBLIC_PRODUCTION_API_URL)
  return axios.create({
    baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:4000/api`
    : process.env.NEXT_PUBLIC_PRODUCTION_API_URL,
    withCredentials: true
  })
}