const ImagePanel = ({ image }) => {
  return (
    <div className="w-1/2 relative">
      <img
        src={image}
        alt="Atleta correndo"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-orange-600 opacity-60"></div>
    </div>
  )
}

export default ImagePanel