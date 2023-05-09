import {MainPage} from '../../pages/main-page/main-page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignIn} from '../../pages/sign-in/sign-in';
import {PrivateRouter} from '../private/private-router';
import {MyList} from '../../pages/my-list/my-list';
import {PageNotFound} from '../../pages/page-404/page-404';
import {Movie} from '../../pages/movie/movie';
import {AddReview} from '../../pages/add-review/add-review';
import {Player} from '../../pages/player/player';
import {Film} from '../../mocks/films';

function App(props: { films: Film[]}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<PageNotFound/>}
        />
        <Route path='/'>
          <Route index element={<MainPage films={props.films} promo={props.films[0]}/>}/>
          <Route path='login' element={<SignIn/>}/>
          <Route path='mylist' element={<PrivateRouter hasAccess={false}>{<MyList films={props.films}/>}</PrivateRouter>}/>
          <Route path='films/'>
            <Route path=':id/'>
              <Route index element={<Movie films={props.films}/>}/>
              <Route path="review" element={<AddReview films={props.films}/>}/>
            </Route>
          </Route>
          <Route path="player/:id" element={<Player films={props.films}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
