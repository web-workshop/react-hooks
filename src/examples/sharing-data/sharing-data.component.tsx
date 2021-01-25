import React, { FC } from "react";
import { Link, RouteComponentProps, Router } from "@reach/router";
import AttemptNav from "../../component/attempt-nav/attempt-nav.component";
import Attempt1 from "./attempt1/attempt1.component";
import Attempt2 from "./attempt2/attempt2.component";
import Attempt3 from "./attempt3/attempt3.component";

const Home: React.FC<RouteComponentProps> = () => {
  return <div>Todo</div>;
};

const SharingData: FC<RouteComponentProps> = ({ children }) => {
  return (
    <div>
      <AttemptNav>
        <Link to="attemp1">Attempt 1</Link>
        <Link to="attemp2">Attempt 2</Link>
        <Link to="attemp3">Attempt 3</Link>
      </AttemptNav>
      <div>
        <Router>
          <Home default />
          <Attempt1 path="attemp1" />
          <Attempt2 path="attemp2" />
          <Attempt3 path="attemp3" />
        </Router>
      </div>
    </div>
  );
};

export default SharingData;
