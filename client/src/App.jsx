import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ReviewPage from './pages/ReviewPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews/:slug" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
