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
import { createContext, useEffect, useState } from "react";
import ThemeData from "./utilities/Theme/ThemeData";
import AddProduct from "./components/Products/AddProduct";
import UpdateProduct from "./components/Products/UpdateProduct";
import AllProducts from "./components/Products/AllProducts";
import Test from "./components/Test/Test";
const ThemeModeContext = createContext();
const ThemeDataContext = createContext();
function App() {
  const [dataThemeMode, setDataThemeMode] = useState("dark");
  const [dataThemeData, setDataThemeData] = useState({});
  useEffect(() => {
    const getThemeData = ThemeData("dark");
    setDataThemeData(getThemeData);
  }, []);

  const { background } = dataThemeData;
  return (
    <>
      <ThemeModeContext.Provider value={{ dataThemeMode, setDataThemeMode }}>
        <ThemeDataContext.Provider value={{ dataThemeData, setDataThemeData }}>
          <div className={`min-h-screen w-full ${background} text-slate-50`}>
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
                path="/test"
                element={
                  <TitleCompo headerTitle="Test">
                    <Test></Test>
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
                path="/products/allProducts"
                element={
                  <RequireAuth>
                    <TitleCompo headerTitle="All Product">
                      <AllProducts></AllProducts>
                    </TitleCompo>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="/products/addProduct"
                element={
                  <RequireAuth>
                    <TitleCompo headerTitle="Add New Product">
                      <AddProduct></AddProduct>
                    </TitleCompo>
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="/products/updateProduct/:id"
                element={
                  <RequireAuth>
                    <TitleCompo headerTitle="Update Product">
                      <UpdateProduct></UpdateProduct>
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
        </ThemeDataContext.Provider>
      </ThemeModeContext.Provider>
    </>
  );
}
export { ThemeDataContext, ThemeModeContext };
export default App;
