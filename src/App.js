import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetaill from "./Pages/ServiceDetaill/ServiceDetaill";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import AddService from "./Pages/AddService/AddService";
import MangeServices from "./Pages/MangeServices/MangeServices";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home></Home>}></Route>
         
        
        <Route path="/home" element={<Home></Home>}></Route>
         
      
        <Route path="/service/:serviceid" element={<ServiceDetaill></ServiceDetaill>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>
      }></Route>
        <Route path="/addservice" element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>
      }></Route>
        <Route path="/manage" element={<RequireAuth>
          <MangeServices></MangeServices>
        </RequireAuth>
      }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
