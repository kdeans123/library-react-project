import React, { useEffect, useState } from 'react';
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = ({ cart, changeQuantity, removeItem }) => {
    const total = () => {
      let price = 0;
      cart.forEach((item) => {
        price += +((item.salePrice || item.originalPrice) * item.quantity);
      });
      return price;
    };
  
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

export default Cart;


// we do ).toFixed(2) on the whole bracket as at least one of them can be a number, we cannot do it on these two separately as one can be a null, and we cannot do toFixed on a null 
//  we are passing book as well here: onChange={(event) => changeQuantity(book, event.target.value)} 
// to show the number of books in the cart when it wounts add value:      value={book.quantity}

// and to calculate total price of the boook, we can do it locally, we multiply quantity by the price:   ${(book.salePrice || book.originalPrice) * book.quantity}  
// we call it when cart changes:  useEffect(() => {       }, [cart])

