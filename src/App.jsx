import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import { Contacts } from './Routes/Contacts';
import Index from './Routes/Index';
import Admin from './Routes/Admin';

import LoginView from './Componets/Rutas/LoginView';
import DasboardView from './Componets/Rutas/DasboardView';
import EditProfileView from './Componets/Rutas/EditProfileView';
import PublicProfileview from './Componets/Rutas/EditProfileView';
import SignOutView from './Componets/Rutas/EditProfileView';
import ChoouseUsernane from './Componets/Rutas/ChoouseUsernane';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='Admin' element={<Admin />} />
          <Route path="About" element={<About />} />
          <Route path='Contacts ' element={<Contacts />} />
          <Route path="*" element={<Index />} />

          <Route path='LoginView' element={<LoginView />} />
          <Route path='DasboardView' element={<DasboardView />} />
          <Route path='EditProfileView' element={<EditProfileView />} />
          <Route path='PublicProfileview' element={<PublicProfileview />} />
          <Route path='SignOutView' element={<SignOutView />} />
          <Route path='ChoouseUsernane' element={<ChoouseUsernane />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
