import App from 'example/app';
import Session from 'example/session';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

export default Router(
  <Route handler={App}>
    <Route name="session" path="session/:sessionId" handler={Session}/>
  </Route>
)
