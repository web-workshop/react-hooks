import * as React from "react";
import styleClasses from "./attempt-nav.module.css";

const AttemptNav: React.FC<unknown> = ({ children }) => {
  return <nav className={styleClasses.nav}>{children}</nav>;
};

export default AttemptNav;
