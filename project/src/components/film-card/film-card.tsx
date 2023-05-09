import {useState} from 'react';
import {Link} from 'react-router-dom';
import {VideoPlayer} from '../video-player/video-player';
let timerId: NodeJS.Timeout;
export function FilmCard(props:{src:string;alt:string; video:string;id:number;setId: () => void;resetId:() => void}): JSX.Element{
  const [hovered,setHovered] = useState(false);

  function onHover() {
    timerId = setTimeout(() => setHovered(true),1000);
    props.setId();
  }

  function onOut() {
    clearTimeout(timerId);
    setHovered(false);
    props.resetId();
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onHover} onMouseOut={onOut}>
      <div className="small-film-card__image">
        {hovered ?
          <VideoPlayer poster={props.src} sound={false} video={props.video} width={280} height={175}/> : <img src={props.src} alt={props.alt} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.id}`} className="small-film-card__link">{props.alt}</Link>
      </h3>
    </article>
  );
}
