import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="" className="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
          new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
        }
        {
          !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
        }
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)} </>
        )}
      </div>
    </div>
  );
};

export default Book;

// if there is sale - print original price and sale price, if no sale, then only print original price - line 27
// we cannot map over an empty array, it will not work, so we need to fill it with zeros, it does not matter what we fill it in with because we are changing it anyway new Array(4).fill(0)  we use fill function and now it lets us map it 
// we sometimes use index fr the key, but preferrably id, e.g. book.id so the index is unique 
// in .map we use underscore as first parameter, as we are not using it 
// when printing ratings we use math.floor so that it rounds the number to 4 if it is 4.5
// for half stars we do if it is integer (meaning a whole number, full number), then print nothing, and if it is not , print half star 
// you can make this line cleaner by using double && sign so instead of: Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon="star-half-alt" />  and we read it, if the first one is true then it prints second one, if the first one is false then it prints nothing 