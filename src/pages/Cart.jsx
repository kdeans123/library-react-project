import React, { useEffect, useState } from 'react'

const Cart = ({ cart, changeQuantity }) => {
    const (total, setTotal) = useState();
    useEffect(() => {

    }, [cart])
    const total = () => {
        let price = 0;
        cart.forEach(item => {
            price += +(item.salePrice || item.originalPrice).toFixed(2);
        });
        return price;
    };
  
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="cart__title">
                            Cart
                        </h2>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return (
                                            <div className="cart__item">
                                                <div className="cart__book">
                                                    <img src={book.url} 
                                                    className='cart__book--img' 
                                                    alt="" 
                                                    />
                                                    <div className="cart__book--info">
                                                        <span className="cart__book--title">
                                                            {book.title}
                                                        </span>
                                                        <span className="cart__book--price">
                                                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                                                        </span>
                                                        <button className='cart__book--remove'>Remove</button>
            
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input 
                                                        type="number" 
                                                        min={0} 
                                                        max={99} 
                                                        className='cart__input'
                                                        value={book.quantity}
                                                        onChange={(event) => changeQuantity(book, event.target.value)} />
                                                </div>
                                                <div className="cart__total">${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}                                        
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>$9.00</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>$1.00</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>${total()}</span>
                        </div>
                        <butoon className="btn btn__checkout" no-cursor
                        onClick={() => alert(`Haven't got a chance to doing this :)`)}>
                            Proceed to checkout</butoon>
                    </div>
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

