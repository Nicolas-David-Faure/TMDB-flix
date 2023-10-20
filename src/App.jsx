import { useEffect, useState } from 'react'
//routes
import { Routes , Route } from 'react-router-dom'
//redux
import { useDispatch } from 'react-redux'
import { setShowList } from './store/slice/userSlice'
//styles
import './App.scss'
//components
import Header from './components/header/Header'
import AuthPanel from './components/header/AuthPanel'
import MainContent from './components/mainContent/MainContent'
import Footer from './components/footer/Footer'

function App() {
 const dispatch = useDispatch()


  return (
    <div onClick={()=> dispatch(setShowList(false))} className='app__main'>
      <Header />
      <main>
        <Routes>
          <Route path='/auth_panel/*' element={<AuthPanel />} />
          <Route path='/*' element={<MainContent />}/>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
