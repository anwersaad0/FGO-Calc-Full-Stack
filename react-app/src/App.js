import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PlayMediaPage from "./components/PlayMedia";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/media/:mediaId">
            <PlayMediaPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>
            Page not found
          </Route>
        </Switch>
      )}

      <div className="global-footer">
        <div className="copyright">© Brainfreezerrr Studios, 2022</div>
        <a className="do-not-sell">Do Not Sell My Personal Information</a>
      </div>
    </>
  );
}

export default App;
