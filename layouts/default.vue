<template>
  <NavBar class="h-[5rem]">
    <NavIcon />
    <NavMenu />

    <!--      <NavLink to="/about">about</NavLink>-->
    <!--      |-->
    <!--      <NavLink to="/contact">contact</NavLink>-->
    <!--      |-->
    <!--      <NavLink to="/resume">resumé</NavLink>-->
  </NavBar>

  <!--  <header>-->
  <!--    <input type="checkbox" id="menyAvPaa" />-->
  <!--    <label id="burger" for="menyAvPaa">-->
  <!--      <div></div>-->
  <!--      <div></div>-->
  <!--      <div></div>-->
  <!--    </label>-->
  <!--    <nav id="meny"></nav>-->
  <!--  </header>-->

  <main class="font-inconsolata flex pt-[5rem]">
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

  header {
    border-bottom: 1px solid #eee;
    height: 4rem;
  }
  .burger-wrapper {
    cursor: pointer;
  }
  #meny {
    background: #333;
    width: 50rem;
    height: 100vh;
    position: fixed;
    right: 0;
    transition-timing-function: cubic-bezier(10, 2, 3, 1);
    transform: translateX(50rem);
    top: 0;
    z-index: 20;
    transition: 0.5s;
  }
  #menyAvPaa {
    display: none;
  }

  #menyAvPaa:checked ~ #meny {
    transform: translateX(0rem);
  }

  #burger {
    position: absolute;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    right: 1rem;
    top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  #burger > div {
    height: 2px;
    background-color: #000;
    transition: 0.5s;
    z-index: 999;
  }

  #menyAvPaa:checked ~ #burger > div {
    background-color: #fff;
  }

  #menyAvPaa:checked ~ #burger > div:nth-child(1) {
    transform: translateY(15px) rotate(45deg);
  }
  #menyAvPaa:checked ~ #burger > div:nth-child(2) {
    opacity: 0;
  }
  #menyAvPaa:checked ~ #burger > div:nth-child(3) {
    transform: translateY(-15px) rotate(-45deg);
  }
</style>
