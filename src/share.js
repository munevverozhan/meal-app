import axios from 'axios'

export const share = axios.create({
  baseURL:'https://www.themealdb.com/'
  
})