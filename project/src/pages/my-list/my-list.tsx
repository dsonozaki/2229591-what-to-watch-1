import {Header} from '../../components/header/header';
import {Footer} from '../../components/footer/footer';
import {Film} from '../../mocks/films';
import {FilmsList} from '../../components/films-list/films-list';

export function MyList(props: {films: Film[]}): JSX.Element {
  return (

    <div className="user-page">
      <Header/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList films={props.films}/>
  )
      </section>

      <Footer/>
    </div>);
}
