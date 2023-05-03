import {MainPage} from '../../pages/main-page/main-page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {SignIn} from '../../pages/sign-in/sign-in';
import {PrivateRouter} from '../private/private-router';
import {MyList} from '../../pages/my-list/my-list';
import {PageNotFound} from '../../pages/page-404/page-404';
import {Movie} from '../../pages/movie/movie';
import {AddReview} from '../../pages/add-review/add-review';
import {Player} from '../../pages/player/player';

function App(props: { name: string; genre: string; year: number; poster: string; bg: string }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<PageNotFound/>}
        />
        <Route path='/'>
          <Route index element={<MainPage {...props}/>}/>
          <Route path='login' element={<SignIn/>}/>
          <Route path='mylist' element={<PrivateRouter hasAccess={false}>{<MyList/>}</PrivateRouter>}/>
          <Route path='films/'>
            <Route path=':id/'>
              <Route index element={<Movie/>}/>
              <Route path="review" element={<AddReview/>}/>
            </Route>
          </Route>
          <Route path="player/:id" element={<Player/>}/>
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;
