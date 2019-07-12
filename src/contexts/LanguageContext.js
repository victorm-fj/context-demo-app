import React, { useState } from "react";

export const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("french");

  const changeLanguage = e => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
