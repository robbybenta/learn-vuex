import axios from 'axios'
export function getProducts({ commit }) {
  axios
    .get('http://shayna-backend.belajarkoding.com/api/products')
    .then(response => {
      commit('SET_PRODUCTS', response.data.data.data)
    })
}
export function getProduct({ commit }, { id }) {
  axios
    .get('http://shayna-backend.belajarkoding.com/api/products', {
      params: {
        id
      }
    })
    .then(response => {
      commit('SET_PRODUCT', response.data.data.data)
    })
}
