import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage/LandingPage';
import AdoptionPage from './routes/AdoptionPage/AdoptionPage';
import './App.css';

class App extends React.Component {
  render(){
      return (
        <div className="App">
          <main className="App-main">
            <Route exact path={'/'} component={LandingPage} />
            <Route exact path={'/adoption'} component={AdoptionPage} />
          </main>
        </div>
      );
    }
}
export default App;
