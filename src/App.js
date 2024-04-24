import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PageAPropos from './pages/PageAPropos';

import Page404 from './pages/Page404';
import PageLogement from './pages/PageLogement';

const router = createBrowserRouter([
  /* Création d'un tableau pour définir les routes */ 
      { /* Première route entre accolades (objet) pour définir des paramètres de la route */
        path: '/',
        element: <Home></Home>,
        errorElement: <Page404/>,
      },
      { 
      path: '/apropos',
      element: <PageAPropos></PageAPropos>,
      },
      { 
        path: '/logement/:id',
        element: <PageLogement></PageLogement>,
      },
    ]
)

function App() {
  return <>
    <RouterProvider router={router}></RouterProvider> {/* Pour charger le router avec les liens */}
    </>
}

export default App;
