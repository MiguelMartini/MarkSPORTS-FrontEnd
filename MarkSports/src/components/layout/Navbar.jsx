import { useNavigate } from 'react-router-dom'
import { MdSearch, MdFavoriteBorder, MdPersonOutline, MdLogout } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import Logo from '../common/Logo'
import { logoutUser } from '../../services/auth'

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('Erro ao fazer logout', error)
    } finally {
      localStorage.removeItem('token')
      navigate('/login')
    }
  }

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">

      <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2">
        <Logo />
      </div>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <span onClick={() => navigate('/produtos')} className="text-sm font-semibold cursor-pointer hover:text-orange-600">Produtos</span>
        <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600">Ofertas</span>
        <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600">Vendedores</span>
      </div>

      <div className="hidden sm:flex flex-1 mx-4 items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-md">
        <MdSearch size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="bg-transparent outline-none text-sm w-full text-gray-700"
        />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <MdFavoriteBorder size={24} className="text-gray-600 cursor-pointer hover:text-orange-600" />
        <BsCart3 size={24} className="text-gray-600 cursor-pointer hover:text-orange-600" />

        {token ? (
          <MdLogout
            size={24}
            onClick={handleLogout}
            className="text-gray-600 cursor-pointer hover:text-red-600 transition"
          />
        ) : (
          <MdPersonOutline
            size={24}
            onClick={() => navigate('/login')}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
          />
        )}
      </div>

    </nav>
  )
}

export default Navbar