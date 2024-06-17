<template>
  <NuxtLink :to="to">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    to: string
  }>()
</script>

<style scoped lang="postcss">
  a {
    @apply inline-block p-3;
  }

  a:hover {
    text-shadow:
      -0.06ex 0 0 currentColor,
      0.06ex 0 0 currentColor;
  }

  @supports (-webkit-text-stroke-width: 0.04ex) {
    /* 2017+, mobile 2022+ */
    a:hover {
      text-shadow:
        -0.03ex 0 0 currentColor,
        0.03ex 0 0 currentColor;
      -webkit-text-stroke-width: 0.04ex;
    }
  }

  a::after {
    @apply bg-primary;
    content: '';
    display: block;
    width: 0;
    height: 2px;
    transition: all 0.3s ease-in-out;
  }

  a:hover::after {
    @apply bg-primary;
    width: 100%;
  }
</style>
