import {useNavigate} from 'react-router-dom';
import Logo from '../common/Logo';
import {MdSearch, MdFavoriteBorder, MdShoppingCart, MdPersonOutline} from 'react-icons/md';
import {BsCart3} from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">

  {/* Logo */}
  <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2">
    <Logo />
  </div>

  {/* Menu */}
  <div className="hidden md:flex items-center gap-4 lg:gap-8">
    <span onClick={() => navigate('/produtos')} className="text-sm font-semibold cursor-pointer hover:text-orange-600">Produtos</span>
    <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600">Ofertas</span>
    <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600">Vendedores</span>
  </div>

  {/* Busca */}
  <div className="hidden sm:flex flex-1 mx-4 items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 max-w-md">
    <MdSearch size={20} className="text-gray-400" />
    <input
      type="text"
      placeholder="Buscar produtos..."
      className="bg-transparent outline-none text-sm w-full text-gray-700"
    />
  </div>

  {/* Icons */}
  <div className="flex items-center gap-3 md:gap-5">
    <MdFavoriteBorder size={24} className="text-gray-600 cursor-pointer hover:text-orange-600" />
    <BsCart3 size={24} className="text-gray-600 hover:text-orange-600" />
    <MdPersonOutline size={24} onClick={() => navigate('/login')} className="text-gray-600 cursor-pointer hover:text-orange-600" />
  </div>



    </nav>
  )
}

export default Navbar