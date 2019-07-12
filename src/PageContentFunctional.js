import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const PageContentFunctional = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "black" : "white",
    height: "100vh",
    width: "100vw"
  };
  return <div style={styles}>{children}</div>;
};

export default PageContentFunctional;
