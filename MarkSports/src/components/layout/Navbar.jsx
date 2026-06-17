import {useNavigate} from 'react-router-dom';
import Logo from '../common/Logo';
import {MdSearch, MdFavoriteBorder, MdShoppingCart, MdPersonOutline} from 'react-icons/md';
import {BsCart3} from 'react-icons/bs';

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">

      <div className="cursor-pointer flex items-center" onClick={() => navigate('/')}>
        <Logo />
      </div>

      {/* Menu */}
      <div className="flex items-center gap-8">
        <span onClick={() => navigate('/produtos')} className="text-sm font-semibold cursor-pointer hover:text-orange-600 transition">Produtos</span>
        <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600 transition">Ofertas</span>
        <span className="text-sm text-gray-600 cursor-pointer hover:text-orange-600 transition">Vendedores</span>
      </div>

      {/* Busca */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-72">
        <MdSearch size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="bg-transparent outline-none text-sm w-full text-gray-700"
        />
      </div>

      <div className="flex items-center gap-5">
        <MdFavoriteBorder size={24} className="text-gray-600 cursor-pointer hover:text-orange-600 transition" />
        <div className="relative cursor-pointer">
          <BsCart3 size={24} className="text-gray-600 hover:text-orange-600 transition" />
          {/* <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span> */}
        </div>
        <MdPersonOutline size={24} className="text-gray-600 cursor-pointer hover:text-orange-600 transition" onClick={() => navigate('/login')} />
      </div>

    </nav>
  )
}

export default Navbar