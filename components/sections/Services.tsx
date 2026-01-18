import Image from "next/image";
import { Paintbrush, Home, Maximize, Wand2, Hammer, Zap } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    description: "Flawless walls, ceilings, and woodwork using premium eco-friendly paints. We treat your home with the utmost care.",
    icon: <Paintbrush className="w-8 h-8" />,
    image: "/service-interior.png"
  },
  {
    title: "Exterior Painting",
    description: "Boost your curb appeal with long-lasting exterior masonry and woodwork protection against the elements.",
    icon: <Home className="w-8 h-8" />,
    image: "/service-exterior.png"
  },
  {
    title: "Wallpapering",
    description: "Expert hanging of all types of wallpaper, from complex patterns to delicate fabrics. Seamless results guaranteed.",
    icon: <Maximize className="w-8 h-8" />,
    image: "/service-wallpapering.png"
  },
  {
    title: "Plastering & Repairs",
    description: "Skimming, patching, and preparing surfaces to ensure a perfectly smooth base before any paint is applied.",
    icon: <Wand2 className="w-8 h-8" />,
    image: "/service-plastering.png"
  },
  {
    title: "Woodwork Finishing",
    description: "Specialist treatment for doors, skirting, and furniture. Satin, gloss, or eggshell finishes for a durable shine.",
    icon: <Hammer className="w-8 h-8" />,
    image: "/service-woodwork.png"
  },
  {
    title: "End of Tenancy",
    description: "Fast, reliable turnaround for landlords and tenants. High-quality refreshing of properties for new occupiers.",
    icon: <Zap className="w-8 h-8" />,
    image: "/service-tenancy.png"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#19535F_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-brand-teal mb-4">Masterful Finishes</h2>
            <div className="h-1 w-24 bg-brand-red mx-auto rounded-full" />
            <p className="text-xl text-stone-600 leading-relaxed font-light">
                Comprehensive painting and decorating solutions tailored to your specific needs. From period properties to modern apartments.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
                <div key={index} className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100 overflow-hidden flex flex-col">
                    {/* Service Image Container */}
                    <div className="relative h-64 w-full overflow-hidden">
                        <Image 
                            src={service.image} 
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-teal shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                            {service.icon}
                        </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-brand-teal font-playfair">{service.title}</h3>
                        <p className="text-stone-600 leading-relaxed text-lg flex-grow">
                            {service.description}
                        </p>
                        
                        <div className="mt-8 pt-6 border-t border-stone-100 flex items-center text-brand-red font-semibold text-sm tracking-wide uppercase">
                            Learn More <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
