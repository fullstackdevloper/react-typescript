import * as React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import XxxHeader from "./components/XxxHeader/XxxHeader";
import XxxHomePage from "./pages/XxxHomePage/XxxHomePage";
import XxxStreamPage from "./pages/XxxStreamPage/XxxStreamPage";
import XxxPageNotFoundPage from "./pages/XxxPageNotFoundPage/XxxPageNotFoundPage";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Router basename={process.env.PUBLIC_URL}>
          <XxxHeader />
          <div>
            <Switch>
              <Route exact path="/" component={XxxHomePage} />
              <Route path="/stream" component={XxxStreamPage} />
              <Route component={XxxPageNotFoundPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
