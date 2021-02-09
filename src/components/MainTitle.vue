<template>
  <h1 :class="'title-' + size">
    <slot />
  </h1>
</template>

<script>
export default {
  props: {
    size: {
      default: "normal",
      type: String,
    },
  },
};
</script>

<style scoped>
.title-small {
  font-size: 1rem;
}

.title-normal {
  font-size: 2rem;
}

.title-big {
  font-size: 4rem;
}
</style>
