import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SelectForm from "./components/SelectForm";
import CardComponent from "./components/CardComponent";

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    axios.get("https://www.anapioficeandfire.com/api/books").then((res) => {
      setBooks(res.data);
      console.log(books);
    });
  }, []);

  const handleSelectedBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <SelectForm handleSelectedBook={handleSelectedBook} data={books} />
      <CardComponent book={selectedBook} />
    </div>
  );
}

export default App;
