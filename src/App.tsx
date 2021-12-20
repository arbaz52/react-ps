import { FC, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const NotFoundRoute = lazy(() => import("./routes/NotFoundRoute"));
const HomeRoute = lazy(() => import("./routes/HomeRoute"));

const App: FC = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomeRoute} />
          <Route path="" component={NotFoundRoute} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
