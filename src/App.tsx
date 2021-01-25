import * as React from "react";
import { Link, Router } from "@reach/router";
import styleClasses from "./app.module.css";
import SharingData from "./examples/sharing-data/sharing-data.component";
import Home from "./home/home.component";
function App() {
  return (
    <div className={styleClasses.app}>
      <nav className={styleClasses.nav}>
        <Link to="/">Home</Link>
        <Link to="/sharing-data">Sharing Data</Link>
      </nav>
      <main>
        <Router>
          <Home path="/" />
          <SharingData path="sharing-data/*" />
        </Router>
      </main>
    </div>
  );
}

export default App;
