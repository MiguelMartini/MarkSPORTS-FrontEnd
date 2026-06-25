import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { GoArrowLeft } from 'react-icons/go'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { getProductById } from '../services/products'

const DetalheProduto = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const data = await getProductById(id)
        setProduto(data.data)
      } catch (error) {
        setErro('Produto não encontrado.')
      } finally {
        setCarregando(false)
      }
    }

    fetchProduto()
  }, [id])

  if (carregando) {
    return (
      <div>
        <Navbar />
        <p className="text-center text-gray-500 py-20">Carregando produto...</p>
        <Footer />
      </div>
    )
  }

  if (erro || !produto) {
    return (
      <div>
        <Navbar />
        <p className="text-center text-red-600 py-20">{erro || 'Produto não encontrado.'}</p>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <div className="px-6 md:px-16 py-10 max-w-6xl mx-auto">

        <span
          onClick={() => navigate('/produtos')}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600 mb-6 cursor-pointer w-fit"
        >
          <GoArrowLeft /> Voltar para produtos
        </span>

        <div className="flex flex-col md:flex-row gap-10">

          {/* Imagem */}
          <div className="w-full md:w-1/2">
            <img
              src={produto.img}
              alt={produto.name}
              className="w-full h-[400px] object-cover rounded-lg bg-gray-100"
            />
          </div>

          {/* Informações */}
          <div className="w-full md:w-1/2 flex flex-col">

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{produto.name}</h1>
            <p className="text-sm text-gray-500 mb-4">Cor: {produto.color}</p>

            <span className="text-4xl font-bold text-gray-900 mb-2">
              R$ {Number(produto.price).toFixed(2).replace('.', ',')}
            </span>
            <p className="text-sm text-green-600 mb-6">
              Em até 12x de R$ {(Number(produto.price) / 12).toFixed(2).replace('.', ',')} sem juros
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">{produto.description}</p>

            <p className="text-sm text-gray-500 mb-6">
              {produto.quantity > 0 ? `${produto.quantity} unidades em estoque` : 'Produto sem estoque'}
            </p>

            <div className="flex gap-3">
              <button
                disabled={produto.quantity <= 0}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg font-semibold hover:opacity-90 transition cursor-pointer disabled:opacity-50"
              >
                <MdShoppingCart size={20} /> Adicionar ao carrinho
              </button>
              <button className="w-14 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                <FaRegHeart size={20} className="text-gray-600" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DetalheProduto