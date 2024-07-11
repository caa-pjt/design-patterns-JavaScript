class App {
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    //this.moviesApi = new MovieApi("/data/old-movie-data.json");
    this.moviesApi = new MovieApi("/data/new-movie-data.json");
  }

  async main() {
    const moviesData = await this.moviesApi.getMovies();

    moviesData
      //.map((movie) => new OldMovie(movie))
      .map((movie) => new Movie(movie))
      .forEach((movie) => {
        const Template = new MovieCard(movie);
        this.$moviesWrapper.appendChild(Template.createMovieCard());
      });
  }
}

const app = new App();
app.main();
