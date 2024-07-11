/**
 * @class MoviesFactory
 * @description Factory pour instancier des films
   @returns {Movie} - retourne un film
 */
class MoviesFactory {
  /**
   * @constructor MoviesFactory
   * @description Constructeur de la classe MoviesFactory
   * @param {Object} data - Données du film
   * @param {String} type - Type de film
   */
  constructor(data, type) {
    // Ici je crée une instance de film en fonction du type
    if (type === "oldApi") {
      return new OldMovie(data);
    } else if (type === "newApi") {
      return new Movie(data);
    } else if (type === "externalApi") {
      return new ExternalMovie(data);
    } else {
      // Si le type de film n'est pas reconnu, je lève une erreur
      console.error("Type de film inconnu", data, type);
      throw new Error("Type de film inconnu");
    }
  }
}
