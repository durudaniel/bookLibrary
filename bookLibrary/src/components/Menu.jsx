import BookContainer from "./BookList";
import RenderBook from "./RenderBook";
export default function Menu({
  bookItems,
  showSelectedBook,
  onSelectBook,
  onRemoveCart,
}) {
  return (
    <div className="menu">
      <BookContainer
        bookItems={bookItems}
        onSelectBook={onSelectBook}
        showSelectedBook={showSelectedBook}
      />
      {showSelectedBook && (
        <RenderBook
          showSelectedBook={showSelectedBook}
          onRemoveCart={onRemoveCart}
        />
      )}
    </div>
  );
}
