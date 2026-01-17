import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FeaturedBooks = () => {
  const { addToCart } = useCart();

  const featuredBooks = [
    {
      id: 1,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.5,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Fiction',
      isNew: true,
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.8,
      reviews: 5678,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Self-Help',
      isBestseller: true,
    },
    {
      id: 3,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      price: 22.99,
      originalPrice: 26.99,
      rating: 4.6,
      reviews: 3456,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Thriller',
      isNew: true,
    },
    {
      id: 4,
      title: 'Educated',
      author: 'Tara Westover',
      price: 21.99,
      originalPrice: 25.99,
      rating: 4.7,
      reviews: 2345,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Memoir',
      isBestseller: true,
    },
  ];

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Books</h2>
          <Link
            to="/shop"
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                {book.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                {book.isBestseller && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    BESTSELLER
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {book.rating} ({book.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-primary-600">${book.price}</span>
                    {book.originalPrice && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${book.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(book)}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md hover:border-primary-600 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
