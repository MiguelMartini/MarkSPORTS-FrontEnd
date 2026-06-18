import {useNavigate} from 'react-router-dom';
import Logo from '../common/Logo';

const Footer = () => {
const navigate = useNavigate()
    return (

    <footer className="bg-gray-900 text-gray-400 px-6 md:px-16 py-12">

     <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">

        {/* Logo e descrição */}
        <div className="max-w-xs">
          <Logo />
          <p className="text-sm mt-2">
            O marketplace completo para atletas que buscam qualidade e variedade.
          </p>
        </div>

        {/* Comprar */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-1">Comprar</h4>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Categorias</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Ofertas</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Novidades</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Mais Vendidos</span>
        </div>

        {/* Vender */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-1">Vender</h4>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Como Vender</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Taxas</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Políticas</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Suporte</span>
        </div>

        {/* Suporte */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold mb-1">Suporte</h4>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Central de Ajuda</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Contato</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Política de Privacidade</span>
          <span className="text-sm cursor-pointer hover:text-orange-500 transition">Termos de Uso</span>
        </div>

      </div>

      <div className="border-t border-gray-700 pt-6 text-center text-sm">
        © 2026 MarkSPORTS. Todos os direitos reservados.
      </div>

    </footer>
    )
}

export default Footer