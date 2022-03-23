import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import DisplayPost from "./pages/display post/DisplayPost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <DisplayPost /> */}
      {/* <Write /> */}
      {/* <Settings /> */}
      {/* <Login /> */}
      <Register />
    </>
  );
}

export default App;
