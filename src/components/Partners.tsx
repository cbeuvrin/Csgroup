import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-black font-black text-xs tracking-[0.3em] uppercase mb-10">
          Nuestros Socios Comerciales
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <Image 
              key={num}
              src={`/images/partners/partner-${num}.png`} 
              alt={`Socio ${num}`} 
              width={200} 
              height={80} 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
