<template>
    <div class="store-item">
      <h2>{{ store.name }}</h2>
      <p>Адреса: {{ store.address }}</p>
      <p>Телефон: {{ store.phone }}</p>
      <p>Спеціалізація: {{ store.spec }}</p>
      <p>Час роботи: {{ store.hours }}</p>
      <button @click="$emit('delete', store.id)">Видалити</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      store: Object
    }
  }
</script>

<style>
.employee-item 
{
  background-color: #8c8888;
  border-radius: 8px;
  padding: 15px;
}

h3 
{
  color: #000000;
  margin: 0 0 5px;
}

p 
{
  color: #797070;
  margin: 2px 0;
}

button{
  appearance: none;
  background-color: #000000;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}


button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}
</style>