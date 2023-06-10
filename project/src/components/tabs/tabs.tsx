import {useState} from 'react';

import {FilmOverview} from '../film-overview/film-overview';
import {FilmDetails} from '../film-details/film-details';
import {FilmReviews} from '../film-reviews/film-reviews';
import {Film} from '../../types/film';
import {Review} from '../../types/review';


enum TabNames {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export const Tabs = (props: { film: Film;
  reviews: Review[]; }): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(TabNames.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item${ selectedTab}` === TabNames.Overview ? ' film-nav__item--active' : ''}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Overview)}>Overview</a>
          </li>
          <li className={`film-nav__item${ selectedTab}` === TabNames.Details ? ' film-nav__item--active' : ''}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Details)}>Details</a>
          </li>
          <li className={`film-nav__item${ selectedTab}` === TabNames.Reviews ? ' film-nav__item--active' : ''}>
            <a className="film-nav__link" onClick={() => setSelectedTab(TabNames.Reviews)}>Reviews</a>
          </li>
        </ul>
      </nav>

      {selectedTab === TabNames.Overview && <FilmOverview film={props.film} />}
      {selectedTab === TabNames.Details && <FilmDetails film={props.film} />}
      {selectedTab === TabNames.Reviews && <FilmReviews reviews={props.reviews} />}
    </div>
  );
};
