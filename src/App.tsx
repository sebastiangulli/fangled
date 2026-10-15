import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { useReveal } from './lib/useReveal'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Marketing } from './pages/Marketing'
import { GlobalTrade } from './pages/GlobalTrade'
import { Podcasts } from './pages/Podcasts'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'

function Page({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  return <div key={pathname} className="animate-page">{children}</div>
}

function App() {
  useReveal()
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          <Page>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/marketing-and-sales-consulting" element={<Marketing />} />
            <Route path="/global-trade-and-sourcing" element={<GlobalTrade />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Page>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
