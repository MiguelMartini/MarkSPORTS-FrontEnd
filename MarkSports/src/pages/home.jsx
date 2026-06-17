import { useNavigate } from "react-router-dom";
import { MdStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const produtosEmAlta = [
  {
    id: 1,
    nome: 'Tênis Running Pro Elite',
    imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    rating: 4.8,
    avaliacoes: 234,
    precoAtual: 599.90,
    precoAntigo: 799.90,
    desconto: 25,
  },
  {
    id: 2,
    nome: 'Kit Raquete Tênis Profissional',
    imagem: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400',
    rating: 4.9,
    avaliacoes: 189,
    precoAtual: 899.90,
    precoAntigo: 1199.90,
    desconto: 25,
  },
  {
    id: 3,
    nome: 'Equipamento Fitness Completo',
    imagem: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400',
    rating: 4.7,
    avaliacoes: 156,
    precoAtual: 1299.90,
    precoAntigo: 1699.90,
    desconto: 24,
  },
  {
    id: 4,
    nome: 'Sneakers Premium Collection',
    imagem: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400',
    rating: 4.9,
    avaliacoes: 312,
    precoAtual: 749.90,
    precoAntigo: 999.90,
    desconto: 25,
  },
]

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[500px] flex items-center">
        <img
          src="https://img.freepik.com/fotos-premium/mulher-atleta-correndo-em-seus-tenis-nas-ruas-de-paris-com-a-torre-eiffel-na-frente-dela_1200-1470.jpg?w=2000"
          alt="Atleta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-16 max-w-2xl">
          <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Marketplace Oficial para Atletas
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Seu esporte, seus acessórios
          </h1>
          <p className="text-white text-lg mb-6 opacity-90">
            Compre e venda equipamentos esportivos com segurança. Milhares de produtos, vendedores verificados e as melhores ofertas do mercado.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/produtos')}
              className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
            >
              Explorar Produtos
            </button>
            <button className="bg-gray-800/70 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-800 transition">
              Vender Agora
            </button>
          </div>
        </div>
      </section>

      {/* Produtos em Alta */}
      <section className="px-16 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Produtos em Alta</h2>
            <p className="text-gray-500">Os mais vendidos da semana com descontos especiais</p>
          </div>
          <button className="border border-gray-300 px-5 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50 transition">
            Ver Todos
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {produtosEmAlta.map((produto) => (
            <div key={produto.id} className="cursor-pointer group">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                  -{produto.desconto}%
                </span>
                <FaRegHeart className="absolute top-3 right-3 bg-white rounded-full p-2 w-8 h-8 text-gray-700 z-10" />
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{produto.nome}</h3>
              <div className="flex items-center gap-1 text-sm mb-1">
                <MdStar className="text-yellow-500" />
                <span className="font-medium">{produto.rating}</span>
                <span className="text-gray-400">({produto.avaliacoes})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  R$ {produto.precoAtual.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  R$ {produto.precoAntigo.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <p className="text-xs text-green-600 mt-1">Em até 12x sem juros</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white text-center py-16 px-8">
        <h2 className="text-4xl font-bold mb-3">Pronto para começar?</h2>
        <p className="text-lg opacity-90 mb-8">
          Crie sua conta gratuitamente e tenha acesso a milhares de produtos esportivos
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/cadastro')}
            className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
          >
            Criar Conta Grátis
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-white/10 transition">
            Saiba Mais
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home