import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProductForm from "./modules/product/ProductForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index/>
          <Route path="product" element={<ProductForm />} />



        </Route>
      </Routes> 
    </BrowserRouter>
  )
}

export default App;