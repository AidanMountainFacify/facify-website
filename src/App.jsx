import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          {/* Single-page site for now: only "/" is routed. The Features,
              Pricing, About, Help, Blog, and Contact pages still live in
              src/pages — restore a page by re-adding its import and route
              here (Blog needs both /blog and /blog/:slug). Note those pages
              were written against the old light theme and still carry
              bg-white / border-black utilities, so they need a dark pass
              before they can be put back. */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
