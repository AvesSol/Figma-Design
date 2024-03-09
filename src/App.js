import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="Wrapper w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto">
       <Navbar/>
       <Home/>
       <Footer/>
    </div>
  );
}

export default App;
