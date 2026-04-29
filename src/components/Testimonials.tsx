export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black relative">
      <div className="container mx-auto">
        <h2 className="text-center text-primary font-black text-xs tracking-[0.3em] uppercase mb-16">Opiniones de nuestros clientes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative">
            <div className="text-primary text-6xl absolute top-6 left-6 opacity-20 font-serif">"</div>
            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
              "Contratar a CSG para la limpieza de mi oficina fue una decisión brillante. El personal fue amable, puntual y profesional, y me permitió enfocar mi energía en mis responsabilidades laborales en lugar de preocuparme por la limpieza. Estoy impresionado por su compromiso..."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">F</div>
              <div>
                <h5 className="font-bold text-white">Fernando Castro</h5>
                <span className="text-xs text-primary">Cliente</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl relative">
            <div className="text-primary text-6xl absolute top-6 left-6 opacity-20 font-serif">"</div>
            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
              "Ha sido una excelente desición para mí. Cuando llegué a mi negocio después de su servicio de limpieza, mi negocio lucía impecable, y pude concentrarme y trabajar mejor sabiendo que todo estaba en su lugar. ¡Los recomiendo encarecidamente!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">A</div>
              <div>
                <h5 className="font-bold text-white">Ana Martínez</h5>
                <span className="text-xs text-primary">Cliente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
