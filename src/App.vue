<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Головна</router-link>
        <router-link to="/stores">Магазини</router-link>
        <router-link to="/about">Про нас</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default 
{
  name: 'App'
};
</script>

<style src="./assets/style.css"></style>