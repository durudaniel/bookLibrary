import Button from "./Button";

export default function RenderBook() {
  return (
    <div className="order">
      <div className="section-order">
        <img src="book-1.jpg.JPG" alt="book image" className="render-img" />
        <div className="section-btn">
          <button className="btn btn-buy">Buy</button>
          <button className="btn btn-remove">Remove Cart</button>
        </div>
      </div>
      <div className="section-genre">
        <h2>GENRE</h2>
        <p className="text">fiction, action, dysopian, love</p>
      </div>
      <div className="section-dcpt">
        <h3>Description</h3>
        <p className="text">
          This book was written by (author), which happened to be a real life
          experience of his life while working as a carfterian
        </p>
      </div>
    </div>
  );
}
