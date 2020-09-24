import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Router from "./components/Route";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter >
      <div>
        <Nav />
        <Switch>
          <Route exact path="/books" component={Books} />

          <Route path="/books/:id">
            Details component!!!!
  <Detail />
          </Route>

          <Route exact path="/">
            <Books />
          </Route>

          <NoMatch to="/NoMatch" />


          <div>
            I am outside of Route
    </div>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
