<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
      <img :src="product.galleries[0].photo" class="w-100" />
    </div>
    <div class="col-8">
      <h1>{{ product.name }}</h1>
      <h3>${{ product.price }}</h3>
      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary">Add to Cart</button>
      <p class="mt-4">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  mounted () {
    this.$store.dispatch('getProduct', { id: this.id })
  }
}
</script>

<style></style>
