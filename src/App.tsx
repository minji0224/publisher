import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { lazy } from "react";
import Login from "./pages/Login/intex";
// import BookForm from "./modules/book/BookForm";

const BookList = lazy(()=> import("./modules/book/BookList/index"))
const BookForm = lazy(()=> import("./modules/book/BookForm/index"))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index/>
          <Route path="bookForm" element={<BookForm />} />
          <Route path="bookList" element={<BookList />} />
        </Route>
        
      </Routes> 
    </BrowserRouter>
  )
}

export default App;