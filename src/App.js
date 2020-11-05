import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Landing} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
