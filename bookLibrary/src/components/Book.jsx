import Button from "./Button";
export default function Book() {
  return (
    <li className="book-list">
      <img className="book-img" src="book-1.jpg.JPG" alt="book image" />

      <div>
        <h3>Name of book</h3>
        <p className="rating">4.5 rating</p>
        <p className="price">$10</p>

        <Button>Add to cart</Button>
      </div>
    </li>
  );
}
