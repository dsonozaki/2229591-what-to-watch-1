import {Film} from '../../mocks/films';
import {FilmCard} from '../film-card/film-card';
import {useState} from 'react';

export function FilmsList(props: {films: Film[]}): JSX.Element {
  const [currentId, setId] = useState(-1);
  const changeActiveCard = (id: number) => {
    if (currentId !== id) {
      setId(id);
    }
  };
  return (
    <div className="catalog__films-list">
      {props.films.slice(0,8).map((film:Film) => (
        <FilmCard key={film.id} src={film.src} alt={film.alt} id={film.id} setId={()=>changeActiveCard(film.id)} resetId={()=>changeActiveCard(-1)}/>
      ))}
    </div>
  );
}
