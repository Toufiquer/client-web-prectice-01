import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className={`min-h-screen w-full bg-slate-800 text-slate-50`}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/private"
          element={
            <RequireAuth>
              <PrivateRoute></PrivateRoute>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
