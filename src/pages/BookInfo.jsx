import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Rating from '../components/ui/Rating';
import Book from '../components/ui/Book';
import Price from '../components/ui/Price';

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams()
  const book = books.find(book => +book.id === +id);
  const [added, setAdded] = useState(false);

  function addBookToCart(book) {
    setAdded(true);
    addToCart(book);
  }

  function bookExistsOnCart() {
    return cart.find(book => book.id === +id);
  }

  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                        </Link>
                        <Link to="/books" className="book__link"><h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">{book.title}</h2>
                            <Rating rating={book.rating}/>
                            <div className="book__selected--price">
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}/>
                            </div>
                            <div className="book__summary">
                                <h3 className="book__summary--title">
                                    {book.summary}
                                </h3>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit. Lorem ipsum dolor sit.
                                </p>
                            </div>
                            {
                                bookExistsOnCart() ? (
                                <Link to={`/cart/`} className="book__link">
                                <button className="btn">Checkout</button>
                                </Link>
                            ) : (
                            <botton className="btn" onClick={() => addBookToCart(book)}>Add to cart</botton>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">Recommended books</h2>
                    </div>
                    <div className="books">
                    {
                        books
                        .filter(book => book.rating === 5 && +book.id !== +id)
                        .slice(0, 4)
                        .map(book => <Book book={book} key={book.id}/>)
                    }
                    </div>                   
                </div>
            </div>
        </main>

    </div>
  )
}

export default BookInfo;


// first of all lets accept the books in the variable
// also make sure it is imported in the app.jsx file 
// we create a link so we can click on a book and we can go to its description and backwards  <Link to="/books" className="book__link"></Link>
// and in the link we add an icon from fontawesome which we need to import, we go to index.is 
// we want to make rating dynamic so we create ui Rating.jsx
// we pass Rating here line 24 for now hard coding it 
// we wnat o recommend 5 star books and make it dynamic 

// we will use useParams: const param = useParams()   - and now it gives us an object of id 7 
// in order to distract the id you need to get it like this: const { id } = useParams() 
//  so now to get the book of id 7, so in order to match it (as we have access to all the books)
// we are going to find the book where the id is equal to the id:   const book = books.find(book => book.id === id); and with that we get undefined
// and this is because in our data id is a number and here id is a string, and since we are using triple === it compares not ony the value but also the type 
// so to fix that you can remove one =, OR add a plus to both of them:  +book.id === +id  and that converts it to a number 
// showing recommended books, so we filter top rated books but we do not want show the book that is the main book on this page:   books.filter(book => book.rating === 5 && book.id !== id) 
// but we need to map it for react not to cry about it, lets map each book to a book:   .map(book => <Book book={book} key={book.id}/>)   - we need a key as well 
// because we only want to show 4 books we need to slice it:  .slice(0, 4)
// we convert string to a number so it works: +book.id !== +id 

//  we want to call this function addtoCart when we click the button:  onClick={() => addtoCart(book)}>  and we use book because we have access to it and we do not want to call it straign away so we do () => 
// after adding tot the cart the button changes to go to checkout:  added ? <button className="btn">Checkout</button> : <botton className="btn" onClick={() => addBooktoCart(book)}>Add to cart</botton>
// so when we switch the book the button changes to "add to cart" again:   function bookExistsOnCart() { return cart.find(book => book.id === +id);