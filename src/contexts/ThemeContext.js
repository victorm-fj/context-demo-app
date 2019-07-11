import React from "react";

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  state = { isDarkMode: false };

  toggleTheme = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
