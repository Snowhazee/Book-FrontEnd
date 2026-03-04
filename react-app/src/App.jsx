import { useState, useEffect } from 'react';

function App() {

  const [book, setBook] = useState([]);

  useEffect(() => {
  setBook([
    {
      id: 1,
      title: "Naruto Vol.1",
      author: "Masashi Kishimoto",
      price: 9.99,
      image_url: "https://covers.openlibrary.org/b/isbn/9781569319000-L.jpg"
    },
    {
      id: 2,
      title: "One Piece Vol.1",
      author: "Eiichiro Oda",
      price: 10.5,
      image_url: "https://covers.openlibrary.org/b/isbn/9781569319017-L.jpg"
    },
    {
      id: 3,
      title: "Attack on Titan Vol.1",
      author: "Hajime Isayama",
      price: 11.2,
      image_url: "https://covers.openlibrary.org/b/isbn/9781612620244-L.jpg"
    },
    {
      id: 4,
      title: "Demon Slayer Vol.1",
      author: "Koyoharu Gotouge",
      price: 8.75,
      image_url: "https://covers.openlibrary.org/b/isbn/9781974700523-L.jpg"
    },
    {
      id: 5,
      title: "Jujutsu Kaisen Vol.1",
      author: "Gege Akutami",
      price: 9.5,
      image_url: "https://covers.openlibrary.org/b/isbn/9781974710027-L.jpg"
    },
    {
      id: 6,
      title: "Chainsaw Man Vol.1",
      author: "Tatsuki Fujimoto",
      price: 9.2,
      image_url: "https://covers.openlibrary.org/b/isbn/9781974709939-L.jpg"
    },
    {
      id: 7,
      title: "My Hero Academia Vol.1",
      author: "Kohei Horikoshi",
      price: 10.1,
      image_url: "https://covers.openlibrary.org/b/isbn/9781421582696-L.jpg"
    },
    {
      id: 8,
      title: "Bleach Vol.1",
      author: "Tite Kubo",
      price: 9.8,
      image_url: "https://covers.openlibrary.org/b/isbn/9781591164418-L.jpg"
    }
  ]);
}, []);
//
  const bookList = book.map(b => (
    <li key={b.id} style={{ marginBottom: "30px" }}>
      <h3>{b.title}</h3>
      <img src={b.image_url} alt={b.title} width="150" />
      <p>{b.author}</p>
      <p>${b.price}</p>
    </li>
  ));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Anime Ebook</h1>
      <ol style={{ listStyle: "none", padding: 0 }}>
        {bookList}
      </ol>
    </div>
  );
}

export default App;