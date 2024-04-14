import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import RegistrationPage from "./pages/RegistrationPage";
import Footer from "./components/Footer/indexs";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path = '/' component={HomePage} />;
        <Route exact path = '/profile' component={ProfilePage} />
        <Route exact path = '/registration' component={RegistrationPage}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
