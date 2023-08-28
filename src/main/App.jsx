import { useState } from 'react'
//routes
import { Routes , Route } from 'react-router-dom'
//styles
import './styles/App.scss'
//components
import Header from '../components/Header'
import AuthPanel from '../components/AuthPanel'
import MainContent from '../components/MainContent'
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
