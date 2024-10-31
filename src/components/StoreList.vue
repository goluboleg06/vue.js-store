<template>
  <div>
    <input v-model="filter" placeholder="Фільтр за спеціальністю..." />
    <div v-for="store in filteredStores" :key="store.id">
      <StoreItem :store="store" @delete="deleteStore" />
    </div>
  </div>
</template>

<script>
import StoreItem from './StoreItem.vue';

export default 
{
  components: { StoreItem },
  data() 
  {
    return {
      stores: [],
      filter: ''
    };
  },
  computed: {
    filteredStores() 
    {
      return this.stores.filter(store =>
        store.spec.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  },
  methods: 
  {
    deleteStore(id) 
    {
      this.stores = this.stores.filter(store => store.id !== id);
    }
  },
  mounted() 
  {
    fetch('/stores.json')
      .then(response => response.json())
      .then(data => 
      {
        this.stores = data;
      });
  }
};

</script>

<style scoped>
.store-list 
{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input 
{
  padding: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}
</style>