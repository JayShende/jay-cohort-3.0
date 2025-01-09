
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { BoxCompo } from './components/box-component'
import { HomePage } from './pages/home-page'
import { ChatPage } from './pages/chat-page'

function App() {

  return (
    <div className="bg-[#1b2c29] w-screen h-screen flex justify-center ">
     
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/chatPage'element={<ChatPage/>}/>
      </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
