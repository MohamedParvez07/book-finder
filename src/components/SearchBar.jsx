/**
 * SearchBar Component
 * 
 * A reusable search input component that handles user input for book searches.
 * Features include form validation, loading states, and responsive design.
 * 
 * Props:
 * - onSearch: Function called when user submits a search query
 * - isLoading: Boolean indicating if a search is currently in progress
 */

import { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  // Local state to manage the search input value
  const [query, setQuery] = useState('');

  /**
   * Handle form submission
   * Prevents default form behavior and calls onSearch with trimmed query
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only search if query has content after trimming whitespace
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Search form with flexbox layout */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        {/* Search input field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books by title..."
          className="flex-1 px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          disabled={isLoading} // Disable input during loading
        />
        
        {/* Search button with loading state */}
        <button
          type="submit"
          disabled={isLoading || !query.trim()} // Disable if loading or empty query
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {/* Conditional rendering based on loading state */}
          {isLoading ? (
            <div className="flex items-center gap-2">
              {/* Loading spinner */}
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Searching...
            </div>
          ) : (
            'Search'
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;