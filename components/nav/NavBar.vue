<template>
  <div
    class="fixed top-0 z-10 flex w-full flex-col items-center justify-between gap-2 bg-base-100 p-6 drop-shadow-lg md:h-[5rem] md:flex-row"
  >
    <slot />

    <div class="font-chakra flex items-center gap-5 md:text-xl">
      <slot name="navigation"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss"></style>
