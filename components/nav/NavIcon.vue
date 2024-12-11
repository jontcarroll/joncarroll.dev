<template>
  <div class="nav-icon">
    <NuxtLink to="/" class="">
      <div class="icon-wrapper">
        <!--        <span class="brackets">&lt;</span>-->
        <span class="text-xl font-bold text-primary">~/</span>
        <div class="expandable" :class="{ expand: mounted }">
          <span v-show="mounted" class="icon-text">joncarroll</span>
        </div>

        <!--        <span class="brackets">\&gt;</span>-->
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
    @apply flex text-primary;

    .icon-wrapper {
      @apply flex items-center gap-1;

      & .brackets {
        @apply text-2xl opacity-50 md:text-4xl;

        transition: all 0.3s ease-in-out;
      }

      & .icon-text {
        @apply font-inconsolata text-xl font-bold text-base-content md:text-2xl;
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
