import Button from "./Button";

export default function RenderBook({ showSelectedBook, onRemoveCart }) {
  return (
    <div className="order">
      <div className="section-order">
        <img
          src={showSelectedBook.image}
          alt="book image"
          className="render-img"
        />
        <div className="section-btn">
          <button className="btn btn-buy">Buy</button>
          <button className="btn btn-remove" onClick={onRemoveCart}>
            Remove Cart
          </button>
        </div>
      </div>
      <div className="section-genre">
        <h2>GENRE</h2>
        <p className="text">{showSelectedBook.genre}</p>
      </div>
      <div className="section-dcpt">
        <h3>Description</h3>
        <p className="text">{showSelectedBook.description}</p>
      </div>
    </div>
  );
}
