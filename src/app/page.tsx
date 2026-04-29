import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4">Nuestra Historia</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter italic text-white">
              Somos líderes con <br/><span className="text-primary">25 años</span> de experiencia.
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              En Cleaning Solutions Group, nos esforzamos por superar sus expectativas en cada proyecto de limpieza. Nuestra dedicación a la calidad, el liderazgo en la industria y nuestro compromiso con México nos hacen la elección lógica.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Permítanos demostrarle por qué somos la mejor opción para sus necesidades de limpieza. Estamos aquí para servirle y transformar sus espacios en lugares limpios, seguros y acogedores.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Experiencia y Liderazgo</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Servicios Completos</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Personal Altamente Calificado</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Compromiso con la Calidad</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Satisfacción del Cliente</div>
              <div className="flex items-center gap-3"><span className="w-2 h-2 bg-primary rounded-full shrink-0"></span> Garantía de servicio</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border-l-4 border-l-primary border-y-white/5 border-r-white/5">
              <h4 className="text-xl font-bold mb-3 text-primary">Profesionales de limpieza de confianza</h4>
              <p className="text-sm text-gray-400">Comprendemos que la clave para brindar un servicio de limpieza excepcional radica en la calidad de nuestro personal. Nos enorgullecemos de contar con un equipo altamente capacitado y certificado, listo para abordar cualquier desafío con habilidad y profesionalismo.</p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl"></div>
            <img src="/images/services-bg.webp" alt="Servicios de Limpieza" className="relative rounded-[4rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl w-full" />
          </div>
        </div>
      </section>

      <HowItWorks />
      <Testimonials />
      <Partners />
      <Footer />
    </main>
  );
}
