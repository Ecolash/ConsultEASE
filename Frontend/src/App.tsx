import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth'
import { Docinfo } from './pages/DocinfoPage'
import { Patinfo } from './pages/PatinfoPage'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/pat/info' element={<Patinfo />} />
        <Route path='/doc/info' element={<Docinfo />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
