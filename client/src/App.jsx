import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReviewPage from './pages/ReviewPage'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews/:slug" element={<ReviewPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

