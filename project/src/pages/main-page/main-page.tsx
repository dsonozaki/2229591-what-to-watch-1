import {FilmCard} from '../../components/film-card/film-card';

export function MainPage(props: {name:string;genre:string;year:number;poster:string;bg:string}): JSX.Element{
  return (
    <body>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.bg} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.poster} alt={props.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmCard src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald"></FilmCard>
            <FilmCard src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody"></FilmCard>
            <FilmCard src="img/macbeth.jpg" alt="Macbeth"></FilmCard>
            <FilmCard src="img/aviator.jpg" alt="Aviator"></FilmCard>
            <FilmCard src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin"></FilmCard>
            <FilmCard src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows"></FilmCard>
            <FilmCard src="img/revenant.jpg" alt="Revenant"></FilmCard>
            <FilmCard src="img/johnny-english.jpg" alt="Johnny English"></FilmCard>
            <FilmCard src="img/shutter-island.jpg" alt="Shutter Island"></FilmCard>
            <FilmCard src="img/pulp-fiction.jpg" alt="Pulp Fiction"></FilmCard>
            <FilmCard src="img/no-country-for-old-men.jpg" alt="No Country for Old Men"></FilmCard>
            <FilmCard src="img/snatch.jpg" alt="Snatch"></FilmCard>
            <FilmCard src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom"></FilmCard>
            <FilmCard src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet"></FilmCard>
            <FilmCard src="img/midnight-special.jpg" alt="Midnight Special"></FilmCard>
            <FilmCard src="img/war-of-the-worlds.jpg" alt="War of the Worlds"></FilmCard>
            <FilmCard src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited"></FilmCard>
            <FilmCard src="img/orlando.jpg" alt="Orlando"></FilmCard>
            <FilmCard src="img/mindhunter.jpg" alt="Mindhunter"></FilmCard>
            <FilmCard src="img/midnight-special.jpg" alt="Midnight Special"></FilmCard>
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </body>);
}