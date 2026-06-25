import {Routes, Route} from 'react-router-dom'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'
import Vender from '../pages/vender'
import RotaProtegida from '../components/common/RotaProtegida'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/vender"element={<RotaProtegida><Vender/></RotaProtegida>}/>
    </Routes>
  )
}

export default AppRoutes