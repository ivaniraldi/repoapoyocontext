import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import Contador from "./components/Contador";
import Sticker from "./views/Sticker";


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contador" element={<Contador/>}/>
        <Route path="/sticker/:id" element={<Sticker/>}/>
      </Routes>
    </div>
  );
};
export default App;
