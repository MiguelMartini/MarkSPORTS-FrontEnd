import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      
    </Routes>
  )
}

export default AppRoutes