import {getRating} from '../../utils/utils';
import {Film} from '../../types/film';

export const FilmOverview = (props: {film: Film}): JSX.Element => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{props.film.ratingScore}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRating(props.film.ratingScore)}</span>
        <span className="film-rating__count">{props.film.ratings} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{props.film.description}</p>

      <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

      <p className="film-card__starring">
        <strong>Starring: {props.film.starring}</strong>
      </p>
    </div>
  </>
);
