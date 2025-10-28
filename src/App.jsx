/**
 * App Component - Main Application Container
 * 
 * The root component that manages the overall application state and coordinates
 * between the SearchBar and BookList components. Handles API calls to Open Library
 * and manages search results, pagination, loading states, and error handling.
 * 
 * Features:
 * - Book search functionality using Open Library API
 * - Pagination with "Load More" functionality
 * - Loading states for both initial search and pagination
 * - Error handling with user-friendly messages
 * - Responsive design with gradient background
 * - Clean, modern UI layout
 */

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  // State management for the application
  const [books, setBooks] = useState([]); // Array of book objects from API
  const [isLoading, setIsLoading] = useState(false); // Loading state for initial search
  const [loadingMore, setLoadingMore] = useState(false); // Loading state for pagination
  const [error, setError] = useState(''); // Error message string
  const [currentQuery, setCurrentQuery] = useState(''); // Current search query for pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page number for pagination
  const [hasMore, setHasMore] = useState(false); // Whether more results are available

  // Configuration constant for API pagination
  const BOOKS_PER_PAGE = 20;

  /**
   * Main function to search for books using Open Library API
   * 
   * @param {string} query - The search term entered by user
   * @param {number} page - Page number for pagination (default: 1)
   * @param {boolean} append - Whether to append results to existing books or replace them
   */
  const searchBooks = async (query, page = 1, append = false) => {
    // Set appropriate loading state based on whether this is initial search or pagination
    if (page === 1) {
      setIsLoading(true);
      setBooks([]); // Clear existing results for new search
    } else {
      setLoadingMore(true);
    }

    setError(''); // Clear any previous errors

    try {
      // Calculate offset for pagination
      const offset = (page - 1) * BOOKS_PER_PAGE;

      // Make API request to Open Library
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=${BOOKS_PER_PAGE}&offset=${offset}`
      );

      // Check if request was successful
      if (!response.ok) {
        throw new Error('Failed to fetch books. Please try again.');
      }

      const data = await response.json();

      // Process successful response
      if (data.docs && data.docs.length > 0) {
        // Filter out books without titles
        const newBooks = data.docs.filter(book => book.title);

        // Either append to existing results or replace them
        if (append) {
          setBooks(prevBooks => [...prevBooks, ...newBooks]);
        } else {
          setBooks(newBooks);
        }

        // Determine if more results are available for pagination
        setHasMore(data.docs.length === BOOKS_PER_PAGE && (offset + BOOKS_PER_PAGE) < data.numFound);
        setCurrentPage(page);
        setCurrentQuery(query);
      } else {
        // Handle case where no books were found
        if (!append) {
          setBooks([]);
        }
        setHasMore(false);
        if (page === 1) {
          setError('No books found for your search. Try different keywords.');
        }
      }
    } catch (err) {
      // Handle any errors that occurred during the request
      setError(err.message || 'Something went wrong. Please check your internet connection and try again.');
      if (!append) {
        setBooks([]);
      }
      setHasMore(false);
    } finally {
      // Always reset loading states when request completes
      setIsLoading(false);
      setLoadingMore(false);
    }
  };

  /**
   * Handler for new search requests from SearchBar component
   * Always starts from page 1 and replaces existing results
   */
  const handleSearch = (query) => {
    searchBooks(query, 1, false);
  };

  /**
   * Handler for "Load More" button clicks
   * Appends additional results to existing ones
   */
  const handleLoadMore = () => {
    if (currentQuery && !loadingMore) {
      searchBooks(currentQuery, currentPage + 1, true);
    }
  };

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">

        {/* Application Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📚 Book Finder
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover your next great read! Search through millions of books and find the perfect title for you.
          </p>
        </div>

        {/* Search Input Component */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Search Results Component */}
        <BookList
          books={books}
          isLoading={isLoading}
          error={error}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
          loadingMore={loadingMore}
        />

        {/* Application Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Powered by{' '}
            <a
              href="https://openlibrary.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Open Library API
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;