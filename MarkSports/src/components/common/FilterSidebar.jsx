const FilterSidebar = ({ precoMax, onPrecoChange }) => {
  return (
    <aside className="w-72 bg-white rounded-lg p-6 h-fit hidden lg:block">

      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-gray-900">Filtros</h3>
        <span
          onClick={() => onPrecoChange(5000)}
          className="text-sm text-orange-600 cursor-pointer hover:underline"
        >
          Limpar
        </span>
      </div>

      {/* Preço */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Preço</h4>
        <input
          type="range"
          min="0"
          max="5000"
          value={precoMax}
          onChange={(e) => onPrecoChange(Number(e.target.value))}
          className="w-full accent-orange-600"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>R$ 0</span>
          <span>R$ {precoMax}</span>
        </div>
      </div>

    </aside>
  )
}

export default FilterSidebar