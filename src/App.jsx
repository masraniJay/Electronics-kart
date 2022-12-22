import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import RoutesPath from "./Routes/RoutesPath";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return ( 
    <div className="App">
      <NavBar/>
      <RoutesPath />
      <Footer />
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
