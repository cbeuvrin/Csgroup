import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section id="contact" className="py-24 px-6 bg-[#050505]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 bg-black p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4">¿Estás convencido de que somos tu mejor opción?</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight text-white">
                Lo mejor en limpieza <span className="text-primary italic">Especializada</span>
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Llena el formulario para agendar una cita o mándanos un WhatsApp para una atención inmediata. Ahorre tiempo y desgaste.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <a 
                  href="https://wa.me/525521498976" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-[#25D366]/20 uppercase tracking-wider text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  WhatsApp Directo
                </a>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shrink-0 text-2xl border border-white/10">📍</div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg text-white">Ubicación</h4>
                    <p className="text-gray-400 text-sm">Porto Alegre 34, El Retoño, Iztapalapa,<br/>09440 Ciudad de México, CDMX.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center text-primary shrink-0 text-2xl border border-white/10">📞</div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg text-white">Número de Contacto</h4>
                    <p className="text-gray-400 text-sm">55 2149 8976</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative z-10">
              <form className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl space-y-6 border border-white/10">
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Nombre Completo *</label>
                  <input type="text" placeholder="Nombre completo*" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Teléfono o Cel *</label>
                  <input type="tel" placeholder="Ingresa tu numero de telefono*" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-white">Servicio *</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Selecciona Servicio *</option>
                    <option>Limpieza de Condominios</option>
                    <option>Limpieza de Oficinas</option>
                    <option>Limpieza de Telas</option>
                    <option>Otro Servicio</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-primary text-black font-black py-4 rounded-xl hover:scale-[1.02] transition-transform uppercase tracking-wider mt-4">
                  Contáctanos Ahora
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-white/5 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Image src="/images/logocleaning.png" alt="Cleaning Solutions Group Logo" width={200} height={48} className="h-12 w-auto object-contain" />
          <p className="text-gray-500 text-sm text-center md:text-right font-medium">
            Copyright © 2026 - Cleaning Solutions Group. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
