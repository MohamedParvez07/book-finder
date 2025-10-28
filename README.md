# 📚 Book Finder

A modern, responsive web application built with React and Tailwind CSS that allows users to search for books using the Open Library API.

## Features

- **Smart Search**: Search for books by title with real-time results
- **Beautiful UI**: Clean, modern design with smooth animations and hover effects
- **Responsive Design**: Works perfectly on mobile and desktop devices
- **Book Details**: View book covers, titles, authors, and publication years
- **Favorites**: Save your favorite books locally using localStorage
- **Pagination**: Load more results with a simple "Load More" button
- **Error Handling**: Graceful handling of network errors and empty results
- **Loading States**: Visual feedback during search operations
- **Well-Documented Code**: Comprehensive comments explaining all functionality

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Open Library API** - Book data source

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a book title in the search bar
2. Click "Search" or press Enter
3. Browse through the results
4. Click the heart icon to add books to your favorites
5. Use "Load More" to see additional results

## API

This app uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search):
- Endpoint: `https://openlibrary.org/search.json?title={bookTitle}`
- Book covers: `https://covers.openlibrary.org/b/id/{cover_i}-M.jpg`

## Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Live Demo

**[📚 Try the Live App on CodeSandbox](https://codesandbox.io/s/github/YOUR_USERNAME/book-finder)**

## 🔗 Deployment

This app is deployed on:
- **CodeSandbox**: [Live Demo Link]
- **GitHub**: [Repository Link]

### Deploy Your Own Copy:
1. Fork this repository
2. Import to CodeSandbox: `https://codesandbox.io/s/github/YOUR_USERNAME/book-finder`
3. Or deploy to Vercel, Netlify, or any static hosting service

## 📸 Screenshots

### Desktop View
![Desktop Screenshot](https://via.placeholder.com/800x600/f8fafc/64748b?text=Book+Finder+Desktop)

### Mobile View
![Mobile Screenshot](https://via.placeholder.com/400x800/f8fafc/64748b?text=Book+Finder+Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).