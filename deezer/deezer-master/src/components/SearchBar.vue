<template>
    <div class="search-bar">
      <input
        v-model="query"
        type="text"
        placeholder="Buscar canciones, álbumes o artistas..."
        @keyup.enter="emitSearch"
      />
      <button @click="emitSearch">🔍</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: "",
      };
    },
    methods: {
      emitSearch() {
        if (this.query.trim()) {
          this.$emit("search", this.query);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: white;
    border-radius: 8px;
  }
  
  .search-bar input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .search-bar button {
    background: blue;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  