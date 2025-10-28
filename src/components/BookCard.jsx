/**
 * BookCard Component
 * 
 * Displays individual book information in a card format with cover image,
 * title, authors, publication year, and favorite functionality.
 * 
 * Features:
 * - Book cover with fallback placeholder
 * - Favorite toggle with localStorage persistence
 * - Responsive design with hover effects
 * - Author name truncation for better layout
 * 
 * Props:
 * - book: Object containing book data from Open Library API
 */

import { useState } from 'react';

const BookCard = ({ book }) => {
  // State to track if the book cover image failed to load
  const [imageError, setImageError] = useState(false);
  
  // State to track if this book is marked as favorite
  // Initialize by checking localStorage on component mount
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    return favorites.some(fav => fav.key === book.key);
  });

  // Generate cover image URL if cover_i exists
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  /**
   * Toggle favorite status for this book
   * Updates both local state and localStorage
   */
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]');
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.key !== book.key);
      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites - store essential book data
      const bookData = {
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        first_publish_year: book.first_publish_year,
        cover_i: book.cover_i
      };
      favorites.push(bookData);
      localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    // Main card container with hover effects
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Book cover section */}
      <div className="relative">
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          {/* Conditional rendering: show cover image or placeholder */}
          {coverUrl && !imageError ? (
            <img
              src={coverUrl}
              alt={book.title}
              className="h-full w-auto object-cover"
              onError={() => setImageError(true)} // Handle image load errors
            />
          ) : (
            // Placeholder when no cover is available
            <div className="text-gray-400 text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded flex items-center justify-center">
                {/* Book icon SVG */}
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm">No Cover Available</span>
            </div>
          )}
        </div>
        
        {/* Favorite button - positioned absolutely in top-right corner */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          {/* Heart icon with conditional styling based on favorite status */}
          <svg 
            className={`w-5 h-5 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`} 
            fill={isFavorite ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      {/* Book information section */}
      <div className="p-4">
        {/* Book title with line clamping for consistent layout */}
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 leading-tight">
          {book.title}
        </h3>
        
        {/* Author information with smart truncation */}
        <p className="text-gray-600 text-sm mb-2">
          {/* Show first 2 authors, indicate if there are more */}
          {book.author_name ? book.author_name.slice(0, 2).join(', ') : 'Unknown Author'}
          {book.author_name && book.author_name.length > 2 && ` +${book.author_name.length - 2} more`}
        </p>
        
        {/* Publication year (only show if available) */}
        {book.first_publish_year && (
          <p className="text-gray-500 text-sm">
            First published: {book.first_publish_year}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookCard;