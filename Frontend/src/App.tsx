import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth'
import { Docinfo } from './pages/DocinfoPage'
import { Patinfo } from './pages/PatinfoPage'
import { PatDash } from './pages/PatDashboard'
import { DocDash } from './pages/DocDashboard'
import { DocSpl } from './pages/Specialists'
import { PatAppointments } from './pages/PatAppointments'
import { Doc_Profile } from './pages/DocProfile'
import { DocAppointments } from './pages/DocAppointments'
import { Give_Feedback } from './pages/GiveFeedback'
import { Pat_Profile } from './pages/PatProfile'
import { Doc_Feedbacks } from './pages/DocFeedbacks'
import { Doc_FeedbackForm } from './pages/Feedback_Form'
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
        <Route path='/pat/appointments' element={<PatAppointments />} />
        <Route path='/doc/profile' element={<Doc_Profile />} />
        <Route path='/doc/appointments' element={<DocAppointments />} />
        <Route path='/pat/feedback/:id' element={<Give_Feedback />} />
        <Route path='/pat/profile' element={<Pat_Profile />} />
        <Route path='/doc/feedbacks' element={<Doc_Feedbacks />} />
        <Route path='/doc/feedbacks/:id' element={<Doc_FeedbackForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
