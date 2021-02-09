<template>
  <button>{{label}}</button>
</template>

<script>
export default {
    props: {
        label: {
            default: "YEAH Button",
            type: String
        }
    }
}
</script>

<style scoped>
    button {
        background-color: royalblue;
        color: white;
        font-weight: bold;
        border: 0;
        padding: 1rem 2rem;
        border-radius: 1rem;
    }
</style>