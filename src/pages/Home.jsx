import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, BookOpen } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import FeaturedBooks from '../components/FeaturedBooks';
import CategorySection from '../components/CategorySection';
import GifReveal from '../components/GifReveal';

const Home = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-primary-600" />,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      title: 'Secure Payment',
      description: 'Your payment information is safe with us',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Wide Selection',
      description: 'Over 1 million books to choose from',
    },
  ];

  return (
    <div>
      {/* Floating GIF Widget */}
      <GifReveal />
      
      <HeroSlider />
      
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBooks />
      <CategorySection />

      <section className="py-8 sm:py-12 md:py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Join Our Reading Community
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive offers, new releases, and reading recommendations delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
