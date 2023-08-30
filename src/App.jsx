import { useState } from 'react'
//routes
import { Routes , Route } from 'react-router-dom'
//styles
import './App.scss'
//components
import Header from './components/header/Header'
import AuthPanel from './components/header/AuthPanel'
import MainContent from './components/mainContent/MainContent'
function App() {


  return (
    <div className='app__main'>
      <Header />
      <main>
        <Routes>
          <Route path='/auth_panel/*' element={<AuthPanel />} />
          <Route path='/*' element={<MainContent />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
