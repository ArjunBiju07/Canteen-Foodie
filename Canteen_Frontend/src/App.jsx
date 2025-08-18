import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Guesthome from './Guest/Guesthome';
import Guestmenu from './Guest/Guestmenu';
import Guestorders from './Guest/Guestorders';
import Guestprofile from './Guest/Guestprofile';
import Guestabout from './Guest/Guestabout';
import AdminHome from './Admin/Adminhome';
import Adminlunch from './Admin/Adminlunch';
import Adminbreakfast from './Admin/Adminbreakfast';
import Adminevening from './Admin/Adminevening';
import Adminallorders from './Admin/Adminallorders';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Guesthome />}></Route>
        <Route path='/guestmenu' element={<Guestmenu />}></Route>
        <Route path='/guestorders' element={<Guestorders />}></Route>
        <Route path='/guestprofile' element={<Guestprofile />}></Route>
        <Route path='/guestabout' element={<Guestabout />}></Route>
        <Route path='/adminhome' element={<AdminHome />}></Route>
        <Route path='/adminlunch' element={<Adminlunch />}></Route>
        <Route path='/adminbreakfast' element={<Adminbreakfast />}></Route>
        <Route path='/adminevening' element={<Adminevening />}></Route>
        <Route path='/adminallorders' element={<Adminallorders />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
