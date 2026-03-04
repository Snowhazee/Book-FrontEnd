import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://cuddly-space-disco-wrg6wwjq4p7425vrw-5000.app.github.dev/books"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setBook(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // filter search
  const filteredBooks = book.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo">📚 Anime Books</div>
        <nav className="nav">
          <button>Home</button>
          <button>Genres</button>
          <button>Top Sales</button>
          <button>Contact</button>
        </nav>
        <input
          type="text"
          placeholder="Search books..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      {/* ===== MAIN ===== */}
      <div className="container">
        <h1 className="title">Welcome To Anime Books</h1>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div className="book-grid">
          {filteredBooks.map((b) => (
            <div key={b.id} className="book-card">
              <img
                src={b.image_url}
                alt={b.title}
                className="book-image"
              />
              <div className="book-info">
                <h3>{b.title}</h3>
                <p className="author">{b.author}</p>
                <p className="price">${b.price}</p>
                <button className="buy-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        © 2026 Anime Books | Made with ❤️ for Otaku
      </footer>
    </>
  );
}

export default App;