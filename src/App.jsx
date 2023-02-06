import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Admin from './Pages/Admin';
import { Contacts } from './Pages/Contacts';
import Index from './Pages/Index';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
