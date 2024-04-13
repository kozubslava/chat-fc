import { Switch, Router, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path = "/home" component={HomePage}/>
      </Switch>
    </>
  );
}

export default App;
