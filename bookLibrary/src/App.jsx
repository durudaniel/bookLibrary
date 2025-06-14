import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";

import { useState } from "react";

export default function BookApp() {
  const [bookItems, setBookItems] = useState(books);
  const [showSelectedBook, setShowSelectedBook] = useState(null);

  function handleSelectedBook(book) {
    setShowSelectedBook((selected) => (selected === book ? null : book));
  }

  function handleRemoveCart() {
    setShowSelectedBook(null);
  }
  //console.log(showSelectedBook);
  return (
    <div>
      <Header />
      <Menu
        bookItems={bookItems}
        showSelectedBook={showSelectedBook}
        onSelectBook={handleSelectedBook}
        onRemoveCart={handleRemoveCart}
      />
    </div>
  );
}

const books = [
  {
    image: "book-1.jpg.JPG",
    name: "The art of loving him",
    price: 25,
    rating: 5.8,
    genre: "Romance, Fantansy, Fictional, Speech, Fable",
    description: `This book is written by Mirabel Henderson, as she share's
     her knowledge on how to love a man perfectly, from her life experience.
     So, if you're looking forward in build a strong bond between you and your man,
     i think this book is the best option for.`,
    id: 1006,
    quantity: 13,
  },
  {
    image: "book-2.jpg.JPG",
    name: "How to develop self-confidence",
    price: 38,
    rating: 4.8,
    genre: "Educative, Fantansy, Non-fictional, Speech, Dystopian, Literature",
    description: `This book is written by Michael Owen, a brittish proffessor, this book
     contains all the basic tools needed for you to build your confidence in the public 
     and in everything you do in life. so in you're interested in building your confidence, 
     then say no more, this book is the right one for you.`,
    id: 1005,
    quantity: 0,
  },
  {
    image: "book-3.jpg.JPG",
    name: "Holiday of love",
    price: 16,
    rating: 4.5,
    genre: "Romance, Fantansy, Fictional, Speech, Fable",
    description: `This book is written by Cornelia Gruso, as she share's
     her knowledge on everything you need to know about love.
     So, if you're looking forward in build a strong bond between you and your partner,
     i think this book is the best option for`,
    id: 1004,
    quantity: 9,
  },
  {
    image: "book-4.jpg.JPG",
    name: "The Motherless Land",
    price: 18,
    rating: 3.5,
    genre: "Action, Fantansy, Non-Fictional, Speech, Educative, literature",
    description: `This book by Damilare Olakun, if a very fascinating novel, that tells us the
    story of how Nigeria began, the ethics you need to know about our motherland,`,
    id: 1003,
    quantity: 3,
  },
  {
    image: "book-5.jpg.JPG",
    name: "Arsene wenger",
    price: 40,
    rating: 5.9,
    genre: "Romance, Fantansy, Non-Fictional, Speech, Comedy, Life, Action",
    description: `This book was compiled by a french journalist called 'Johne Bournbaden', this
    book tells you everything you need to know about a former french footballer (Arsene wenger),
    how his football career began, clubs he played, his marital life, clubs he also caoched 
    before his retirement.`,
    id: 1002,
    quantity: 0,
  },
  {
    image: "book-6.jpg.JPG",
    name: "Water Baby",
    price: 25,
    rating: 5.8,
    genre: "Poetry, Fantansy, Fictional, Speach, Fable, Comedy, Moral lessons",
    description: `Water Baby is a fictional story, that was written by Mr. Chuks Ojinaka,
    this book is best for children, as it will help them learn the basic of life and the do's
    dont's of one's life.`,
    id: 1001,
    quantity: 13,
  },
];
