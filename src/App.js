import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
