import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import { Contacts } from './Routes/Contacts';
import Index from './Routes/Index';
import Admin from './Routes/Admin';




import LoginView from './Componets/Rutas/LoginView';
import DasboardView from './Componets/Rutas/DasboardView';
import EditProfileView from './Componets/Rutas/EditProfileView';
import PublicProfileview from './Componets/Rutas/PublicProfileview';
import SignOutView from './Componets/Rutas/SignOutView';
import ChoouseUsernane from './Componets/Rutas/ChoouseUsernane';
import { Links } from './Componets/Links';
import { Buscadorhome } from './Componets/Buscadorhome';
import Depuravionhtml from './Componets/Depuravionhtml';




function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='Admin' element={<Admin />} />
          <Route path="About" element={<About />} />
          <Route path='Contacts ' element={<Contacts />} />
          <Route path="*" element={<Index />} />

          <Route path='Login' element={<LoginView />} />
          <Route path='Dasboard' element={<DasboardView />} />
          <Route path='Dasboard/profile' element={<EditProfileView />} />
          <Route path='/:username' element={<ChoouseUsernane />} />
          <Route path='signout' element={<SignOutView />} />
          <Route path='ChoouseUsernane' element={<ChoouseUsernane />} />
          <Route path='PublicProfileview' element={<PublicProfileview />} />
          <Route path='/dasboard/Links' element={<Links />} />
          <Route path='Buscadorhome' element={<Buscadorhome />} />
          <Route path='Depuravionhtml' element={<Depuravionhtml />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
