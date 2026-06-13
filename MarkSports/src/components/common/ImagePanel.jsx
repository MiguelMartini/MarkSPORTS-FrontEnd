const ImagePanel = () => {
  return (
    <div className="w-1/2 relative">
      <img
        src="https://img.freepik.com/fotos-premium/tiro-lateral-fotografico-de-um-atleta-correndo_826849-2261.jpg"
        alt="Atleta correndo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-orange-600 opacity-60"></div>
    </div>
  )
}

export default ImagePanel