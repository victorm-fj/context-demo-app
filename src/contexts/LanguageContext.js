import React from "react";

export const LanguageContext = React.createContext();

class LanguageProvider extends React.Component {
  state = { language: "french" };

  changeLanguage = e => {
    this.setState({ language: e.target.value });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageProvider;
