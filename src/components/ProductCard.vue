<template>
  <div class="col-3 mt-3">
    <div class="card h-100 text-left">
      <img class="w-100" :src="product.galleries[0].photo" alt />
      <div class="card-body">
        <h4 class="card-title">
          <router-link v-bind:to="'/product/' + product.id">{{
            product.name
          }}</router-link>
        </h4>
        <strong>${{ product.price }}</strong>
        <p class="card-text">{{ product.description }}</p>
      </div>
      <div class="px-4 pb-3">
        <button class="btn btn-secondary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style></style>
