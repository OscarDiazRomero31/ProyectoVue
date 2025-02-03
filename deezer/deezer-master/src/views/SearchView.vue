<template>
  <div class="search-view">
    <h1>Resultados de búsqueda</h1>
    <SearchBar @search="handleSearch" />
    <SearchResults v-if="results" :results="results" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import SearchResults from "@/components/SearchResults.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

export default {
  components: {
    SearchBar,
    SearchResults,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const searchQuery = ref(route.query.q || "");
    const results = ref(null);

    const fetchResults = async () => {
      if (!searchQuery.value) return;

      try {
        console.log("Realizando búsqueda para:", searchQuery.value);
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchQuery.value}`);
        console.log("Respuesta de la API:", response);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Datos obtenidos de Deezer:", data);

        results.value = {
          songs: data.data || [],
          albums: [],
          artists: [],
        };

        console.log("Resultados guardados en Vue:", results.value);
      } catch (error) {
        console.error("Error al obtener resultados:", error);
      }
    };

    watch(route, async () => {
      searchQuery.value = route.query.q || "";
      await fetchResults();
    });

    return { searchQuery, results, handleSearch: (query) => router.push({ path: "/search", query: { q: query } }) };
  },
};
</script>

<style scoped>
.search-view {
  text-align: center;
  padding: 20px;
}

.audio-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.audio-container audio {
  width: 100%;
  border-radius: 5px;
}
</style>
