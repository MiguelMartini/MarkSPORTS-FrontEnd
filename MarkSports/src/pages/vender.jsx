import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdInventory2, MdAttachMoney, MdColorLens, MdImage, MdDescription } from 'react-icons/md'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { createProduct } from '../services/products'

const Vender = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [quantity, setQuantity] = useState('')
  const [img, setImg] = useState('')
  const [erro, setErro] = useState('')
  const [sucesso, setSucesso] = useState(false)
  const [carregando, setCarregando] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErro('')
    setCarregando(true)

    try {
      await createProduct({
        name,
        description,
        price: Number(price),
        color,
        quantity: Number(quantity),
        img,
      })
      setSucesso(true)
      setTimeout(() => navigate('/produtos'), 1500)
    } catch (error) {
      const mensagem = error.response?.data?.message || 'Erro ao cadastrar produto. Tente novamente.'
      setErro(mensagem)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-2xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Anunciar Produto</h1>
        <p className="text-gray-500 mb-8">Preencha os dados do produto que você quer vender</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm">

          <div>
            <label className="text-sm font-medium text-gray-700">Nome do produto</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
              <MdInventory2 size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Tênis Nike Air Zoom Pegasus 40"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent outline-none text-sm w-full text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Descrição</label>
            <div className="flex items-start gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
              <MdDescription size={18} className="text-gray-400 mt-1" />
              <textarea
                placeholder="Descreva o produto, condições de uso, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={3}
                className="bg-transparent outline-none text-sm w-full text-gray-700 resize-none"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Preço (R$)</label>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
                <MdAttachMoney size={18} className="text-gray-400" />
                <input
                  type="number"
                  step="0.01"
                  placeholder="299.90"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min="0"
                  className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">Quantidade</label>
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
                <MdInventory2 size={18} className="text-gray-400" />
                <input
                  type="number"
                  placeholder="10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  min="0"
                  className="bg-transparent outline-none text-sm w-full text-gray-700"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Cor</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
              <MdColorLens size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Preto"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
                className="bg-transparent outline-none text-sm w-full text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">URL da imagem</label>
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3 mt-1">
              <MdImage size={18} className="text-gray-400" />
              <input
                type="url"
                placeholder="https://exemplo.com/imagem.jpg"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
                className="bg-transparent outline-none text-sm w-full text-gray-700"
              />
            </div>
          </div>

          {erro && <p className="text-sm text-red-600">{erro}</p>}
          {sucesso && <p className="text-sm text-green-600">Produto cadastrado com sucesso! Redirecionando...</p>}

          <button
            type="submit"
            disabled={carregando}
            className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-lg font-semibold text-base hover:opacity-90 transition mt-2 cursor-pointer disabled:opacity-60"
          >
            {carregando ? 'Cadastrando...' : 'Anunciar Produto'}
          </button>

        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Vender