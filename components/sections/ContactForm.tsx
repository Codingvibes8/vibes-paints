"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-brand-teal text-white p-12 rounded-[2rem] text-center space-y-6 shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="h-20 w-20 bg-brand-cream rounded-full flex items-center justify-center mx-auto text-brand-teal shrink-0">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-bold font-playfair">Message Sent!</h3>
        <p className="text-brand-cream/80 text-lg max-w-md mx-auto">
          Thank you for reaching out. Nelly will get back to you within 24 hours to discuss your project.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-brand-red text-white hover:bg-brand-red/90 font-bold px-8 py-6 rounded-xl"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-cream/30 -skew-x-12 transform translate-x-1/2" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-sm font-semibold tracking-wider uppercase">
                   Contact Us
                </div>
                <h2 className="text-4xl md:text-6xl font-bold font-playfair text-brand-teal">
                  Ready to transform <br />
                  <span className="text-brand-red">your space?</span>
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed font-light max-w-lg">
                  Get in touch for a free, no-obligation quote. Nelly provides expert advice and precise estimates for all your decorating needs.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                    <div className="h-12 w-12 rounded-xl bg-brand-cream flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-cream transition-colors duration-300">
                        <Send className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-brand-teal">Email Nelly</h4>
                        <p className="text-stone-500">info@nellypaints.co.uk</p>
                    </div>
                </div>
                {/* Add more contact details if needed */}
            </div>
          </div>

          <div className="bg-brand-cream p-8 md:p-12 rounded-[2rem] shadow-2xl border border-brand-teal/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Service Required</label>
                <select 
                  id="service"
                  className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all text-stone-600"
                >
                  <option>Interior Painting</option>
                  <option>Exterior Painting</option>
                  <option>Wallpapering</option>
                  <option>Other / General Enquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-teal text-white hover:bg-brand-teal/90 font-bold py-8 rounded-xl text-lg shadow-xl hover:shadow-brand-teal/20 transition-all flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
