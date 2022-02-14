import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/register" element={user?<Home/>:<Register/>}/>
        <Route exact path="/login" element={user?<Home/>:<Login/>}/>
        <Route exact path="/write" element={user?<Home/>:<Write/>}/>
        <Route exact path="/settings" element={user?<Settings/>:<Write/>} />  
        <Route exact path="/studying" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
