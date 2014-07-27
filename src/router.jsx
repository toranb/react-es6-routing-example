import App from 'example/app';
import Session from 'example/session';

var Route = ReactRouter.Route;
var Routes = ReactRouter.Routes;

var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="session" path="/session/:sessionId" handler={Session}/>
    </Route>
  </Routes>
)

export default routes;
