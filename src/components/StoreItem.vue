<template>
    <div class="store-item">
      <h2>{{ store.name }}</h2>
      <p>Адреса: {{ store.address }}</p>
      <p>Телефон: {{ store.phone }}</p>
      <p>Спеціалізація: {{ store.spec }}</p>
      <p>Час роботи: {{ store.hours }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      store: Object
    }
  }
</script>

<style scoped>
.employee-item 
{
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
}

h3 
{
  margin: 0 0 5px;
  color: #007bff;
}

p 
{
  margin: 4px 0;
  color: #555;
}

button 
{
  background-color: #ff4d4d;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover 
{
  background-color: #ff1a1a;
}
</style>