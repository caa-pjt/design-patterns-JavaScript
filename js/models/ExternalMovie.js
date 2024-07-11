/**
 * @class ExternalMovie
 * @description Class pour instancier un film externe
 * @returns {ExternalMovie} - return un film externe
 */
class ExternalMovie {
  constructor(data) {
    this._title_fr = data.title_fr;
    this._title_en = data.title_en;
    this._synopsis = data.synopsis;
    this._media = data.medias;
    this._infos = data.infos;
  }

  get title() {
    return this._title_fr ? this._title_fr : this._title_en;
  }

  get synopsis() {
    return this._synopsis;
  }

  get duration() {
    return this._infos.duration;
  }

  get released_in() {
    return this._infos.released_in;
  }

  get picture() {
    return `/assets/${this._media.picture}`;
  }

  get thumbnail() {
    return `/assets/${this._media.thumbnail}`;
  }
}
