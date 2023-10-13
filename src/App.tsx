import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProductForm from "./modules/product/ProductForm";
// import ProductList from "./modules/product/ProductList";
import { lazy } from "react";

const ProductList = lazy(()=> import("./modules/product/ProductList/index"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index/>
          <Route path="productForm" element={<ProductForm />} />
          <Route path="productList" element={<ProductList />} />



        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App;