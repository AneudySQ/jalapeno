import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Routes/About';
import { Contacts } from './Routes/Contacts';
import Index from './Routes/Index';
import Admin from './Routes/Admin';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<About />} />
          <Route path='Admin' element={<Admin />} />
          <Route path="About" element={<About />} />
          <Route path='Contacts ' element={<Contacts  />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
