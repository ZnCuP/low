import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
import InsightsPage from './pages/InsightsPage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import BlogsPage from './pages/BlogsPage'
import PodcastsPage from './pages/PodcastsPage'
import VideoAudioPage from './pages/VideoAudioPage'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/video-audio" element={<VideoAudioPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-wrapper">
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  )
}

export default App
