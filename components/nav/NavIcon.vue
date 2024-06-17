<template>
  <div class="nav-icon">
    <NuxtLink to="/" class="">
      <div class="icon-wrapper">
        <span class="brackets">&lt;</span>

        <div class="expandable" :class="{ expand: mounted }">
          <span v-show="mounted" class="icon-text">JON CARROLL</span>
        </div>

        <span class="brackets">\&gt;</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const mounted = ref(false)

  onMounted(() => (mounted.value = true))
</script>

<style scoped lang="postcss">
  .nav-icon {
    @apply flex text-4xl text-primary;

    .icon-wrapper {
      @apply flex items-center gap-2;

      & .brackets {
        @apply opacity-50;

        transition: all 0.3s ease-in-out;
      }

      & .icon-text {
        @apply font-chakra mt-1 text-2xl font-bold text-base-content;
      }
    }
  }

  .nav-icon:hover {
    @apply cursor-pointer;

    & .brackets {
      @apply opacity-100;
    }
  }
</style>
