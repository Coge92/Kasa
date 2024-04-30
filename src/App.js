import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import PageAPropos from './pages/PageAPropos';

import Page404 from './pages/Page404';
import PageLogement from './pages/PageLogement';

function App() {
 
  return <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home></Home>} />
          <Route path="/apropos" element={<PageAPropos></PageAPropos>} />
          <Route path="/logement/:id" element={<PageLogement></PageLogement>} />
          <Route path="*" element={<Page404></Page404>} />
        </Routes>
    </BrowserRouter>
    </>
}

export default App;