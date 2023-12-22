import './App.css';
import ExploreNavbar from './components/navbar/navbar';
import ExploreSection from './components/exploreSection/exploreSection';
import MainSection from './components/mainSection/mainSection';
import Footer from './components/footer/footer';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme, GlobalStyles } from "./components/theme"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const  [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
 
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <ExploreNavbar isDark={isDarkTheme} ></ExploreNavbar>
      <button className={isDarkTheme ? "theme-btn dark float-start mb-10 mx-3 p-2" : "theme-btn light float-start mb-10 mx-3 p-2"} onClick={toggleTheme}>
        {isDarkTheme ?
          <span >Dark Mode</span> :
          <span >Light Mode</span>}
        </button>
      <ExploreSection isDark={isDarkTheme}>
      </ExploreSection>
      <MainSection isDark={isDarkTheme}></MainSection>
      <Footer isDark={isDarkTheme}/>
      </ThemeProvider>

    

  );
}

export default App;
