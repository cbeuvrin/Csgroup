import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4">Proceso</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6 text-white">
            ¿Cómo funciona el <span className="text-primary italic">servicio</span>?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            En Cleaning Solution Group, hemos diseñado nuestro proceso para brindarle la máxima comodidad. Entendemos que su tiempo es valioso y que espera resultados excepcionales.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Line connector */}
          <div className="hidden md:block absolute top-24 left-[16.666%] right-[16.666%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          
          <div className="text-center relative z-10">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(219,161,70,0.1)]">
              <Image src="/images/limpieza-casa.png" alt="Agendar cita" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Llena el formulario o escribe por WhatsApp</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nuestro equipo se adaptará a su horario y preferencias. Evaluaremos sus necesidades y le proporcionaremos una cotización detallada y transparente.
            </p>
          </div>
          <div className="text-center relative z-10">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(219,161,70,0.1)]">
              <Image src="/images/limpieza-oficina.png" alt="Atención Personalizada" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Atención Personalizada</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nuestro equipo llegará al lugar acordado. Discutiremos sus expectativas antes de sumergirnos en el trabajo de limpieza con precisión.
            </p>
          </div>
          <div className="text-center relative z-10">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(219,161,70,0.1)]">
              <Image src="/images/limpieza-ventanas.png" alt="Relájese" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Relájese y Descanse</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sabemos que el estrés de la limpieza puede ser abrumador. Nuestro personal se encargará de todos los detalles, para que usted disfrute de un ambiente limpio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
