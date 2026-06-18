import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import Logo from '../components/common/Logo'
import ImagePanel from '../components/common/ImagePanel'
import InputField from '../components/common/ImputField'

const Cadastro = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen">

      <ImagePanel image="https://static1.purepeople.com.br/articles/4/39/46/34/@/4507681-rafaela-silva-e-atleta-de-judo-580x0-1.jpg"/>

      <div className="w-full md:w-1/2 flex flex-col px-6 md:px-16 py-10 bg-white overflow-y-auto">
      <span
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600 mb-8 cursor-pointer"
        >
           <GoArrowLeft /> Voltar para home
        </span>
        <div className="mb-8">
        <Logo />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar conta</h1>
        <p className="text-sm text-gray-500 mb-6">Comece sua jornada esportiva conosco</p>

        <div className="flex flex-col gap-3 mb-5">
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
            <FcGoogle size={20} /> Cadastrar com Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer">
            <FaApple size={20} /> Cadastrar com Apple
          </button>
        </div>

        <div className="flex items-center gap-3 my-4 text-gray-400 text-sm">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span>ou preencha o formulário</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="flex flex-col gap-2">
          <InputField label="Nome completo" icon={MdPerson} type="text" placeholder="João Silva" />
          <InputField label="E-mail" icon={MdEmail} type="email" placeholder="seu@email.com" />
          <InputField label="Telefone" icon={MdPhone} type="tel" placeholder="(00) 00000-0000" />
          <InputField label="Senha" icon={MdLock} type="password" placeholder="Mínimo 8 caracteres" />
          <InputField label="Confirmar senha" icon={MdLock} type="password" placeholder="Digite a senha novamente" />

          <div className="flex flex-col gap-2 my-2">
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className = "cursor-pointer" /> Quero receber ofertas e novidades por e-mail
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
              <input type="checkbox" className = "cursor-pointer" /> Aceito os{' '}
              <span
              onClick={() => navigate('/')}
                className="text-orange-600 hover:underline cursor-pointer"
                >
                Termos de Uso
              </span>
              {' '}e{' '}
              <span
              onClick={() => navigate('/')}
                className="text-orange-600 hover:underline cursor-pointer"
                >
                Política de Privacidade
              </span>
            </label>
          </div>

          <button onClick={() => navigate('/')} className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg font-semibold text-base hover:opacity-90 transition cursor-pointer mt-2">
            Criar conta
          </button>

          <p className="text-sm text-center text-gray-500 mt-3">
            Já tem uma conta?{' '}
            <span
                onClick={() => navigate('/login')}
                className="text-orange-600 font-medium hover:underline cursor-pointer"
                >
                Fazer login
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Cadastro