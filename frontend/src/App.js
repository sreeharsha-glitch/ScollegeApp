//SJSU CMPE 138 Spring 2022 TEAM2
import { Sign } from "crypto";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import routes from './routes/index.js'


const RenderRoute = (route) => {
  const history = useHistory();

  document.title = route.title || "Scollege";

  if (route.needsAuth) {
    history.push("/signin");
  }
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};

export default function RouterApp() {
  return (
    <Router>
      <div>
        <Switch>
          {routes.map((route, index) => (
            <RenderRoute {...route} key={index} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
