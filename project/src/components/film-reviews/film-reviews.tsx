import {Review} from '../../types/review';
import {ReviewCard} from '../review-card/review-card';

export const FilmReviews = (props: {reviews: Review[]}): JSX.Element => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {props.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
    </div>
  </div>
);
