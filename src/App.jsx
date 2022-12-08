import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RoutesPath from "./Routes/RoutesPath";

function App() {
  return ( 
    <div className="App">
      <NavBar/>
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
