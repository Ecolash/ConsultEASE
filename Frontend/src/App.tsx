import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth'
import { Docinfo } from './pages/DocinfoPage'
import { Patinfo } from './pages/PatinfoPage'
import { PatDash } from './pages/PatDashboard'
import { DocDash } from './pages/DocDashboard'
import { DocSpl } from './pages/Specialists'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/pat/info' element={<Patinfo />} />
        <Route path='/doc/info' element={<Docinfo />} />
        <Route path='/pat/dashboard' element={<PatDash />} />
        <Route path='/doc/dashboard' element={<DocDash />} />
        <Route path='/pat/dashboard/:type' element={<DocSpl />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
