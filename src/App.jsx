import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

import Header from './layout/Header/header'
import Home from './pages/Home/Home'
import ContactForm from './pages/ContactForm/ContactForm'
import Error from './pages/Error/Error'

// Définition des langues disponibles pour l'internationalisation (i18n)
// L'objet lngs contient les configurations pour chaque langue supportée
const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' }
};

function App() {
  // Utilisation du hook useTranslation pour accéder aux fonctionnalités d'i18n
  // t: fonction pour traduire les textes
  // i18n: objet permettant de manipuler la configuration d'internationalisation
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* Boutons de sélection de langue */}
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  )
}
