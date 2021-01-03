import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavContextProvider } from "./contexts/NavContext/NavContext";
import { MainPage } from "./pages/mainPage/MainPage";
import { ProjectPage } from "./pages/projectPage/ProjectPage";



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavContextProvider>
      <Route 
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false} >
            <Switch location={location} key={location.key}>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/projects">
                <ProjectPage />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
      </NavContextProvider>
    </BrowserRouter>
  );
}

export default App;
