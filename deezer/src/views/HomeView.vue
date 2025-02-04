<template>
  <div class="home">
    <h1>Home</h1>
    <SearchBar @search="handleSearch" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    SearchBar,
  },
  setup() {
    const router = useRouter();

    const handleSearch = (query) => {
      router.push({ path: "/search", query: { q: query } });
    };

    return { handleSearch };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
