import axios from 'axios'
export const getProducts = ({ commit }) => {
  axios
    .get('http://shayna-backend.belajarkoding.com/api/products')
    .then(response => {
      commit('SET_PRODUCTS', response.data.data.data)
    })
}
export const getProduct = ({ commit }) => {
  axios
    .get('http://shayna-backend.belajarkoding.com/api/products', {
      params: {
        id: this.$route.params.id
      }
    })
    .then(response => {
      commit('SET_PRODUCT', response.data.data.data)
    })
  console.log(this.id)
}
