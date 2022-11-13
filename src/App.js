import { HashRouter as Router ,Routes,Route } from 'react-router-dom'
import React from "react";
import Navigation from "./Navigation/Navigation.components";
import Home from "./Routes/Home/Home.components";
import About from "./Routes/AboutUs/About.components";
import ContactUs from "./Routes/ContactUs/ContactUs.components";
import ErrorPage from "./Error/ErrorPage";
import { GlobalStyle } from "./Styles/GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import Header from "./Routes/Home/Header";
import Footer from "./Routes/Home/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"


const App = () => {

  const theme ={
    colors: {
      heading:  "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#7ED957",

      bg: "black",
      footer_bg: "#002906",
      btn: "#7ED957",
      border: "rgb(76,184,21)",
      hr: "#ffffff",
      gradient: "linear-gradient(90deg, rgba(57,113,31,1) 16%, rgba(111,215,16,1) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };


  


  return (
  <ThemeProvider theme={theme}>
    <Router basename="/">
      <GlobalStyle />
      <Header />
      <ScrollToTop />

      <Routes>
        {/* <Route path='/' element={<Navigation/>} /> */}
        <Route exact path='/' index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        
        <Footer />
    </Router>
  </ThemeProvider>
  );
}

export default App;
