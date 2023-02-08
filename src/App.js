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
import TitleCompo from "./components/TitleCompo/TitleCompo";
function App() {
  return (
    <div className={`min-h-screen w-full bg-slate-800 text-slate-50`}>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <TitleCompo headerTitle="Home">
              <Home></Home>
            </TitleCompo>
          }
        ></Route>
        <Route
          path="/private"
          element={
            <RequireAuth>
              <TitleCompo headerTitle="Private">
                <PrivateRoute></PrivateRoute>
              </TitleCompo>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <TitleCompo headerTitle="Products">
                <Products></Products>
              </TitleCompo>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/logIn"
          element={
            <TitleCompo headerTitle="LogIn">
              <LogIn></LogIn>
            </TitleCompo>
          }
        ></Route>
        <Route
          path="*"
          element={
            <TitleCompo headerTitle="NotFound">
              <NotFound></NotFound>
            </TitleCompo>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
