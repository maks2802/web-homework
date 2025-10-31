import { useState } from "react";
import "./Book.css";

const Book = () => {
  const book1 = {
    name: "Hamlet",
    author: "William Shakespeare",
    price: 20,
  };

  const [book, setBook] = useState({});

  const handleAddBook = () => {
    setBook(book1);
  };

  const handleEditPrice = () => {
    setBook((prevBook) => ({
      ...prevBook,
      price: prevBook.price + 5,
    }));
  };

  return (
    <div className="book-container">
      <h1>Book Details</h1>
      <button onClick={handleAddBook}>Додати</button>
      <button onClick={handleEditPrice}>Редагувати</button>
      {book.name && (
        <div className="book-info">
          <h1>{book.name}</h1>
          <p>Автор: {book.author}</p>
          <p>Ціна: {book.price}</p>
        </div>
      )}
    </div>
  );
};

export default Book;
