/**
 * @class App
 * @description Classe principale de l'application
 * @returns {Movie} - retourne un film
 */
class App {
  /**
   * @constructor App
   * @description Constructeur de la classe App
   */
  constructor() {
    this.$moviesWrapper = document.querySelector(".movies-wrapper");
    this.oldMoviesApi = new MovieApi("/data/old-movie-data.json");
    this.newMoviesApi = new MovieApi("/data/new-movie-data.json");
  }

  async main() {
    // Ici je récupère mes films de mes deux API
    const oldMoviesData = await this.oldMoviesApi.getMovies();
    const newMoviesApi = await this.newMoviesApi.getMovies();

    // Instanciation de la classe Factory MoviesFactory
    const oldMovies = oldMoviesData.map(
      (movie) => new MoviesFactory(movie, "oldApi")
    );
    const newMovies = newMoviesApi.map(
      (movie) => new MoviesFactory(movie, "newApi")
    );

    // Concaténation des deux tableaux de films
    const FullMovies = [...oldMovies, ...newMovies];

    // Affichage des films
    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
