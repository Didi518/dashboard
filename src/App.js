import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings, FiSidebar } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Ecommerce,
  Commandes,
  Calendrier,
  Employes,
  Empile,
  Pyramide,
  Clients,
  Ligne,
  Kanban,
  Aire,
  Barre,
  Camembert,
  Finance,
  SelecteurCouleur,
  CarteColore,
  Editeur,
} from './pages';
import './App.css';

const App = () => {
  const activeMenu = false;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Paramètres" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? 'md:ml-72' : 'flex-2'
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>

          <div>
            <Routes>
              {/* Tableau de bord */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/commandes" element={<Commandes />} />
              <Route path="/employes" element={<Employes />} />
              <Route path="/clients" element={<Clients />} />

              {/* Applis */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editeur" element={<Editeur />} />
              <Route path="/calendrier" element={<Calendrier />} />
              <Route
                path="/selecteur-couleurs"
                element={<SelecteurCouleur />}
              />

              {/* Graphiques */}
              <Route path="/ligne" element={<Ligne />} />
              <Route path="/aire" element={<Aire />} />
              <Route path="/barre" element={<Barre />} />
              <Route path="/camembert" element={<Camembert />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/carte-colore" element={<CarteColore />} />
              <Route path="/pyramide" element={<Pyramide />} />
              <Route path="/empile" element={<Empile />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
