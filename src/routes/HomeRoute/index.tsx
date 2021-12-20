import { FC, lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Home from "./component";

const GreetRoute = lazy(() => import("./routes/GreetRoute"));
const AboutRoute = lazy(() => import("./routes/AboutRoute"));
const ContactRoute = lazy(() => import("./routes/ContactRoute"));

const HomeRoute: FC = () => {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback="loading home">
      <Switch>
        <Route path={`${url}/about`} component={AboutRoute} />
        <Route path={`${url}/contact`} component={ContactRoute} />
        <Route path={`${url}/greet/:name`} component={GreetRoute} />
        <Route path={`${url}`} component={Home} />
      </Switch>
    </Suspense>
  );
};

export default HomeRoute;
