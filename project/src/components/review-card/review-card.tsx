import {Review} from '../../types/review';
import {getDate} from '../../utils/utils';

export const ReviewCard = (props: { review: Review }): JSX.Element => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{props.review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{props.review.user.name}</cite>
        <time className="review__date" dateTime="2016-12-20">{getDate(props.review.date)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{props.review.rating}</div>
  </div>);
