import { useState, useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductCard from '../components/common/ProductCard'
import FilterSidebar from '../components/common/FilterSidebar'
import { getProducts } from '../services/products'

const Produtos = () => {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [precoMax, setPrecoMax] = useState(5000)

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProducts()
        setProdutos(data.data || [])
      } catch (error) {
        setErro('Não foi possível carregar os produtos.')
      } finally {
        setCarregando(false)
      }
    }

    fetchProdutos()
  }, [])

  const produtosFiltrados = produtos.filter(
    (produto) => Number(produto.price) <= precoMax
  )

  return (
    <div>
      <Navbar />

      <div className="px-6 md:px-16 py-10">

        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Produtos Esportivos</h1>
            <p className="text-gray-500">{produtosFiltrados.length} resultados</p>
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm cursor-pointer">
            <option>Mais relevantes</option>
            <option>Menor preço</option>
            <option>Maior preço</option>
          </select>
        </div>

        <div className="flex gap-8">
          <FilterSidebar precoMax={precoMax} onPrecoChange={setPrecoMax} />

          <div className="flex-1">
            {carregando && <p className="text-gray-500">Carregando produtos...</p>}
            {erro && <p className="text-red-600">{erro}</p>}

            {!carregando && !erro && produtosFiltrados.length === 0 && (
              <p className="text-gray-500">Nenhum produto encontrado.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} product={produto} />
              ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Produtos