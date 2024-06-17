<template>
  <ol class="relative border-s border-accent">
    <TimelineEntry v-for="entry in entries" :key="entry.date" :entry="entry" />
  </ol>
</template>

<script setup lang="ts">
  import type { TimelineEntry } from '~/models/timeline'

  const props = defineProps<{
    entries: TimelineEntry[]
  }>()
</script>

<style scoped lang="postcss"></style>
