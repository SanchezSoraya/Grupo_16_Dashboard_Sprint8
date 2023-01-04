import axios from 'axios';


const pathApi = 'http://localhost:3030/api'

export const getProducts = async()=>{
  const products = await axios.get(`${pathApi}/products`)
  return products.data
}
export const getUsers = async()=>{
  const users = await axios.get(`${pathApi}/users`)
  return users.data
}
export const getColors = async()=>{
  const colors = await axios.get(`${pathApi}/colors`)
  return colors.data
}

