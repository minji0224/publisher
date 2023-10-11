import Layout from "./Layout";
// import Ex from "./Ex";
// import Ex1 from "./Ex1";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { lazy } from "react";
// import Parents from "./testEx/Parents";
// import Child from "./testEx/Child";

const Ex = lazy(() => {
  return new Promise<{default: React.ComponentType;}>((resolve) =>
    setTimeout(() => {
      resolve(import("./Ex"));
    }, 2000)
  );
});

const Ex2 = lazy(() => {
  return new Promise<{default: React.ComponentType;}>((resolve) =>
    setTimeout(() => {
      resolve(import("./Ex2"));
    }, 2000)
  );
});

const Child = lazy(() => {
  return new Promise<{default: React.ComponentType;}>((resolve) =>
    setTimeout(() => {
      resolve(import("./Child"));
    }, 2000)
  );
});

const Parents = lazy(()=> import("./Parents"))





const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Ex />} index />
          <Route path="Ex2" element={<Ex2 />}/>

          <Route path="testEx" element={<Parents />}>
            <Route index element={<Child />} />
            <Route element={<Ex2 />} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;