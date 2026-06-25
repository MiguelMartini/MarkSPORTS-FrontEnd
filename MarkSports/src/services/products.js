import api from './api'

export const getProducts = async () => {
  const response = await api.get('/products')
  return response.data
}

export const getProductById = async (id) => {
  const response = await api.get(`/product/${id}`)
  return response.data
}

export const createProduct = async (productData) => {
  const response = await api.post('/products', productData)
  return response.data
}