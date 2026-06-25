import {useState} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { MdEmail, MdLock, MdPerson, MdPhone } from 'react-icons/md'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import Logo from '../components/common/Logo'
import ImagePanel from '../components/common/ImagePanel'
import InputField from '../components/common/ImputField'
import { registerUser } from '../services/auth'

const Cadastro = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  const handleCadastro = async (e) => {
    e.preventDefault()
    setErro('')

    if (password !== passwordConfirmation) {
      setErro('As senhas não coincidem.')
      return
    }

    setCarregando(true)

    try {
      await registerUser({
        name,
        last_name: lastName,
        email,
        phone,
        password,
        password_confirmation: passwordConfirmation,
      })
      navigate('/login')
    } catch (error) {
      const mensagem = error.response?.data?.message || 'Erro ao criar conta. Tente novamente.'
      setErro(mensagem)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="flex h-screen">

      <ImagePanel image="https://img.freepik.com/fotos-premium/mulher-atleta-correndo-em-seus-tenis-nas-ruas-de-paris-com-a-torre-eiffel-na-frente-dela_1200-1470.jpg?w=2000" />

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

        <form onSubmit={handleCadastro} className="flex flex-col gap-2">

          <div className="flex gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Nome</label>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
                <MdPerson size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="João"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Sobrenome</label>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
                <MdPerson size={18} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Silva"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
              </div>
            </div>
          </div>

          <label className="text-sm font-medium text-gray-700">E-mail</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdEmail size={18} className="text-gray-400" />
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">Telefone</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdPhone size={18} className="text-gray-400" />
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">Senha</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdLock size={18} className="text-gray-400" />
            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          <label className="text-sm font-medium text-gray-700">Confirmar senha</label>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mb-2">
            <MdLock size={18} className="text-gray-400" />
            <input
              type="password"
              placeholder="Digite a senha novamente"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              className="bg-transparent outline-none text-sm w-full text-gray-700"
            />
          </div>

          {erro && <p className="text-sm text-red-600">{erro}</p>}

          <div className="flex flex-col gap-2 my-2">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" /> Quero receber ofertas e novidades por e-mail
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required /> Aceito os{' '}
              <a href="#" className="text-orange-600 hover:underline">Termos de Uso</a>
              {' '}e{' '}
              <a href="#" className="text-orange-600 hover:underline">Política de Privacidade</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg font-semibold text-base hover:opacity-90 transition cursor-pointer mt-2 disabled:opacity-60"
          >
            {carregando ? 'Criando conta...' : 'Criar conta'}
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
        </form>
      </div>

    </div>
  )
}

export default Cadastro