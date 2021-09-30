import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  // localhost:3000

  return (
    <Layout>
      <Switch> {/*This looks for just the first one that matches*/}
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>);
}

export default App;
