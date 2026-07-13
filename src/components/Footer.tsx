import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-cafe-alt pt-20 pb-8 border-t border-cafe-text/10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <div className="space-y-2 opacity-80 leading-relaxed text-sm">
              <p>Email: <a href="mailto:hello@nagi.com" className="hover:underline">hello@nagi.com</a></p>
              <p>Phone: <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 uppercase tracking-wider">Opening Hours</h4>
            <ul className="text-xs space-y-2 opacity-80 leading-relaxed">
              <li>Monday - Friday: 07:00 AM - 08:00 PM</li>
              <li>Saturday - Sunday: 07:00 AM - 09:00 PM</li>
            </ul>
            <h4 className="font-bold text-xs mt-6 mb-2 uppercase tracking-wider">Location</h4>
            <p className="text-xs opacity-80 leading-relaxed">
              Sunset Avenue, 10th Street<br/>Kansas City, 99000
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs mb-4 uppercase tracking-wider">Menu</h4>
            <ul className="text-xs space-y-3 opacity-80 font-medium">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/menu" className="hover:underline">Menu</Link></li>
              <li><Link to="/shop" className="hover:underline">Shop</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h4 className="font-bold text-xs mb-4 uppercase tracking-wider">Return & Support</h4>
              <ul className="text-xs space-y-3 opacity-80 font-medium">
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xs mb-4 uppercase tracking-wider">Social</h4>
              <ul className="text-xs space-y-3 opacity-80 font-medium">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cafe-text/20 text-xs font-medium opacity-70">
          <p>© Copyright Nagi 2024</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy policy</a>
            <a href="#" className="hover:underline">Terms of use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
