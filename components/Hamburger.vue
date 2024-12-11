<template>
  <svg
    class="hamburger"
    viewBox="0 0 100 100"
    width="60"
    :class="{ active: active }"
    @click="active = !active"
  >
    <path
      class="line top"
      stroke="currentColor"
      d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
    />
    <path
      class="line middle"
      stroke="currentColor"
      d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
    />
    <path
      class="line bottom"
      stroke="currentColor"
      d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
    />
  </svg>
</template>

<script setup lang="ts">
  const active = ref(false)
</script>

<style scoped lang="postcss">
  .hamburger {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .line {
      fill: none;
      transition:
        stroke-dasharray 400ms,
        stroke-dashoffset 400ms;
      stroke-width: 5.5;
      stroke-linecap: round;
    }

    & .top {
      stroke-dasharray: 40 172;
    }

    & .middle {
      stroke-dasharray: 40 111;
    }
    & .bottom {
      stroke-dasharray: 40 172;
    }

    &.active {
      .top {
        stroke-dashoffset: -132px;
      }
      .middle {
        stroke-dashoffset: -71px;
      }
      .bottom {
        stroke-dashoffset: -132px;
      }
    }
  }
</style>
