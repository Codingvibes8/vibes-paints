import { CheckCircle2, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const features = [
    {
        icon: <MapPin className="h-8 w-8 text-brand-red" />,
        title: "Local NW London Specialist",
        description: "Living and working in your area, we understand the local architecture and community styles."
    },
    {
        icon: <Sparkles className="h-8 w-8 text-brand-red" />,
        title: "Clean & Tidy Work",
        description: "We respect your home, using dust-free sanding and ensuring spotless cleanup every day."
    },
    {
        icon: <CheckCircle2 className="h-8 w-8 text-brand-red" />,
        title: "Transparent Pricing",
        description: "Detailed, fixed quotes with no hidden costs. You know exactly what you're paying for."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-brand-red" />,
        title: "Fully Insured",
        description: "Peace of mind with full public liability insurance for all our projects."
    }
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 md:py-32 bg-brand-teal text-white relative overflow-hidden">
             {/* Background Image Overlay */}
             <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/tools.png')] bg-cover bg-center mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-teal via-transparent to-brand-teal" />
             </div>

             <div className="container px-4 md:px-8 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    <div className="lg:w-1/2 space-y-10">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 text-brand-cream text-sm font-semibold tracking-wider uppercase mb-2">
                           The NellyPaints Promise
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                            More than just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cream to-white">a coat of paint.</span>
                        </h2>
                        <p className="text-xl text-brand-cream/80 leading-relaxed font-light">
                            We believe that painting is about transforming your living space into a sanctuary. Our process is designed to be stress-free, reliable, and impeccably clean.
                        </p>
                        
                        <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                             <div className="absolute -top-4 -left-4 text-6xl text-brand-red opacity-40 font-serif">"</div>
                            <p className="italic text-xl text-white font-medium leading-relaxed">
                                NellyPaints transformed our Victorian terrace in Hampstead. The attention to detail was incredible, and they were a pleasure to have in our home.
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-brand-cream text-brand-teal flex items-center justify-center font-bold">S</div>
                                <div>
                                    <div className="font-bold text-brand-cream">Sarah & Tom</div>
                                    <div className="text-sm text-white/50">Hampstead, NW3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                                <div className="mb-4 p-3 bg-brand-red/20 rounded-xl w-fit text-brand-cream group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-playfair text-white">{feature.title}</h3>
                                <p className="text-brand-cream/70 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
}
