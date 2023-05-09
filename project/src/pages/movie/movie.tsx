import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Link, useParams} from 'react-router-dom';
import {Film} from '../../mocks/films';
import {FilmsList} from '../../components/films-list/films-list';


const getRating = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

export function Movie(props: {films: Film[]}): JSX.Element {
  const id = Number(useParams().id);
  const current = props.films.findIndex((film:Film)=> film.id === id);
  const film: Film = props.films[current];
  const otherFilms = [...props.films];
  otherFilms.splice(current,1);

  return (
    <body>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.background} alt={film.alt}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.alt}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={'/mylist'} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{props.films.length}</span>
                </Link>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.poster} alt={`${film.alt} poster`}
                width="218" height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.ratingScore}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{getRating(film.ratingScore)}</span>
                  <span className="film-rating__count">{`${film.ratings} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{`${film.description}`}</p>

                <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

                <p className="film-card__starring"><strong>{`Starring: ${film.starring}`}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films = {otherFilms.slice(0,4)}/>
        </section>

        <Footer/>
      </div>
    </body>);
}

