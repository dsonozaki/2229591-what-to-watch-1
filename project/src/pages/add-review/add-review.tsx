import {Link, useParams} from 'react-router-dom';
import {ReviewForm} from '../../components/review-form/review-form';
import {Film} from '../../types/film';

export function AddReview(props: {films: Film[]}): JSX.Element {
  const id = Number(useParams().id);
  const current = props.films.find((film:Film)=> film.id === id);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={current?.background} alt={current?.alt} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={current ? `/films/${current.id}` : ''} className="breadcrumbs__link">{current?.alt}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={current ? `/films/${current.id}/review` : ''} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/login'} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={current?.poster} alt={current ? `${current.alt} poster` : ''} width="218" height="327" />
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
}
