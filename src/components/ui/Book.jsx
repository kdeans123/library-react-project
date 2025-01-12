import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image()
    image.src = book.url;
    image.onload = () => {
      setImg(image);
    }
  })

  return (
    <div className="book">
      {
          img ? (
          <>
          <Link to={`/books/${book.id}`} className="">
          <figure className="book__img--wrapper">
            <img 
              src={img.src} 
              alt="" 
              className="book__img" 
              />
          </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating}/>   
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/> 
          </>
          ) : (
            <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
            </>
          )
      }
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
// we add Link to books/1 routing - it is hard coded for now, 
//   <Link to={`/books/${book.id}`} className="book__title--link">  we are pushing book.id to the route so it automatically detects the id of the book 
// to build a skeleton of images loading, we use: onLoad={imageLoaded} 
// with the skeleton - we need to show it when the books are loading, and show the books when finished loading, we gonna use turnary operator 
// in the turnary operator we gonna check if there is an image, and if there is 
// image was not defined so we need to create a hook 
//  this is creating a DOM image element: useEffect(() => {    const image = new Image()
// as soon as this book component mounts it is going to call useEffect, it is going to create a DOM image element with java script, and it is going to attach onload function to it: when it loads set this image 
// now we set image.src element, and src is coming form book, so we are programatially create the image now, we not doing igt in html anymore, we are doing it in java script 
// this is powerful as now we can use image onload. and then we set th eimage to the image. 