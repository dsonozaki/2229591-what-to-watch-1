import React from 'react';
import {Link} from 'react-router-dom';

export function FilmCard(props:{src:string;alt:string;id:number;setId: () => void;resetId:() => void}): JSX.Element{
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={props.setId} onMouseOut={props.resetId}>
      <div className="small-film-card__image">
        <img src={props.src}
          alt={props.alt} width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className="small-film-card__link">{props.alt}</Link>
      </h3>
    </article>
  );
}
