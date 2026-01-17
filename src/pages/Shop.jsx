import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Filter, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import GifReveal from '../components/GifReveal';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Mock book data - in real app, this would come from an API
    const mockBooks = [
      {
        id: 1,
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 24.99,
        originalPrice: 29.99,
        rating: 4.5,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'fiction',
        tags: ['bestseller', 'new'],
      },
      {
        id: 2,
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 19.99,
        originalPrice: 24.99,
        rating: 4.8,
        reviews: 5678,
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'non-fiction',
        tags: ['bestseller'],
      },
      {
        id: 3,
        title: 'The Silent Patient',
        author: 'Alex Michaelides',
        price: 22.99,
        originalPrice: 26.99,
        rating: 4.6,
        reviews: 3456,
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        category: 'mystery',
        tags: ['new'],
      },
      {
        id: 4,
        title: 'Educated',
        author: 'Tara Westover',
        price: 21.99,
        originalPrice: 25.99,
        rating: 4.7,
        reviews: 2345,
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'biography',
        tags: ['bestseller'],
      },
      {
        id: 5,
        title: 'Where the Crawdads Sing',
        author: 'Delia Owens',
        price: 18.99,
        originalPrice: 22.99,
        rating: 4.4,
        reviews: 3456,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'fiction',
        tags: ['popular'],
      },
      {
        id: 6,
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        price: 20.99,
        originalPrice: 24.99,
        rating: 4.6,
        reviews: 2345,
        image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        category: 'romance',
        tags: ['new'],
      },
    ];

    setBooks(mockBooks);
    setFilteredBooks(mockBooks);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...books];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(
      (book) => book.price >= priceRange[0] && book.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredBooks(filtered);
  }, [books, searchTerm, selectedCategory, priceRange, sortBy]);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'fiction', label: 'Fiction' },
    { value: 'non-fiction', label: 'Non-Fiction' },
    { value: 'romance', label: 'Romance' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'biography', label: 'Biography' },
  ];

  const handleAddToCart = (book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">Loading books...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Floating GIF Widget */}
      <GifReveal />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Shop Books</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center space-x-2 text-primary-600 bg-primary-50 px-3 py-2 rounded-lg"
        >
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  {book.tags.includes('new') && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  {book.tags.includes('bestseller') && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      BESTSELLER
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">by {book.author}</p>
                  
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
                      {book.rating} ({book.reviews})
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
                      className="flex-1 bg-primary-600 text-white py-2 px-2 sm:px-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center text-xs sm:text-sm"
                    >
                      <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </button>
                    <button className="p-2 border border-gray-300 rounded-md hover:border-primary-600 transition-colors">
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
