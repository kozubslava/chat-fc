import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />;
        <Route exact path='/profile' component={ProfilePage} />
      </Switch>
    </>
  );
}

export default App;
