import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import About from './Routes/About';
import { Contacts } from './Routes/Contacts';
import Index from './Routes/Index';
import Admin from './Routes/Admin';
import LoginView from './Componets/Rutas/LoginView';
import DasboardView from './Componets/Rutas/DasboardView';
import EditProfileView from './Componets/Rutas/EditProfileView';
import ChoouseUsernane from './Componets/Rutas/ChoouseUsernane';
import PublicProfileview from './Componets/Rutas/PublicProfileview';
import Depuravionhtml from './Componets/Depuravionhtml'
import SignOut from './Componets/Rutas/SignOutView';




function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path="/About" element={<About />} />
          <Route path='/Contacts ' element={<Contacts />} />
          <Route path="*" element={<Index />} />

          <Route path='/Login' element={<LoginView />} />
          <Route path='/Dasboard' element={<DasboardView />} />
          <Route path='/EditarPerfil' element={<EditProfileView />} />
          <Route path='u/:username' element={<PublicProfileview />} />

          <Route path='/ChoouseUsernane' element={<ChoouseUsernane />} />
          <Route path='/Depuracion' element={<Depuravionhtml />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
