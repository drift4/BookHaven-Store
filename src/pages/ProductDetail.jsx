import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock book data - in real app, this would come from an API
    const mockBook = {
      id: parseInt(id),
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.5,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'Fiction',
      description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
      isbn: '978-0525559474',
      pages: 304,
      publisher: 'Viking',
      publishDate: 'September 29, 2020',
      language: 'English',
      format: 'Hardcover',
      dimensions: '6.3 x 1.1 x 9.3 inches',
      weight: '1.2 pounds',
    };

    setTimeout(() => {
      setBook(mockBook);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">Loading book details...</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">Book not found</div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      quantity,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4">
        <Link
          to="/shop"
          className="flex items-center text-primary-600 hover:text-primary-700"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Book Image */}
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Book Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {book.rating} ({book.reviews} reviews)
            </span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-primary-600">${book.price}</span>
            {book.originalPrice && (
              <span className="ml-2 text-xl text-gray-500 line-through">
                ${book.originalPrice}
              </span>
            )}
            {book.originalPrice && (
              <span className="ml-2 text-sm text-green-600">
                Save ${(book.originalPrice - book.price).toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{book.description}</p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:border-primary-600 transition-colors">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:border-primary-600 transition-colors">
              <Share2 className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-gray-600">ISBN:</dt>
                <dd>{book.isbn}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Pages:</dt>
                <dd>{book.pages}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Publisher:</dt>
                <dd>{book.publisher}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Publish Date:</dt>
                <dd>{book.publishDate}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Language:</dt>
                <dd>{book.language}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Format:</dt>
                <dd>{book.format}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Dimensions:</dt>
                <dd>{book.dimensions}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Weight:</dt>
                <dd>{book.weight}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600">Reviews coming soon...</p>
        </div>
      </div>

      {/* Related Books */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related books would go here */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
