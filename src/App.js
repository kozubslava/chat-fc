import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import RegistrationPage from "./pages/RegistrationPage";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path = '/' component={HomePage} />;
        <Route exact path = '/profile' component={ProfilePage} />
        <Route exact path = '/registration' component={RegistrationPage}/>
      </Switch>
    </>
  );
}

export default App;
