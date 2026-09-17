import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Marketing } from './pages/Marketing'
import { GlobalTrade } from './pages/GlobalTrade'
import { Podcasts } from './pages/Podcasts'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-vellum text-obsidian">
        <AnnouncementBar />
        <Nav />
        <main className="flex-1">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
