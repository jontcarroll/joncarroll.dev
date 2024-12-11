<template>
  <NuxtLayout name="default">
    <NuxtPage
      :transition="{
        name: 'page',
        mode: 'out-in'
      }"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  import { SiteStore } from '~/stores/site'

  Theme.use()

  const site = SiteStore.use()

  useHead(
    computed(() => ({
      title: site.title
    }))
  )
</script>
