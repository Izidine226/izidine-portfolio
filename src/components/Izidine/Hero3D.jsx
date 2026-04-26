export default function Hero3D() {
  return (
    <div 
      className="hero-3d-container" 
      style={{ 
        position: 'absolute', 
        bottom: '5%', // Placé en bas (sous Open to work)
        right: '5%', // Aligné à droite
        width: '350px', 
        height: '350px', 
        zIndex: 0, 
        opacity: 0.4, 
        pointerEvents: 'auto', 
        overflow: 'hidden' // Cache tout ce qui déborde du conteneur
      }}
    >
      <iframe 
        src="https://my.spline.design/designeffectscopycopy-AEioS5wuQfuLZAf3f97X5sjB-lOB/" 
        frameBorder="0" 
        style={{ 
          position: 'absolute',
          top: '-50px', // Remonte l'iframe pour compenser la taille
          left: 0,
          width: '100%', 
          height: '450px', // L'iframe est 100px plus grande que la boîte (350px)
          background: 'transparent'
        }}
        title="Spline 3D Text"
      />
    </div>
  );
}
