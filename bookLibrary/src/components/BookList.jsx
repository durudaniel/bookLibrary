import Description from "./Description";
import Book from "./Book";
export default function BookContainer() {
  return (
    <div>
      <Description />
      <div className="book-container">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
}
