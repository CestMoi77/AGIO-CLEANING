import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DienstenPage from './pages/DienstenPage'
import ParticulierPage from './pages/ParticulierPage'
import ZakelijkPage from './pages/ZakelijkPage'
import ContactPage from './pages/ContactPage'
import SEOPage from './pages/SEOPage'
import BedanktPage from './pages/BedanktPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="diensten" element={<DienstenPage />} />
          <Route path="particulier" element={<ParticulierPage />} />
          <Route path="zakelijk" element={<ZakelijkPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="professionele-reiniging" element={<SEOPage />} />
          <Route path="bedankt" element={<BedanktPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
