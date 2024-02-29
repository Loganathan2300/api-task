import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/DashBoard';
import Name from './pages/Name';
import { useState } from 'react';
import Email from './pages/Email';
import Error from './pages/Error';
function App() {
  const [spinner,setSpinner]= useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard-page' element={<Dashboard  spinner={spinner} setSpinner={setSpinner} />}/>
            <Route path='/name-page/:id' element={<Name/>}/>
            <Route path='/email-page/:id' element={<Email/>}/>
            <Route path='*' element={<Error/>}/>
            {/* <Route path='*' element={<Navigate to="/404"/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
