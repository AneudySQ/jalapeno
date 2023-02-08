import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import { Contacts } from './Pages/Contacts';
import Index from './Pages/Index';
import Admin from './Pages/Admin';
import { Profile } from './Pages/Componets/Dashboard/Profile';
import { ChooseUserNameView } from './Pages/Componets/Dashboard/ChooseUserNameView';
import { PublicProfileView  } from './Pages/Componets/Dashboard/PublicProfileView ';
import SignoutView from './Pages/Componets/Dashboard/SignoutView';
import LoginView from './Pages/Componets/Dashboard/LoginView';
import Signout from './Pages/Componets/Dashboard/Signout';
import Dashboard from './Pages/Componets/Dashboard/Dashboard';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='Admin' element={<Admin />} />
          <Route path="About" element={<About />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path='LoginView' element={<LoginView />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="ChooseUserNameView" element={<ChooseUserNameView />} />
          <Route path="PublicProfilView " element={<PublicProfileView  />} />
          <Route path='SignoutView' element={<SignoutView />} />
          <Route path='Signout' element={<Signout />} />
          <Route path='Contacts ' element={<Contacts  />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
