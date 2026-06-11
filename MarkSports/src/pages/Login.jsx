import {FcGoogle} from 'react-icons/fc'
import {FaApple, FaFacebookF, FaInstagram} from 'react-icons/fa'
import {MdEmail, MdLock} from 'react-icons/md'


const Login = () => {
  return (
    <div className="flex h-screen">

      {/* Lado esquerdo */}
      <div className="w-1/2 flex flex-col px-16 py-10 bg-white overflow-y-auto">
        
        <a href="/" className="text-sm text-gray-600 hover:text-orange-600 mb-8">
          ← Voltar para home
        </a>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-orange-600 text-white w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg">
            M
          </div>
          <span className="text-orange-600 font-bold text-2xl">MarkSPORTS</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo de volta!</h1>
        <p className="text-sm text-gray-500 mb-6">Entre na sua conta para continuar comprando</p>

        {/* Botões sociais */}
        <div className="flex flex-col gap-3 mb-5">
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
            <FcGoogle size={20} /> Continuar com Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
            <FaApple size={20} /> Continuar com Apple
          </button>
          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 flex-1 py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
              <FaFacebookF size={20} /> Facebook
            </button>
            <button className="flex items-center justify-center gap-2 flex-1 py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
              <FaInstagram size={20} /> Instagram
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className="flex items-center gap-3 my-4 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span> ou continue com email</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Formulário */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">E-mail</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdEmail className="text-gray-400" />
            <input
              type="email"
              placeholder="seu@email.com"
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">Senha</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdLock className="text-gray-400" />
            <input
              type="password"
              placeholder="........"
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          <div className="flex justify-between items-center my-1">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox"/> Lembrar de mim
            </label>
            <a href="#" className="text-sm text-orange-600 hover:underline">Esqueceu a senha?</a>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg font-semibold text-base hover:opacity-90 transition mt-2 cursor-pointer">
            Entrar
          </button>
        </div>
      </div>

      {/* Lado direito */}
      <div className="w-1/2 relative">
      <img src="https://img.freepik.com/fotos-premium/tiro-lateral-fotografico-de-um-atleta-correndo_826849-2261.jpg"
       alt="Atleta correndo" 
       className="w-full h-full object-cover opacity-30" />
       <div className="absolute inset-0 bg-orange-600 opacity-60"></div>
      </div>
      

    </div>
  )
}

export default Login