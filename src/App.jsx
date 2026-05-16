import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import ErrorBoundary from './components/ui/ErrorBoundary'
import NotFound from './components/ui/NotFound'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const EditorPage = lazy(() => import('./pages/EditorPage'))
const TemplateGallery = lazy(() => import('./pages/TemplateGallery'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename="/resume-creator">
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/templates" element={<TemplateGallery />} />
              <Route path="/editor" element={<EditorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
