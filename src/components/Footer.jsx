import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BookHaven</h3>
            <p className="text-gray-400">
              Your premier destination for books and novels. Discover your next great read with us.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-white transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=fiction" className="text-gray-400 hover:text-white transition-colors">
                  Fiction
                </Link>
              </li>
              <li>
                <Link to="/shop?category=non-fiction" className="text-gray-400 hover:text-white transition-colors">
                  Non-Fiction
                </Link>
              </li>
              <li>
                <Link to="/shop?category=romance" className="text-gray-400 hover:text-white transition-colors">
                  Romance
                </Link>
              </li>
              <li>
                <Link to="/shop?category=mystery" className="text-gray-400 hover:text-white transition-colors">
                  Mystery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Egypt, cairo
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                +201220809951
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                karaswaelzaki@gmail.com
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 BookHaven. All rights reserved. [karas wael]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
