import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ProductRegistration from "./pages/ProductRegistration";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} index/>

        <Route path="product" element={<ProductRegistration />} />



      </Route>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App;