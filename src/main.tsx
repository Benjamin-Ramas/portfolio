import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './tsx/page/home'
import AboutMe from './tsx/page/about-me'
import NotFound from './tsx/page/not-found'
import Header from './tsx/components/header'
import './css/main.css'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <div className='vignette'></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path="/error" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
