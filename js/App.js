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
    this.MoviesApi = new MovieApi("/data/new-movie-data.json");
    this.externalMovie = new MovieApi("/data/external-movie-data.json");
  }

  async main() {
    // Ici je récupère mes films de mes deux API
    const MoviesApi = await this.MoviesApi.getMovies();
    const externalMovieApi = await this.externalMovie.getMovies();

    // Instanciation de la classe Factory MoviesFactory
    const Movies = MoviesApi.map((movie) => new MoviesFactory(movie, "newApi"));

    const externalMovies = externalMovieApi.map(
      (movie) => new MoviesFactory(movie, "externalApi")
    );

    // Concaténation des deux tableaux de films
    const FullMovies = [...Movies, ...externalMovies];

    // Affichage des films
    FullMovies.forEach((movie) => {
      const Template = new MovieCard(movie);
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
