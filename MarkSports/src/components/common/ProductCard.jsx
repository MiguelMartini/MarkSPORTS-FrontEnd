import { MdStar } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/produto/${product.id}`)}
      className="cursor-pointer group"
    >
      <div className="relative rounded-lg overflow-hidden mb-3 bg-gray-100">
        <FaRegHeart
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 bg-white rounded-full p-2 w-8 h-8 text-gray-700 z-10 cursor-pointer hover:text-red-500 transition"
        />
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
      <p className="text-xs text-gray-500 mb-1">{product.color}</p>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">
          R$ {Number(product.price).toFixed(2).replace('.', ',')}
        </span>
      </div>
      <p className="text-xs text-green-600 mt-1">
        {product.quantity > 0 ? `${product.quantity} em estoque` : 'Sem estoque'}
      </p>
    </div>
  )
}

export default ProductCard