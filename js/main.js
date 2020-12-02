const app = new Vue({
  el: "#root",
  data: {
    albums: [],
    select: null,
  },
  computed: {
    filter() {
      if (this.select == null) {
        return this.albums
      } else {
      return this.albums.filter(album => album.genre == this.select)
    }}
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.albums = result.data.response;
      });


  },
});
