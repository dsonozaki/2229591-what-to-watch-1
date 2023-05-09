import {ChangeEvent, useState} from 'react';

export function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 0,
    reviewText: '',
    stars:false,
    text: false
  });
  const radioChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value,stars: true});
  };
  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value,text:  value.length >= 50 && value.length <= 400});
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value={10}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value={9}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value={8}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value={7}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value={6}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value={5}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value={4}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value={3}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value={2}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value={1}
              onChange={radioChangeHandle}
            />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text"
            onChange={fieldChangeHandle} value={formData.reviewText}
          >
          </textarea>
          <div className="add-review__submit">
            <button disabled={!(formData.text && formData.stars)} className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
