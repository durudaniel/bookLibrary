import Book from "./Book";

export default function BookContainer({
  bookItems,
  onSelectBook,
  showSelectedBook,
}) {
  return (
    <div className="book-container">
      {bookItems.map((books) => (
        <Book
          book={books}
          key={books.id}
          onSelectBook={onSelectBook}
          showSelectedBook={showSelectedBook}
        />
      ))}
    </div>
  );
}
