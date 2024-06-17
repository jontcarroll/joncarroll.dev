<template>
  <NavBar class="h-[8rem]">
    <NavIcon />
    <template #navigation>
      <NavLink to="/about">about</NavLink>
      |
      <NavLink to="/contact">contact</NavLink>
      |
      <NavLink to="/resume">resumé</NavLink>
    </template>
  </NavBar>

  <main class="font-chakra flex pt-[8rem] md:pt-[5rem]">
    <slot />
  </main>
</template>

<script setup lang="ts"></script>

<style>
  html,
  body,
  #__nuxt,
  #__layout {
    @apply !min-h-[100dvh] !w-full bg-base-100;
  }
</style>
