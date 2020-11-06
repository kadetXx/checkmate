import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import SignUp from './pages/Signup'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/join" component={SignUp} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
