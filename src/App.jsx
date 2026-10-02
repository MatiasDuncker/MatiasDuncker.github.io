import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import NotFound from './pages/NotFound.jsx'

// Tabla de rutas de la aplicación. Layout envuelve a todas las páginas (navbar + footer).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portafolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}