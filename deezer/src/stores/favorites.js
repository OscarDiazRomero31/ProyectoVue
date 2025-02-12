import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    addFavorite(song) {
      this.favorites.push(song);
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter(song => song.id !== id);
    }
  }
});
