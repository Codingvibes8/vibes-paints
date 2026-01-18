import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center pt-20 overflow-hidden bg-brand-cream/10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Professional painter working on a modern accent wall"
          fill
          className="object-cover opacity-90" // Slightly fade image for text readability if needed, or rely on gradient
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:from-black/70 md:to-transparent/20" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 mx-auto grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-playfair tracking-tight text-white drop-shadow-md">
              Premium Painting & Decorating in <span className="text-brand-cream">NW London</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-100 max-w-[600px] leading-relaxed drop-shadow-sm font-medium">
              Transforming homes with flawless finishes, reliable service, and a clean, tidy experience. Serving Hampstead, Kilburn, and beyond.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 font-semibold text-lg px-8 py-6 h-auto backdrop-blur-sm transition-all hover:border-white">
              Call Dayo
            </Button>
          </div>
          <div className="pt-8 flex items-center gap-4 text-white/90 text-sm font-medium">
             <div className="flex items-center gap-2">
                <span className="bg-green-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                Fully Insured
             </div>
             <div className="flex items-center gap-2">
                <span className="bg-green-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </span>
                 High-Quality Materials
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
