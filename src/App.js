import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/Nav"
import Landing from "./Pages/Landing/Landing"
import Footer from "./components/Footer/Footer"
import Projects from "./Pages/Projects/Projects"



// import './App.css';



function App() {
  const [selectUser, setSelectedUser] = useState('')
  const baseURL = process.env.PUBLIC_URL
  return (
    <div>
        <Router>
        
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
     <Footer />
     </Router>
      </div>
  )
}

export default App;
