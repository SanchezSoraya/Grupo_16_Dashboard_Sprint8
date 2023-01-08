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
export const getSizes = async()=>{
  const sizes = await axios.get(`${pathApi}/sizes`)
  return sizes.data
}
export const getLastUser = async()=>{
  const userLast = await axios.get(`${pathApi}/users/Last`)
  return userLast.data
}
export const getLastProduct = async()=>{
  const productLast = await axios.get(`${pathApi}/products/last`)
  return productLast.data
}
export const getSearchProducts = async(name)=>{
  const productSearch = await axios.get(`${pathApi}/products/buscar?name=${name}`)
  return productSearch.data
}