import {Footer} from '../../components/footer/footer';
import {Link} from 'react-router-dom';

export function PageNotFound(): JSX.Element {
  return (
    <body>
      <div className="page-content">
        <div className="error-container">
          <img src="/img/icons/Funny-404-Error-SVG-Vector-Icon.svg" alt="Error 404"></img>
          <h1>Page not found</h1>
          <Link to="/">Back to main page</Link>
        </div>
        <Footer/>
      </div>
    </body>
  );
}
