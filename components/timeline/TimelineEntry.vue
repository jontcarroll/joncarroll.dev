<template>
  <li ref="el" class="timeline-entry" :class="{ visible: show }">
    <div
      class="absolute -start-1.5 -ml-[1rem] mt-1.5 h-3 w-3 rounded-full border border-white bg-primary"
    ></div>

    <time class="text-sm font-normal leading-none" v-html="entry.date" />

    <div class="flex flex-col items-start gap-3 p-5">
      <Svg
        v-if="entry.logo"
        :name="entry.logo"
        class="mb-3 h-8"
        :class="entry.logoClass ? entry.logoClass : ''"
      />

      <div class="flex items-center gap-4">
        <h3 class="text-lg font-bold text-primary" v-html="entry.title" />
        <div
          v-if="entry.location"
          class="flex h-[1em] items-center gap-1 text-sm text-base-content/40"
        >
          <Icon name="material-symbols:location-on" size="1.2em" />
          <span>{{ entry.location }}</span>
        </div>
      </div>

      <p
        class="prose mb-4 mr-2 overscroll-none font-normal text-base-content/60"
        v-html="entry.description"
      />
    </div>
  </li>
</template>

<script setup lang="ts">
  import type { TimelineEntry } from '~/models/timeline'
  import { useElementBounding, useWindowSize } from '@vueuse/core'

  const props = defineProps<{
    entry: TimelineEntry
  }>()

  const el = ref()

  const { height } = useWindowSize()
  const { bottom, top } = useElementBounding(el)

  const show = computed(() => top.value && top.value < height.value * 0.8)
</script>

<style scoped lang="postcss">
  .timeline-entry {
    @apply my-10 ms-4 opacity-0 blur-xl;

    transition: all 0.4s ease-in-out;

    &.visible {
      @apply opacity-100 blur-none;
    }
  }
</style>
