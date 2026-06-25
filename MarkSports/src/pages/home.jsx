import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useState, useEffect } from 'react'
import { getProducts } from '../services/products'
import ProductCard from '../components/common/ProductCard'

const Home = () => {
  const navigate = useNavigate()
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProducts()
        setProdutos((data.data || []).slice(0, 4))
      } catch (error) {
        console.error('Erro ao carregar produtos', error)
      }
    }

    fetchProdutos()
  }, [])

  return (
    <div>
      <Navbar />

      {/* Hero */}
     <section className="relative h-[400px] md:h-[500px] flex items-center">
        <img
          src="https://img.freepik.com/fotos-premium/mulher-atleta-correndo-em-seus-tenis-nas-ruas-de-paris-com-a-torre-eiffel-na-frente-dela_1200-1470.jpg?w=2000"
          alt="Atleta"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-6 md:px-16 max-w-2xl">
          <span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Marketplace Oficial para Atletas
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Seu esporte, seus acessórios
          </h1>
          <p className="text-white text-lg mb-6 opacity-90">
            Compre e venda equipamentos esportivos com segurança. Milhares de produtos, vendedores verificados e as melhores ofertas do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/produtos')}
              className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:opacity-90 transition"
            >
              Explorar Produtos
            </button>
            <button
            onClick={() => navigate('/vender')}
            className="bg-gray-800/70 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-800 transition"
            >
            Vender Agora
          </button>
          </div>
        </div>
      </section>

      {/* Produtos em Alta */}
      <section className="px-6 md:px-16 py-16">
       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Produtos em Alta</h2>
            <p className="text-gray-500">Os mais vendidos da semana com descontos especiais</p>
          </div>
          <button onClick={() => navigate('/produtos')}
          className="border border-gray-300 px-5 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-gray-50 transition">
            Ver Todos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {produtos.map((produto) => (
    <ProductCard key={produto.id} product={produto} />
  ))}
</div>
      </section>

      {/* CTA */}
     <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-3">Pronto para começar?</h2>
        <p className="text-lg opacity-90 mb-8">
          Crie sua conta gratuitamente e tenha acesso a milhares de produtos esportivos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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