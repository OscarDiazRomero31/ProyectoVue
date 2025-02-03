<template>
  <div class="search-results">
    <h2>Resultados de búsqueda</h2>

    <!-- Canciones -->
    <div v-if="results.songs.length">
      <h3>Canciones</h3>
      <div class="song-grid">
        <SongCard v-for="song in results.songs" :key="song.id" :song="song" />
      </div>
    </div>

    <!-- Álbumes -->
    <div v-if="results.albums.length">
      <h3>Álbumes</h3>
      <div class="album-grid">
        <AlbumCard v-for="album in results.albums" :key="album.id" :album="album" />
      </div>
    </div>

    <!-- Artistas -->
    <div v-if="results.artists.length">
      <h3>Artistas</h3>
      <div class="artist-grid">
        <ArtistCard v-for="artist in results.artists" :key="artist.id" :artist="artist" />
      </div>
    </div>

  </div>
</template>

<script>
import SongCard from "@/components/SongCard.vue";
import AlbumCard from "@/components/AlbumCard.vue";
import ArtistCard from "@/components/ArtistCard.vue";

export default {
  props: {
    results: {
      type: Object,
      required: true,
    },
  },
  components: {
    SongCard,
    AlbumCard,
    ArtistCard,
  },
};
</script>

<style scoped>
.search-results {
  padding: 20px;
  text-align: center;
}

.song-grid, .album-grid, .artist-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
</style>
