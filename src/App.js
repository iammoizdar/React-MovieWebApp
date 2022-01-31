import './App.css';
import Trending from './Pages/Trending';
import Popular from './Pages/Popular';
import Alltime from './Pages/Alltime';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
// import { Container } from '@material-ui/core';
import SimpleBottomNavigation from './components/Navigation';
function App() {
  return(
    <BrowserRouter>
    <div className="app">
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/popular" component={Popular} />
          <Route path="/alltime" component={Alltime} />
        </Switch>
      
    </div>
      <SimpleBottomNavigation/>
  </BrowserRouter>
  )
}

export default App;
