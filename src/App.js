import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './components/Contactus';
import Viewcomments from './components/View';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Contactus></Contactus>}/>
          <Route path="/viewcomments" element={<Viewcomments></Viewcomments>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
