import React from "react";
import { ThemeContext } from "./contexts/ThemeContext";

class PageContent extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "black" : "white",
      height: "100vh",
      width: "100vw"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
