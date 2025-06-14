import Button from "./Button";
export default function Book({ book, onSelectBook, showSelectedBook }) {
  const isSelected = book === showSelectedBook;
  //console.log(book);
  return (
    <li className="book-list">
      <img className="book-img" src={book.image} alt="book image" />

      <div>
        <h3>{book.name}</h3>
        <p className="rating">{book.rating} rating</p>
        <p className="price">${book.price}</p>

        {!book.quantity === 0 ? (
          <button className="btn" onClick={() => onSelectBook(book)}>
            {isSelected ? "Remove Cart" : "Add to cart"}
          </button>
        ) : (
          <p>SOLD OUT</p>
        )}
      </div>
    </li>
  );
}
