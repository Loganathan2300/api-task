import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/DashBoard';
import Name from './pages/Name';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='dashboard-page' element={<Dashboard/>}/>
            <Route path='name-page' element={<Name/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
