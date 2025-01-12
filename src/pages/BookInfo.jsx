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
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => {
                  const itemPrice = item.salePrice || item.originalPrice;
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img
                          className="cart__book--img"
                          src={item.url}
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>
                          <span className="cart__book--price">
                            ${itemPrice.toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={item.quantity}
                          onChange={(event) =>
                            changeQuantity(item, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        ${(itemPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
                {/* {(!cart || !cart.length) && <img src={EmptyCart}/>} */}
                {(!cart || !cart.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout"
                  no-cursor
                  onClick={() => alert(`Haven't got a chance to doing this :)`)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
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