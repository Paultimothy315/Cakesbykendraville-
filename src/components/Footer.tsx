import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/new_logo.jpg';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white min-h-[400px] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="bg-white p-3 rounded-2xl inline-block mb-6">
              <img 
                src={logoImage} 
                alt="Cakes and Treats by Kendraville" 
                className="h-16 w-auto object-contain block mix-blend-multiply"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Making lasting memories with highly detailed bespoke cakes and premium small chops for any budget across Abuja.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cakesbykendraville?igsh=aDB5d2Vmd3Qydg==" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/cakesbykendraville" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Cake Gallery</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Menu & Pricing</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-500 transition-colors font-medium">Book Custom Order</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6">Contact & Location</h4>
            <ul className="space-y-4 text-gray-400">
              <li>House 21, 207 Road</li>
              <li>Efab Global Estate, Idu</li>
              <li>Abuja, Nigeria</li>
              <li className="pt-2">hello@cakesbykendraville.com</li>
              <li><a href="tel:08062968551" className="hover:text-white">0806 296 8551</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6">Delivery Zones (FCT)</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Utako</li>
              <li>Idu</li>
              <li>Efab Global Estate</li>
              <li>Garki</li>
              <li>Wuse</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Cakes & Treats by Kendraville. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
