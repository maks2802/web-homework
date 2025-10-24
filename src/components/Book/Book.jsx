import { useState } from "react";
import { book1 } from "../../data";
import styles from "./Book.module.css";

const Book = () => {
  const [book, setBook] = useState({});

  const addBook = () => {
    setBook(book1);
  };

  const changePrice = () => {
    setBook((prev) => ({
      ...prev,
      price: prev.price + 150,
    }));
  };

  const isLoaded = Object.keys(book).length > 0;

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={addBook} disabled={isLoaded}>
          Add
        </button>
        <button onClick={changePrice} disabled={!isLoaded}>
          Edit
        </button>
      </div>
      {isLoaded && (
        <div className={styles.data}>
          <p>Title: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>Price: {book.price}</p>
        </div>
      )}
    </div>
  );
};

export default Book;
