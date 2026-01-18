import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-teal text-white border-t border-white/10">
      <div className="container px-4 md:px-8 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">NellyPaints</h3>
            <p className="text-brand-cream/80 text-sm leading-relaxed max-w-xs">
              Premium painting and decorating services for discerning homeowners in NW London. Transforming spaces with care and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-cream">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-white/80 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="#services" className="text-white/80 hover:text-white transition-colors text-sm">Services</Link>
              <Link href="#portfolio" className="text-white/80 hover:text-white transition-colors text-sm">Portfolio</Link>
              <Link href="#why-us" className="text-white/80 hover:text-white transition-colors text-sm">Why Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-cream">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-brand-red" />
                <span>Hampstead, NW3 & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="h-4 w-4 text-brand-red" />
                <span>020 7123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="h-4 w-4 text-brand-red" />
                <span>hello@nellypaints.co.uk</span>
              </div>
            </div>
          </div>

          {/* Socials / Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-cream">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} NellyPaints Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
