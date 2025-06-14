import BookContainer from "./BookList";
import RenderBook from "./RenderBook";
export default function Menu() {
  return (
    <div className="menu">
      <BookContainer />
      <RenderBook />
    </div>
  );
}
