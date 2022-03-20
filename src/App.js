import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CardComponent from "./components/CardComponent"

function App() {
  return (
    <div className="App">
    <Router>
      <Routes> 
        <Route exact path="/" element={ <Home/>} />
        {/* <Route ><CardComponent/> </Route> */}
      </Routes>
    
    </Router>
      
    </div>
  );
}

export default App;
