"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Interior Painting",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or email us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto relative z-10 flex items-center justify-center">
          <div className="bg-brand-teal text-white p-12 rounded-[2rem] text-center space-y-6 shadow-2xl animate-in fade-in zoom-in duration-500 max-w-lg w-full">
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
        </div>
      </section>
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
            </div>
          </div>

          <div className="bg-teal-200 p-8 md:p-12 rounded-[2rem] shadow-2xl border border-brand-teal/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Name:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    className={`w-full bg-white border rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300 ${errors.name ? "border-red-500" : "border-stone-200"}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm ml-1">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Email:</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    {...register("email")}
                    className={`w-full bg-white border rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300 ${errors.email ? "border-red-500" : "border-stone-200"}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm ml-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Service Required:</label>
                <select 
                  id="service"
                  {...register("service")}
                  className={`w-full bg-white border rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all text-stone-600 ${errors.service ? "border-red-500" : "border-stone-200"}`}
                >
                  <option value="Interior Painting">Interior Painting</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Wallpapering">Wallpapering</option>
                  <option value="Other / General Enquiry">Other / General Enquiry</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm ml-1">{errors.service.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-brand-teal uppercase tracking-wider ml-1">Message:</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  {...register("message")}
                  className={`w-full bg-white border rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all placeholder:text-stone-300 resize-none ${errors.message ? "border-red-500" : "border-stone-200"}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm ml-1">{errors.message.message}</p>
                )}
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
