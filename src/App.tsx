import React, { Fragment } from "react";
import "react-nice-dates/build/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { IRoutes } from "./models";
import { routes } from "./routes";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: IRoutes, idx: number) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component || Fragment;
          return (
            <Route
              key={`route-${idx}`}
              path={route.path}
              exact={route.exact}
              render={(props: any) => (
                <Guard>
                  <Layout>
                    <Component {...props} />
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
