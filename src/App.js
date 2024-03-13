import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";
import Dashboard from "./pages/DashBoard";
import Name from "./pages/Name";
import Email from "./pages/Email";
import Error from "./pages/Error";
import LoginPages from "./pages/LoginPages";
import PrivateRouter from "./PrivateRouter";
function App() {
  const token = localStorage.getItem("token");
  const [spinner, setSpinner] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPages/>}/>
          <Route path='/home' element={<PrivateRouter isSignedIn={token}><Layout/></PrivateRouter>}>
              <Route path="/home/dashboard-page"element={<Dashboard spinner={spinner} setSpinner={setSpinner}/>}/>
              <Route path="/home/name-page/:id" element={<Name />} />
              <Route path="/home/email-page/:id" element={<Email />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <Route path="/home" element={<Layout/>}>
            <Route path="/home/dashboard-page"element={<Dashboard spinner={spinner} setSpinner={setSpinner}/>}/>
            <Route path="/home/name-page/:id" element={<Name />} />
            <Route path="/home/email-page/:id" element={<Email />} />
          </Route> */}
            {/* <Route path='*' element={<Navigate to="/404"/>}/> */}
      {/* <Route element={<PrivateRoutes/>}>
              <Route path='/' element={<Users/>} />
              <Route path='/products' element={<Products/>} />
          </Route> */}