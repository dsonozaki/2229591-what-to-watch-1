export function PageNotFound(): JSX.Element {
  return (
    <body>
      <div className="page-content">
        <div className="error-container">
          <img src="/img/icons/Funny-404-Error-SVG-Vector-Icon.svg" alt="Error 404"></img>
          <h1>Error 404. Page not found</h1>
          <a href="/">Back to main page</a>
        </div>
        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </body>
  );
}
