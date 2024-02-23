import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/DashBoard';
import Name from './pages/Name';
import { useState } from 'react';
function App() {
  const [spinner,setSpinner]= useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dashboard-page' element={<Dashboard spinner={spinner} setSpinner={setSpinner} />}/>
            <Route path='name-page' element={<Name/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
