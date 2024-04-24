import { Route,  Routes } from "react-router-dom";
import "./App.css";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Posts from "./pages/Posts/Posts";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route  path="/" element={<LoginRegister />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>

    </div>
  );  
}

export default App;
