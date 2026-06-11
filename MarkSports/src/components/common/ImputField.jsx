const InputField = ({ label, icon: Icon, type = 'text', placeholder }) => {
  return (
    <div className="flex flex-col gap-1 mb-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-3">
        {Icon && <Icon size={18} className="text-gray-400" />}
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent outline-none text-sm w-full text-gray-700"
        />
      </div>
    </div>
  )
}

export default InputField