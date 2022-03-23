import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import DisplayPost from "./pages/display post/DisplayPost";
import Write from "./pages/write/Write";

function App() {
    return (
        <>
      <NavBar />
      {/* <Home /> */}
      {/* <DisplayPost /> */}
        <Write />
    </>
  );
}

export default App;
