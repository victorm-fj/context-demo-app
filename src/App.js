import React, { Component } from "react";

// import Navbar from "./Navbar";
// import Form from "./Form";
// import PageContent from "./PageContent";
import ThemeProvider from "./contexts/ThemeContext";
import LanguageProvider from "./contexts/LanguageContext";
import FormFunctional from "./FormFunctional";
import NavbarFunctional from "./NavbarFunctional";
import PageContentFunctional from "./PageContentFunctional";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContentFunctional>
          <NavbarFunctional />
          <FormFunctional />
        </PageContentFunctional>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
