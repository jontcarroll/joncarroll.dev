<template>
  <div class="nav-menu hidden md:flex">
    <ul>
      <li>
        <NuxtLink class="nav-link" to="/about">about</NuxtLink>
      </li>
      <li>
        <NuxtLink class="nav-link" to="/contact">contact</NuxtLink>
      </li>
    </ul>
  </div>
  <Hamburger class="shrink-0 text-primary md:hidden" />
</template>

<script setup lang="ts">
  const props = defineProps()
</script>

<style scoped lang="postcss">
  .nav-menu {
    @apply font-inconsolata relative justify-end overflow-hidden;

    ul {
      @apply -ml-[1px] flex flex-wrap justify-between;

      li {
        @apply grow basis-auto border-l border-base-content/50 px-4 text-center;
      }
    }
  }

  .nav-link {
    @apply inline-block text-xl;

    &::after {
      @apply bg-primary;
      content: '';
      display: block;
      width: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      @apply bg-primary;
      width: 100%;
    }

    :hover {
      text-shadow:
        -0.06ex 0 0 currentColor,
        0.06ex 0 0 currentColor;
    }
  }

  @supports (-webkit-text-stroke-width: 0.04ex) {
    /* 2017+, mobile 2022+ */
    .nav-link:hover {
      text-shadow:
        -0.03ex 0 0 currentColor,
        0.03ex 0 0 currentColor;
      -webkit-text-stroke-width: 0.04ex;
    }
  }
</style>
