"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Limpieza de Condominios",
    description: "Cuidamos de la limpieza y el bienestar de condominios, incluyendo áreas comunes y zonas compartidas.",
    image: "/images/limpieza-casa.png",
    items: ["Zonas Residenciales", "Condominios", "Mantenimiento Integral"]
  },
  {
    title: "Limpieza de Oficinas",
    description: "Areas de trabajo diganas para el dia a dia en la jornada laboral.",
    image: "/images/limpieza-oficina.png",
    items: ["Limpieza de Oficinas", "Estacionamientos", "Hospitales y Gimnasios"]
  },
  {
    title: "Limpieza de Telas",
    description: "Lavado de salas, lavado de alfombras, eliminacion de manchas.",
    image: "/images/limpieza-vestiduras.png",
    items: ["Lavado de Alfombras", "Vestiduras", "Eliminación de Manchas"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-4">Nuestros Servicios</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6 text-white uppercase">
            Ofrecemos gran variedad de <span className="text-primary italic">servicios</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Nuestros servicios principales a tu alcance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden shadow-lg border border-white/5">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
